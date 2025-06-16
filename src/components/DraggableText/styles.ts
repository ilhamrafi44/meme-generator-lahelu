// components/DraggableText/styles.ts
import { StyleSheet } from 'react-native';

const dotSize = 14;
const dotBase = {
  position: 'absolute' as const,
  width: dotSize,
  height: dotSize,
  borderRadius: dotSize / 2,
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
  box: {
    borderWidth: 2,
    borderColor: '#00f',
    borderStyle: 'dashed',
    borderRadius: 8,
    padding: 8,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxTransparent: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    textShadowColor: 'black',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  editor: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    minWidth: 200,
    maxWidth: 300,
  },
  textInput: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  actionBtn: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
  },
  confirm: {
    backgroundColor: 'green',
  },
  cancel: {
    backgroundColor: 'gray',
  },
  actionText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  deleteBtn: {
    position: 'absolute',
    top: -16,
    right: -16,
    backgroundColor: 'red',
    borderRadius: 12,
    padding: 4,
    zIndex: 10,
  },
  deleteText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
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
  rotateHandle: {
    position: 'absolute',
    top: -28,
    alignSelf: 'center',
    padding: 6,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  rotateIcon: {
    fontSize: 18,
    color: '#333',
  },

  // 🔵 Transformation Dots (Corner & Edge Handles)
  dot: dotBase,
  topLeft: { ...dotBase, top: -8, left: -8 },
  topRight: { ...dotBase, top: -8, right: -8 },
  bottomLeft: { ...dotBase, bottom: -8, left: -8 },
  bottomRight: { ...dotBase, bottom: -8, right: -8 },
  topCenter: { ...dotBase, top: -8, left: '50%', marginLeft: -dotSize / 2 },
  bottomCenter: { ...dotBase, bottom: -8, left: '50%', marginLeft: -dotSize / 2 },
  middleLeft: { ...dotBase, top: '50%', left: -8, marginTop: -dotSize / 2 },
  middleRight: { ...dotBase, top: '50%', right: -8, marginTop: -dotSize / 2 },
});
