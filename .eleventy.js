module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/admin");

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

  // Collect all unique postTags across posts
  eleventyConfig.addCollection("postTagList", (collectionApi) => {
    const tagSet = new Set();
    collectionApi.getFilteredByTag("posts").forEach(item => {
      (item.data.postTags || []).forEach(tag => tagSet.add(tag));
    });
    return [...tagSet].sort();
  });

  // Stories collection
  eleventyConfig.addCollection("stories", (collectionApi) => {
    return collectionApi.getFilteredByTag("stories");
  });

  // Collect all unique storyType values across stories
  eleventyConfig.addCollection("storyTypeList", (collectionApi) => {
    const typeSet = new Set();
    collectionApi.getFilteredByTag("stories").forEach(item => {
      if (item.data.storyType) typeSet.add(item.data.storyType);
    });
    return [...typeSet].sort();
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
