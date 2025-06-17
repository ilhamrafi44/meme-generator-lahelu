import React from 'react';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import styles from './styles';

export default function TransformDots({
  makeStretchGesture,
}: {
  makeStretchGesture: (axis: 'x' | 'y' | 'both') => Gesture.PanGesture;
}) {
  return (
    <>
      {/* Corners */}
      <GestureDetector gesture={makeStretchGesture('both')}>
        <Animated.View style={styles.topLeft} />
      </GestureDetector>
      <GestureDetector gesture={makeStretchGesture('both')}>
        <Animated.View style={styles.topRight} />
      </GestureDetector>
      <GestureDetector gesture={makeStretchGesture('both')}>
        <Animated.View style={styles.bottomLeft} />
      </GestureDetector>
      <GestureDetector gesture={makeStretchGesture('both')}>
        <Animated.View style={styles.bottomRight} />
      </GestureDetector>

      {/* Edges */}
      <GestureDetector gesture={makeStretchGesture('y')}>
        <Animated.View style={styles.topCenter} />
      </GestureDetector>
      <GestureDetector gesture={makeStretchGesture('y')}>
        <Animated.View style={styles.bottomCenter} />
      </GestureDetector>
      <GestureDetector gesture={makeStretchGesture('x')}>
        <Animated.View style={styles.middleLeft} />
      </GestureDetector>
      <GestureDetector gesture={makeStretchGesture('x')}>
        <Animated.View style={styles.middleRight} />
      </GestureDetector>
    </>
  );
}
