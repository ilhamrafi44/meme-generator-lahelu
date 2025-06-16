// components/DraggableText/index.tsx
import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';

import TextEditor from './TextEditor';
import TransformDots from './TransformDots';
import RotateHandle from './RotateHandle';
import HintOverlay from './HintOverlay';
import { styles } from './styles';

type DraggableTextProps = {
  id: string;
  text: string;
  onChangeText?: (text: string) => void;
  onRemove?: (id: string) => void;
};

export default function DraggableText({ id, text, onChangeText, onRemove }: DraggableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [tempText, setTempText] = useState(text);
  const [showHint, setShowHint] = useState(false);

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

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: withSpring(offsetX.value) },
      { translateY: withSpring(offsetY.value) },
      { scaleX: withSpring(scaleX.value) },
      { scaleY: withSpring(scaleY.value) },
      { rotateZ: `${rotation.value}rad` },
    ],
  }));

  const makeStretchGesture = (axis: 'x' | 'y' | 'both') =>
    Gesture.Pan().onChange(e => {
      const deltaX = e.translationX * 0.01;
      const deltaY = e.translationY * 0.01;
      if (axis === 'x') scaleX.value = Math.max(0.3, scaleX.value + deltaX);
      else if (axis === 'y') scaleY.value = Math.max(0.3, scaleY.value + deltaY);
      else {
        scaleX.value = Math.max(0.3, scaleX.value + deltaX);
        scaleY.value = Math.max(0.3, scaleY.value + deltaY);
      }
    });

  const handleShowHint = () => {
    setShowHint(true);
    setTimeout(() => setShowHint(false), 3000);
  };

  return (
    <GestureHandlerRootView>
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.wrapper, animatedStyle]}>
          <View style={[styles.box, !isEditing && styles.boxTransparent]}>
            {isEditing && <RotateHandle gesture={rotateGesture} />}

            {!isEditing ? (
              <TouchableOpacity
                onLongPress={() => {
                  setIsEditing(true);
                  handleShowHint();
                }}
              >
                <Text style={styles.text}>{text || 'Empty text'}</Text>
              </TouchableOpacity>
            ) : (
              <TextEditor
                value={tempText}
                onChange={setTempText}
                onConfirm={() => {
                  onChangeText?.(tempText);
                  setIsEditing(false);
                }}
                onCancel={() => {
                  setTempText(text);
                  setIsEditing(false);
                }}
              />
            )}

            {showHint && <HintOverlay />}

            {isEditing && <TransformDots makeStretchGesture={makeStretchGesture} />}
          </View>

          <TouchableOpacity style={styles.deleteBtn} onPress={() => onRemove?.(id)}>
            <Text style={styles.deleteText}>✖</Text>
          </TouchableOpacity>
        </Animated.View>
      </GestureDetector>
    </GestureHandlerRootView>
  );
}
