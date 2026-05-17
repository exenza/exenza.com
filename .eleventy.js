module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // Date filter
  eleventyConfig.addFilter("dateDisplay", (date) => {
    return new Date(date).toLocaleDateString("en-GB", {
      year: "numeric", month: "long", day: "numeric"
    });
  });

  // Excerpt filter
  eleventyConfig.addFilter("excerpt", (content) => {
    const stripped = content.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
    return stripped.substring(0, 200) + (stripped.length > 200 ? "…" : "");
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
