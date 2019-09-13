import LazyImport from '../components/LazyImport';

export const Home = LazyImport({
  loader: () => import('./Home' /* webpackChunkName: 'home' */),
});

export const Product = LazyImport({
  loader: () => import('./Product' /* webpackChunkName: 'product' */),
});