// The export statement makes these settings available to other files in 11ty
module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("styles");
  eleventyConfig.addShortcode("planetCard", function(planetName, au) {
    return `<div class="card-container-2">
<main class="card-content">
    <figure class="${planetName}"></figure>
        <li class="Name">
          ${planetName}
        </li>
        <li>
            AU: ${au}
        </li>
</main>
</div>`
  });
};