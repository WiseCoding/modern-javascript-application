module.exports = {
  purge: {
    enabled: false,
    content: ['*.html', './scripts/index.js'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};
