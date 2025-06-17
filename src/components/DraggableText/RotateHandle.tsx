// components/DraggableText/RotateHandle.tsx
import React from 'react';
import { Text } from 'react-native';
import { GestureDetector, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import styles from './styles';

export default function RotateHandle({ gesture }: PanGestureHandlerGestureEvent) {
  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={styles.rotateHandle}>
        <Text style={styles.rotateIcon}>↻</Text>
      </Animated.View>
    </GestureDetector>
  );
}
