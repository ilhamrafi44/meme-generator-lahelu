// components/DraggableText/TransformDots.tsx
import React from 'react';
import { GestureDetector, PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { styles } from './styles';

type Props = {
  makeStretchGesture: (axis: 'x' | 'y' | 'both') => PanGestureHandlerGestureEvent;
};

export default function TransformDots({ makeStretchGesture }: Props) {
  return (
    <>
      {/* Corners */}
      <GestureDetector gesture={makeStretchGesture('both')}>
        <Animated.View style={[styles.dot, styles.topLeft]} />
      </GestureDetector>
      <GestureDetector gesture={makeStretchGesture('both')}>
        <Animated.View style={[styles.dot, styles.topRight]} />
      </GestureDetector>
      <GestureDetector gesture={makeStretchGesture('both')}>
        <Animated.View style={[styles.dot, styles.bottomLeft]} />
      </GestureDetector>
      <GestureDetector gesture={makeStretchGesture('both')}>
        <Animated.View style={[styles.dot, styles.bottomRight]} />
      </GestureDetector>

      {/* Edges */}
      <GestureDetector gesture={makeStretchGesture('y')}>
        <Animated.View style={[styles.dot, styles.topCenter]} />
      </GestureDetector>
      <GestureDetector gesture={makeStretchGesture('y')}>
        <Animated.View style={[styles.dot, styles.bottomCenter]} />
      </GestureDetector>
      <GestureDetector gesture={makeStretchGesture('x')}>
        <Animated.View style={[styles.dot, styles.middleLeft]} />
      </GestureDetector>
      <GestureDetector gesture={makeStretchGesture('x')}>
        <Animated.View style={[styles.dot, styles.middleRight]} />
      </GestureDetector>
    </>
  );
}
