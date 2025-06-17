import { StyleSheet, Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  canvasWrapper: {
    width: screenWidth,
    aspectRatio: 1, // makes it a square box
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ddd',
    marginVertical: 10,
  },
  actions: {
    padding: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  actionBtn: {
    backgroundColor: '#007aff',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
  },
  actionText: {
    color: '#fff',
    fontWeight: '600',
  },
});

export default styles;
