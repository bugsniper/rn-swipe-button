import {StyleSheet} from 'react-native';

const borderWidth = 1;
const margin = 1;
const maxContainerHeight = 120;
const Styles = StyleSheet.create({
  container: {
    alignItems: 'flex-end',
    alignSelf: 'flex-start',
    borderRadius: 5,
    borderRightWidth: 0,
    borderWidth: 0,
    margin:-1,
    height: 58,
  },
  containerRTL: {
    alignItems: 'flex-start',
    alignSelf: 'flex-end',
    borderRadius: 5,
    borderLeftWidth: 0,
    borderWidth,
    margin: 0,
  },
  icon: {
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 0,
    justifyContent: 'center',
    marginVertical: -1,
  },
  defaultThumbIcon: {
    width: 100,
    height: 58,
    borderRadius: 5,
    backgroundColor: '#800080',
  },
});

export default Styles;
export {borderWidth, margin};
