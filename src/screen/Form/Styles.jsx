import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  form: {
    width: '100%',
    height: '86%',
    alignItems: 'center',
    justifyContent: 'space-around',
    zIndex: 2,
    padding: 20,
    backgroundColor: '#282A36',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  overlay: {
    width: width,
    height: height,
    backgroundColor: '#282A36',
    position: 'absolute',
    top: 0,
    left: 0,
    opacity: 0.7,
    zIndex: 1,
    borderRadius: 20,
  },
});

export default styles;
