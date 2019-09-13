import Loadable from 'react-loadable';

import Loading from '../Loading';

const LazyLoader = (opts) => Loadable({
  ...opts,
  loading: Loading,
});

export default LazyLoader;
