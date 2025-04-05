
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/blog"
  },
  {
    "renderMode": 2,
    "route": "/manage-posts"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5207, hash: '62f7522ad1a2773a71d522fcd9905c03766f648951ed7ee2dc6e9f7895276cc6', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1179, hash: 'ff019cacb116ab403f6a258240d0321052c570fee8c628c43cdc364ee340faf2', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 33474, hash: 'b52b10f9bfc0df22e3a83b9adaa40253316e676130c4c1c715487b25e3befc45', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'blog/index.html': {size: 20173, hash: 'e275f866aa409f875ac563f2ae96fd1f797976b95195aafc7f0ee60252e3b64d', text: () => import('./assets-chunks/blog_index_html.mjs').then(m => m.default)},
    'manage-posts/index.html': {size: 30236, hash: 'd67915dc31cdfa7b79fa8e35c0cc734d7bbd84133c5262a0468c7505d6557ea2', text: () => import('./assets-chunks/manage-posts_index_html.mjs').then(m => m.default)},
    'styles-EH6IZTQC.css': {size: 231556, hash: 'Y6nf/l+1iKw', text: () => import('./assets-chunks/styles-EH6IZTQC_css.mjs').then(m => m.default)}
  },
};
