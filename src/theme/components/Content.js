import variable from '../variables/platform';

export default (variables = variable) => {
  return {
    flex: 1,
    backgroundColor: 'transparent',
    'NativeBase.Segment': {
      borderWidth: 0,
      backgroundColor: 'transparent'
    }
  };
};
