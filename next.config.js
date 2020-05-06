const withFonts = require('next-fonts');
const withSass = require('@zeit/next-sass');

module.exports = withFonts(withSass({
  webpack(config) {
    return config;
  },
}));
