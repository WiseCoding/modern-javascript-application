module.exports = {
  purge: {
    enabled: true,
    content: ['./src/*.html', './src/js/*.js'],
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
