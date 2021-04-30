module.exports = {
  "stories": [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-essentials",
  ],
  "babel": async (options) => ({
    ...options
  })
}