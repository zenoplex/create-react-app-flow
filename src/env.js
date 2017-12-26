// @flow
const { NODE_ENV } = process.env;

// $FlowFixMe
export const nodeEnv: 'production' | 'development' | 'test' =
  NODE_ENV || 'development';
