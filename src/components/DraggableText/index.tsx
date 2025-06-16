import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { GestureDetector, Gesture, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

type DraggableTextProps = {
  text: string;
  onChangeText?: (text: string) => void;
};

export default function DraggableText({ text, onChangeText }: DraggableTextProps) {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);

  const pan = Gesture.Pan().onChange(e => {
    offsetX.value += e.changeX;
    offsetY.value += e.changeY;
  });

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: withSpring(offsetX.value) },
      { translateY: withSpring(offsetY.value) },
    ],
  }));
  const styles = StyleSheet.create({
    textWrapper: {
      position: 'absolute',
    },
    text: {
      fontSize: 32,
      fontWeight: 'bold',
      color: '#fff',
      textAlign: 'center',
      textShadowColor: 'black',
      textShadowOffset: { width: 1, height: 1 },
      textShadowRadius: 2,
    },
  });
  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={pan}>
        <Animated.View style={[styles.textWrapper, animatedStyle]}>
          <TextInput value={text} onChangeText={onChangeText} style={styles.text} multiline />
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}
