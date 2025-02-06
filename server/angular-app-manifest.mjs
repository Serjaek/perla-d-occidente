
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
    'index.csr.html': {size: 23953, hash: '3d979edfb23a83cd00e86cf2874edcc8866f10182d43685d14b13edb599406a1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17527, hash: 'ae30312ecf0150194bb32f92bb65c68ea895a631053a91e99b6dbe5273f1e337', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 48786, hash: 'f7279090ceda0e567626e753d3fe3cf853be1eaa00d5540bcae8f438ef030744', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CXQUZ3PB.css': {size: 6979, hash: 'mYIPdabeAag', text: () => import('./assets-chunks/styles-CXQUZ3PB_css.mjs').then(m => m.default)}
  },
};
