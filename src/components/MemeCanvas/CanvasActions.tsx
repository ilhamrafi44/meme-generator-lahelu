import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

type Props = {
  onDuplicate: () => void;
  onRemove: () => void;
  onAccept: () => void;
};

export default function CanvasActions({ onDuplicate, onRemove, onAccept }: Props) {
  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: -40,
      flexDirection: 'row',
      gap: 8,
    },
    btn: {
      padding: 6,
      backgroundColor: '#eee',
      borderRadius: 6,
      marginHorizontal: 4,
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn} onPress={onDuplicate}>
        <Text>📄</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={onAccept}>
        <Text>✅</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={onRemove}>
        <Text>❌</Text>
      </TouchableOpacity>
    </View>
  );
}
