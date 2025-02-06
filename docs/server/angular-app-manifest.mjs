
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'perla-d-occidente',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/perla-d-occidente"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 23951, hash: 'b027b5a90a99cb57a68fdf90c0b9150142aefb75a53d6b0b425e875ffc0e5bdc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17525, hash: '8ffdb235eb9b32433377891a61c444800083ccf67085b3b7ca5e6120939f8484', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 48784, hash: '7b39699d350078c8217c6e1b6ccfc432be549d2bf05962bb5530de3af6f2dbf5', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
