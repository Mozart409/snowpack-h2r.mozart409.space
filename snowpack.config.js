module.exports = {
  scripts: { 'build:css': 'postcss' },
  mount: {
    public: '/',
    src: '/_dist_',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',

    [
      '@snowpack/plugin-optimize',
      {
        preloadModules: true,
      },
    ],
  ],
};
