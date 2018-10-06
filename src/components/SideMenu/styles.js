import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#0033FF',
    paddingVertical: 28,
    paddingLeft: 17,
    paddingTop: StatusBar.currentHeight + 10,
    alignItems: 'center',
  },
  header: {
    color: '#FFF',
    paddingLeft: 9,
    fontSize: 16
  }
});
