import React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
  scale: any;
  setScale: (val: number) => void;
};

export default function ControlDots({ scale, setScale }: Props) {
  const styles = StyleSheet.create({
    dotContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderWidth: 1,
      borderColor: '#aaa',
    },
  });
  return <View style={styles.dotContainer}>{/* You can add visual dots for drag/stretch */}</View>;
}
