import variable from '../variables/platform';

export default (variables = variable) => {
  return {
    'NativeBase.Button': {
      alignSelf: null,
    },
    flex: 1,
    alignSelf: 'center',
    alignItems: 'flex-end',
  };
};
