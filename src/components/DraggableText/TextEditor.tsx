// components/DraggableText/TextEditor.tsx
import React from 'react';
import {
  Platform,
  KeyboardAvoidingView,
  TextInput,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import { styles } from './styles';

type Props = {
  value: string;
  onChange: (val: string) => void;
  onConfirm: () => void;
  onCancel: () => void;
};

export default function TextEditor({ value, onChange, onConfirm, onCancel }: Props) {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.editor}
    >
      <TextInput
        value={value}
        onChangeText={onChange}
        autoFocus
        multiline
        style={styles.textInput}
      />
      <View style={styles.actions}>
        <TouchableOpacity style={[styles.actionBtn, styles.confirm]} onPress={onConfirm}>
          <Text style={styles.actionText}>✔</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.actionBtn, styles.cancel]} onPress={onCancel}>
          <Text style={styles.actionText}>✖</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
