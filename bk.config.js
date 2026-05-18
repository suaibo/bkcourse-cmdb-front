
const mockServer = require('./mock-server');

const backendTarget = process.env.BK_BACKEND_URL || 'http://127.0.0.1:8000';

module.exports = {
  host: process.env.BK_APP_HOST,
  port: process.env.BK_APP_PORT,
  publicPath: process.env.BK_STATIC_URL,
  cache: true,
  open: true,
  replaceStatic: true,

  // webpack config 配置
  configureWebpack() {
    return {
      devServer: {
        proxy: {
          '/biz-list': {
            target: backendTarget,
            changeOrigin: true,
          },
          '/set-list': {
            target: backendTarget,
            changeOrigin: true,
          },
          '/module-list': {
            target: backendTarget,
            changeOrigin: true,
          },
          '/host-list': {
            target: backendTarget,
            changeOrigin: true,
          },
          '/host-detail': {
            target: backendTarget,
            changeOrigin: true,
          },
          '/search-file': {
            target: backendTarget,
            changeOrigin: true,
          },
          '/backup-file': {
            target: backendTarget,
            changeOrigin: true,
          },
          '/backup-record': {
            target: backendTarget,
            changeOrigin: true,
          },
        },
        setupMiddlewares: mockServer,
      },
    };
  },
};
