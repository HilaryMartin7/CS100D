import { View, Pressable, Text } from 'react-native';
import { useState } from 'react';
import { styles } from '@/app/styles';


export default function Counter({label, initialCount}) {
    const [count, setCount] = useState(0)

    const onIncrement = () => {
        setCount(count+1);
    }
    
    return (
        <View>
            <Text style={styles.displayLabel}>{count}</Text>
            <Pressable onPress={onIncrement}>
                <Text style={styles.actionButton} >{label}</Text>
            </Pressable>
        </View>
    )
}