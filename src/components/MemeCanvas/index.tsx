import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import CanvasTransformer, { TransformState } from './CanvasTransformer';

type MemeCanvasProps = {
  backgroundUri?: string;
  children?: React.ReactNode;
};

export default function MemeCanvas({ backgroundUri, children }: MemeCanvasProps) {
  const [_transform, setTransform] = useState<TransformState | null>(null);

  const handleAccept = (newState: TransformState) => {
    setTransform(newState); // save latest state
    console.log('✅ Canvas Saved:', newState);
  };

  const handleDuplicate = () => {
    console.log('📄 Duplicate clicked (not implemented)');
  };

  const handleRemove = () => {
    console.log('❌ Canvas removed (not implemented)');
  };
  const styles = StyleSheet.create({
    root: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      width: 300,
      height: 300,
      position: 'absolute',
    },
  });
  return (
    <GestureHandlerRootView style={styles.root}>
      <CanvasTransformer
        onAccept={handleAccept}
        onRemove={handleRemove}
        onDuplicate={handleDuplicate}
      >
        {backgroundUri && (
          <Image source={{ uri: backgroundUri }} style={styles.background} resizeMode="contain" />
        )}
        {children}
      </CanvasTransformer>
    </GestureHandlerRootView>
  );
}
