import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

// const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

type Props = {
  children: React.ReactNode;
  onAccept?: (state: TransformState) => void;
  onRemove?: () => void;
  onDuplicate?: () => void;
};

export type TransformState = {
  offsetX: number;
  offsetY: number;
  scale: number;
  rotation: number;
};

export default function CanvasTransformer({ children, onAccept, onRemove, onDuplicate }: Props) {
  const offsetX = useSharedValue(0);
  const offsetY = useSharedValue(0);
  const scale = useSharedValue(1);
  const rotate = useSharedValue(0);

  // Drag
  const panGesture = Gesture.Pan().onChange(e => {
    const newX = offsetX.value + e.changeX;
    const newY = offsetY.value + e.changeY;

    const BOUND = 150;
    offsetX.value = Math.max(-BOUND, Math.min(newX, BOUND));
    offsetY.value = Math.max(-BOUND, Math.min(newY, BOUND));
  });

  // Pinch
  const pinchGesture = Gesture.Pinch().onChange(e => {
    const newScale = scale.value * e.scale;
    scale.value = Math.max(0.5, Math.min(newScale, 2.0));
  });

  // Rotate (multitouch)
  const rotateGesture = Gesture.Rotation().onChange(e => {
    rotate.value += e.rotation;
  });

  // Accept Button
  const handleAccept = () => {
    if (onAccept) {
      runOnJS(onAccept)({
        offsetX: offsetX.value,
        offsetY: offsetY.value,
        scale: scale.value,
        rotation: rotate.value,
      });
    }
  };

  const composed = Gesture.Simultaneous(panGesture, pinchGesture, rotateGesture);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: withSpring(offsetX.value) },
      { translateY: withSpring(offsetY.value) },
      { scale: withSpring(scale.value) },
      { rotateZ: `${rotate.value}rad` },
    ],
  }));

  const styles = StyleSheet.create({
    transformBox: {
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 2,
      borderColor: '#007aff',
      backgroundColor: '#fff',
      padding: 8,
      minHeight: 300,
      minWidth: 300,
      position: 'relative',
    },
    buttons: {
      position: 'absolute',
      top: -40,
      flexDirection: 'row',
      gap: 10,
      zIndex: 20,
    },
    button: {
      fontSize: 20,
      paddingHorizontal: 10,
      paddingVertical: 2,
      backgroundColor: '#fff',
      borderRadius: 6,
      borderWidth: 1,
      borderColor: '#ddd',
    },
    instruction: {
      fontSize: 12,
      color: '#888',
      marginTop: 6,
      position: 'absolute',
      bottom: -22,
    },
  });

  return (
    <GestureDetector gesture={composed}>
      <Animated.View style={[styles.transformBox, animatedStyle]}>
        <View style={styles.buttons}>
          <TouchableOpacity onPress={handleAccept}>
            <Text style={styles.button}>✅</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onDuplicate}>
            <Text style={styles.button}>📄</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onRemove}>
            <Text style={styles.button}>❌</Text>
          </TouchableOpacity>
        </View>

        {children}

        <Text style={styles.instruction}>🔄 Drag, Pinch, Rotate</Text>
      </Animated.View>
    </GestureDetector>
  );
}
