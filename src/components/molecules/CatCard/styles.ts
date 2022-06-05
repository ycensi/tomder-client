import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 16,
  },
  image: {
    borderRadius: 16,
  },
  card: {
    flex: 1,
    borderRadius: 16,
  },
  content: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  information: {
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 16,
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
  },
  mainInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainLabel: {
    fontSize: 16,
  },
  infoLabel: {
    fontSize: 8,
    color: '#BFBFC0',
  },
});

export default styles;
