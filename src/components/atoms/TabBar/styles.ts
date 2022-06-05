import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tabBarWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    backgroundColor: '#fff',
    borderRadius: 36,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 60,
    width: 150,
    shadowColor: 'rgba(191, 191, 192, 0.3)',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  tabBarIcon: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  activeIcon: {
    tintColor: '#EC537E',
  },
  icon: {
    width: 15,
    height: 15,
    resizeMode: 'contain',
  },
});

export default styles;
