import LazyImport from '../components/LazyImport';

export const Product = LazyImport({
  loader: () => import('./Product' /* webpackChunkName: 'product' */),
});
