
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/perla-d-occidente/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/perla-d-occidente"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23953, hash: '172c3973eafc16b2527fef3466fb97d698103d70d6f4549049095334257ab479', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17527, hash: '745df3b6b05557f766e4c5baa4cca3ed3b6a290aa0b14b5617bd7e2e56f2d8b3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 48786, hash: '1e832ca185c7b70f3a4ca0426f2cb7267cb4bced123b8a22c6a7739bb3556f9d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
