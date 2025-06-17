import React from 'react';
import { View, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native';

type TemplateSelectorProps = {
  templates: string[];
  selected: string | undefined;
  onSelect: (uri: string) => void;
};

export default function TemplateSelector({ templates, selected, onSelect }: TemplateSelectorProps) {
  const styles = StyleSheet.create({
    wrapper: {
      paddingVertical: 8,
      backgroundColor: '#f2f2f2',
    },
    thumbnailWrapper: {
      marginRight: 10,
      borderRadius: 8,
      overflow: 'hidden',
      borderWidth: 2,
      borderColor: 'transparent',
    },
    selected: {
      borderColor: '#007aff',
    },
    thumbnail: {
      width: 60,
      height: 60,
      resizeMode: 'cover',
    },
  });

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={templates}
        horizontal
        keyExtractor={(item, idx) => `${item}-${idx}`}
        contentContainerStyle={{ paddingHorizontal: 12 }}
        renderItem={({ item }) => {
          const isSelected = selected === item;
          return (
            <TouchableOpacity
              onPress={() => onSelect(item)}
              style={[styles.thumbnailWrapper, isSelected && styles.selected]}
            >
              <Image source={{ uri: item }} style={styles.thumbnail} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
