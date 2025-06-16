import React, { useState } from 'react';
import { View, Button, SafeAreaView } from 'react-native';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import MemeCanvas from '../components/MemeCanvas';
import DraggableText from '../components/DraggableText';
import DraggableImage from '../components/DraggableImage';
import memeTemplates from '../utils/templates';
import { styles } from '../styles/editorScreenStyles';

type TextOverlay = {
  id: string;
  value: string;
};

export default function EditorScreen() {
  const [selectedTemplate] = useState<string>(memeTemplates[0]);
  const [texts, setTexts] = useState<TextOverlay[]>([]);
  const [images, setImages] = useState<{ id: string; uri: string }[]>([]);

  const handleAddText = () => {
    setTexts(prev => [...prev, { id: uuidv4(), value: '' }]);
  };

  const handleChangeText = (id: string, value: string) => {
    setTexts(prev => prev.map(t => (t.id === id ? { ...t, value } : t)));
  };

  const handleRemoveText = (id: string) => {
    setTexts(prev => prev.filter(t => t.id !== id));
  };

  const handleAddImage = () => {
    const stock = [
      'https://cdn-icons-png.flaticon.com/512/616/616408.png',
      'https://cdn-icons-png.flaticon.com/512/616/616430.png',
    ];
    const random = stock[Math.floor(Math.random() * stock.length)];
    setImages(prev => [...prev, { id: uuidv4(), uri: random }]);
  };

  const handleRemoveImage = (id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
  };

  return (
    <SafeAreaView style={styles.container}>
      <MemeCanvas backgroundUri={selectedTemplate}>
        {texts.map(t => (
          <DraggableText
            key={t.id}
            id={t.id}
            text={t.value}
            onChangeText={val => handleChangeText(t.id, val)}
            onRemove={handleRemoveText}
          />
        ))}

        {images.map(img => (
          <DraggableImage key={img.id} uri={img.uri} onRemove={() => handleRemoveImage(img.id)} />
        ))}
      </MemeCanvas>

      <View style={styles.actions}>
        <Button title="Add Text" onPress={handleAddText} />
        <Button title="Add Image" onPress={handleAddImage} />
      </View>
    </SafeAreaView>
  );
}
