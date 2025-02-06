
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
    'index.csr.html': {size: 23951, hash: 'f46290b544c9b163992c7f7ee1b902f402ce50a670bb59408d5573d3cbdcc6c9', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17525, hash: '51a22a4fa15a65df47226e002c2977a592ee0175cf0568560f3b1ac163119a7b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 48784, hash: '19adf600009480d2206ac4170e4e9fed47ee7f89ecac966c52ae91f9242a0481', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
