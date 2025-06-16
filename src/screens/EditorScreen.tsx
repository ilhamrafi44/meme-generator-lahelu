import React, { useState } from 'react';
import { View, StyleSheet, Button, SafeAreaView } from 'react-native';
import MemeCanvas from '../components/MemeCanvas';
import DraggableText from '../components/DraggableText';
import memeTemplates from '../utils/templates';

export default function EditorScreen() {
  const [selectedTemplate, _setSelectedTemplate] = useState<string>(memeTemplates[0]);
  const [texts, setTexts] = useState<string[]>(['']);

  const handleAddText = () => setTexts([...texts, '']);
  const handleChangeText = (index: number, newText: string) => {
    const updated = [...texts];
    updated[index] = newText;
    setTexts(updated);
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    actions: {
      padding: 16,
      backgroundColor: '#eee',
      flexDirection: 'row',
      justifyContent: 'center',
    },
  });
  return (
    <SafeAreaView style={styles.container}>
      <MemeCanvas backgroundUri={selectedTemplate}>
        {texts.map((text, i) => (
          <DraggableText key={text + 1} text={text} onChangeText={t => handleChangeText(i, t)} />
        ))}
      </MemeCanvas>

      <View style={styles.actions}>
        <Button title="Add Text" onPress={handleAddText} />
      </View>
    </SafeAreaView>
  );
}
