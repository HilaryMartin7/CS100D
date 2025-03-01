import { View, Pressable, Text } from 'react-native';
import { useState } from 'react';
import { styles } from '@/app/styles';

export default function Button({theme, label, onPress}) {
    return (
        <Pressable onPress={onPress}>
            <View style={theme === 'action' ? styles.actionButton : styles.numberButton}>
                    <Text>{label}</Text>
            </View>
        </Pressable>
    )
}