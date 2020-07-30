<script>
  export let title;

  let hovered = false;
  const handleMouseOver = () => {
    hovered = true;
  };
</script>

<style>
  .caption-item {
    position: relative;

    margin: 20px 0;
    padding-left: 30px;

    font-family: "Verdana", sans-serif;
    line-height: 18px;
    color: #591d48;
    cursor: pointer;
  }

  .caption-item:hover {
    opacity: 0.8;
  }

  .caption-item::before {
    content: "";

    position: absolute;
    top: 0;
    left: 0;

    width: 20px;
    height: 20px;

    border-radius: 8px;
  }

  .caption-item:nth-child(1)::before {
    background-color: #86cfa3;
  }

  .caption-item:nth-child(2)::before {
    background-color: #a2c6e0;
  }

  .caption-item:nth-child(3)::before {
    background-color: #ffc7ec;
  }

  .caption-item:nth-child(4)::before {
    background-color: #f8faa0;
  }

  .caption-item:nth-child(5)::before {
    background-color: #adffd8;
  }

  .caption-item:nth-child(6)::before {
    background-color: #f2c48f;
  }

  .caption-item:nth-child(7)::before {
    background-color: #e3bfe2;
  }

  .hovered {
    opacity: 0.8;
    stroke-width: 12;
  }
</style>

<li class="caption-item" class:hovered on:mouseover={handleMouseOver}>
  {title}
</li>
