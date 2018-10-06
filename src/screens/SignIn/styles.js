import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50'
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'flex-end'
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  formContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'flex-end'
  },
  title: {
    color: '#FFF',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    opacity: 0.9
  }
});
