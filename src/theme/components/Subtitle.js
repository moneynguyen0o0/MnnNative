import { Platform } from 'react-native';

import variable from '../variables/platform';

export default (variables = variable) => {
  return {
    fontSize: variables.subTitleFontSize,
    fontFamily: variables.titleFontfamily,
    color: variables.subtitleColor,
    textAlign: 'center',
    paddingLeft: Platform.OS === 'ios' ? 4 : 0,
    marginLeft: Platform.OS === 'ios' ? undefined : -3
  };
};
