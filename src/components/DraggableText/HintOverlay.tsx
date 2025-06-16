// components/DraggableText/HintOverlay.tsx
import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

export default function HintOverlay() {
  return (
    <View style={styles.hintBox}>
      <Text style={styles.hintText}>Drag corners to scale, edges to stretch, ↻ to rotate</Text>
    </View>
  );
}
