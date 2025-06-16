import React from 'react';
import { StyleSheet, Image } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { GestureHandlerRootView, GestureDetector, Gesture } from 'react-native-gesture-handler';

type MemeCanvasProps = {
  backgroundUri: string;
  children?: React.ReactNode;
};

export default function MemeCanvas({ backgroundUri, children }: MemeCanvasProps) {
  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGesture = Gesture.Pan().onChange(e => {
    translateX.value += e.changeX;
    translateY.value += e.changeY;
  });

  const pinchGesture = Gesture.Pinch().onChange(e => {
    scale.value = e.scale;
  });

  const composedGesture = Gesture.Simultaneous(panGesture, pinchGesture);

  const canvasStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: withTiming(scale.value) },
      { translateX: withTiming(translateX.value) },
      { translateY: withTiming(translateY.value) },
    ],
  }));
  const styles = StyleSheet.create({
    root: {
      flex: 1,
    },
    canvas: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      ...StyleSheet.absoluteFillObject,
      zIndex: 0,
    },
  });
  return (
    <GestureHandlerRootView style={styles.root}>
      <GestureDetector gesture={composedGesture}>
        <Animated.View style={[styles.canvas, canvasStyle]}>
          {/* <Image source={{ uri: backgroundUri }} style={styles.background} resizeMode="contain" /> */}
          {children}
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}
