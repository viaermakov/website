const fs = require("fs");
const path = require("path");
const prism = require("prismjs");
const marked = require("marked");
const matter = require("gray-matter");
const readingTime = require("reading-time");

// Support JSX syntax highlighting
require("prismjs/components/prism-jsx.min");

const cwd = process.cwd();
const POSTS_DIR = path.join(cwd, "src/content/posts/");
const EXCERPT_SEPARATOR = "<!-- more -->";
const renderer = new marked.Renderer();
const linkRenderer = renderer.link;
renderer.link = (href, title, text) => {
  const html = linkRenderer.call(renderer, href, title, text);

  if (href.indexOf("/") === 0) {
    return html;
  } else if (href.indexOf("#") === 0) {
    const html = linkRenderer.call(renderer, "javascript:;", title, text);
    return html.replace(
      /^<a /,
      `<a onclick="document.location.hash='${href.substr(1)}';" `
    );
  }

  return html.replace(/^<a /, '<a target="_blank" rel="nofollow" ');
};

renderer.code = (code, language) => {
  const parser = prism.languages[language] || prism.languages.html;
  const highlighted = prism.highlight(code, parser, language);
  return `<pre class="language-${language}"><code class="language-${language}">${highlighted}</code></pre>`;
};

marked.setOptions({ renderer });


export function parseDate(currentDate) {
  const day = currentDate.getDate().toString().padStart(2, "0");
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const year = currentDate.getFullYear();

  return `${day}.${month}.${year}`;
}

const INITIAL_COVER_URL =
  "https://res.cloudinary.com/dk4mytxmk/image/upload/v1595919985/samples/cloudinary-group.jpg";
const posts = fs
  .readdirSync(POSTS_DIR)
  .filter((fileName) => /\.md$/.test(fileName))
  .map((fileName) => {
    const fileMd = fs.readFileSync(path.join(POSTS_DIR, fileName), "utf8");
    const { data, content: rawContent } = matter(fileMd);
    const { title, date, lang, tags, cover = INITIAL_COVER_URL } = data;
    const slug = fileName.split(".")[0];
    let content = rawContent;
    let excerpt = "";

    if (rawContent.indexOf(EXCERPT_SEPARATOR) !== -1) {
      const splittedContent = rawContent.split(EXCERPT_SEPARATOR);
      excerpt = splittedContent[0];
      content = splittedContent[1];
    }

    const html = marked(content);
    const readingStats = readingTime(content);
    const printReadingTime = readingStats.text;


    const printDate = parseDate(date);

    return {
      title: title || slug,
      tags,
      cover,
      slug,
      html,
      date,
      lang,
      excerpt,
      printDate,
      printReadingTime,
    };
  });

posts.sort((a, b) => {
  const dateA = new Date(a.date);
  const dateB = new Date(b.date);

  if (dateA > dateB) return -1;
  if (dateA < dateB) return 1;
  return 0;
});

posts.forEach((post) => {
  post.html = post.html.replace(/^\t{3}/gm, "");
});

export default posts;
