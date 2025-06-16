import React, { useState } from 'react';
import { Image, Text, TouchableOpacity } from 'react-native';
import { GestureHandlerRootView, GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

import styles from './styles';
import TransformDots from './TransformDots';
import RotateHandle from './RotateHandle';
import HintBox from './HintBox';

type Props = {
  uri: string;
  onRemove?: () => void;
};

export default function DraggableImage({ uri, onRemove }: Props) {
  const [showHint, _setShowHint] = useState(false);

  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const scaleX = useSharedValue(1);
  const scaleY = useSharedValue(1);
  const rotation = useSharedValue(0);

  const panGesture = Gesture.Pan().onChange(e => {
    offsetX.value += e.changeX;
    offsetY.value += e.changeY;
  });

  const rotateGesture = Gesture.Pan().onChange(e => {
    rotation.value += e.translationX * 0.005;
  });

  const makeStretchGesture = (axis: 'x' | 'y' | 'both') =>
    Gesture.Pan().onChange(e => {
      if (axis === 'x') {
        scaleX.value = Math.max(0.3, scaleX.value + e.translationX * 0.01);
      } else if (axis === 'y') {
        scaleY.value = Math.max(0.3, scaleY.value + e.translationY * 0.01);
      } else {
        const delta = (e.translationX + e.translationY) * 0.005;
        scaleX.value = Math.max(0.3, scaleX.value + delta);
        scaleY.value = Math.max(0.3, scaleY.value + delta);
      }
    });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: withSpring(offsetX.value) },
      { translateY: withSpring(offsetY.value) },
      { scaleX: withSpring(scaleX.value) },
      { scaleY: withSpring(scaleY.value) },
      { rotateZ: `${rotation.value}rad` },
    ],
  }));

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.wrapper, animatedStyle]}>
          <GestureDetector gesture={rotateGesture}>
            <Animated.View style={styles.rotateHandle}>
              <RotateHandle />
            </Animated.View>
          </GestureDetector>

          <Image source={{ uri }} style={styles.image} />

          <TransformDots makeStretchGesture={makeStretchGesture} />

          <HintBox show={showHint} />
        </Animated.View>
        <TouchableOpacity style={styles.deleteBtn} onPress={onRemove}>
          <Text style={styles.deleteText}>✖</Text>
        </TouchableOpacity>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}
