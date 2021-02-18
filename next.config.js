module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.node = {
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
    };
    return config;
  },
};
