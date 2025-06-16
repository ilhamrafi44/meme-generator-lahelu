import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';

type MemeCanvasProps = {
  backgroundUri: string;
  children?: React.ReactNode;
};

export default function MemeCanvas({ backgroundUri, children }: MemeCanvasProps) {
  return (
    <GestureHandlerRootView style={styles.root}>
      <View style={styles.canvas}>
        <Image source={{ uri: backgroundUri }} style={styles.background} resizeMode="contain" />
        {children}
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  canvas: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 0,
  },
});
