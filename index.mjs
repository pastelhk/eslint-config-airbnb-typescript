import base from './base.mjs';
import pkg from './package.json' with { type: 'json' };
import recommended from './recommended.mjs';

export default {
  meta: {
    name: 'eslint-airbnb-typescript',
    version: pkg.version,
  },
  configs: {
    recommended,
    base,
  },
};
