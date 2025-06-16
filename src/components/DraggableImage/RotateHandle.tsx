import React from 'react';
import { Text } from 'react-native';

export default function RotateHandle() {
  const styles = StyleSheet.create({
    rotateIcon: {
      fontSize: 18,
      color: '#333',
    },
  });

  return <Text style={styles.rotateIcon}>↻</Text>;
}
