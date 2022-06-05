import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: 320,
    height: 470,
    borderRadius: 16,
    shadowColor: 'rgba(191, 191, 192, 0.3)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  content: {
    flex: 1,
    // position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actions: {
    width: 150,
    marginBottom: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});

export default styles;
