import { StyleSheet } from 'react-native';

const dotBase = {
  position: 'absolute' as const,
  width: 14,
  height: 14,
  borderRadius: 7,
  backgroundColor: '#0af',
  borderWidth: 1,
  borderColor: '#fff',
  zIndex: 99,
};

export const styles = StyleSheet.create({
  wrapper: {
    position: 'absolute',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  rotateHandle: {
    position: 'absolute',
    top: -28,
    alignSelf: 'center',
    padding: 6,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    zIndex: 10,
  },
  dot: dotBase,
  topLeft: { ...dotBase, top: -8, left: -8 },
  topRight: { ...dotBase, top: -8, right: -8 },
  bottomLeft: { ...dotBase, bottom: -8, left: -8 },
  bottomRight: { ...dotBase, bottom: -8, right: -8 },
  topCenter: { ...dotBase, top: -8, left: '50%', marginLeft: -7 },
  bottomCenter: { ...dotBase, bottom: -8, left: '50%', marginLeft: -7 },
  middleLeft: { ...dotBase, top: '50%', left: -8, marginTop: -7 },
  middleRight: { ...dotBase, top: '50%', right: -8, marginTop: -7 },
  hintBox: {
    marginTop: 6,
    backgroundColor: 'rgba(0,0,0,0.7)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 8,
  },
  hintText: {
    color: 'white',
    fontSize: 12,
    fontStyle: 'italic',
  },
});
