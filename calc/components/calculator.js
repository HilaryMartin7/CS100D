import { View, Pressable, Text } from 'react-native';
import { useState } from 'react';
import { styles } from '@/app/styles';
import Button from '@/components/button';


export default function Calculator() {

    const [display, setDisplay] = useState(0);
    const [leftnum, setLeftnum] = useState(0);
    const [op, setOp] = useState('')

    const onNumberPress = (v) => {
        setDisplay(10*display + v);
    }

    const onClearPress = () => {
        setDisplay(0);
    }

    const onOpPress = (o) => {
        setLeftnum(display);
        setOp(o);
        setDisplay(0);
    }

    const onPiPress = () => {

        setDisplay(Math.PI);
    }

    const onSqRtPress = () => {
       
        setDisplay(Math.sqrt(display));
    }

    const onFacPress = () => {
        setLeftnum(display);
        let value = display;
        let res = display;
             
        if (value === 0 || value === 1) 
            res = 1; 
        while (value > 1) { 
            value--;
            res *= value;
            }       
  
        
        setDisplay(res);
    }

    const onEqPress = () => {
        const rightnum = display;
        let res = display;
        if (op == '+')
            res = leftnum + rightnum
        else if (op == '-')
            res = leftnum - rightnum
        if (op == '*')
            res = leftnum * rightnum
        if (op == '/')
            res = leftnum / rightnum
        if (op == '%')
            res = leftnum % rightnum
        setOp('')
        setLeftnum(0)
        setDisplay(res)
    }

    return (
        <View>
            <Text style={styles.displayLabel}>{display}</Text>
            <View style={styles.buttonRow}>
                <Button theme='number' label='7' onPress={() => onNumberPress(7)}/>
                <Button theme='number' label='8' onPress={() => onNumberPress(8)}/>
                <Button theme='number' label='9'onPress={() => onNumberPress(9)}/>
                <Button theme='action' label='/'onPress={() => onOpPress('/')}/>
                <Button theme='action' label='%'onPress={() => onOpPress('%')}/>
            </View>
            <View style={styles.buttonRow}>
                <Button theme='number' label='4'onPress={() => onNumberPress(4)}/>
                <Button theme='number' label='5'onPress={() => onNumberPress(5)}/>
                <Button theme='number' label='6'onPress={() => onNumberPress(6)}/>
                <Button theme='action' label='*'onPress={() => onOpPress('*')}/>
                <Button theme='action' label='pi'onPress={() => onPiPress()}/>
            </View>
            <View style={styles.buttonRow}>
                <Button theme='number' label='1'onPress={() => onNumberPress(1)}/>
                <Button theme='number' label='2'onPress={() => onNumberPress(2)}/>
                <Button theme='number' label='3'onPress={() => onNumberPress(3)}/>
                <Button theme='action' label='-'onPress={() => onOpPress('-')}/>
                <Button theme='action' label='sqrt'onPress={onSqRtPress}/>
            </View>
            <View style={styles.buttonRow}>
                <Button theme='number' label='0'onPress={() => onNumberPress(0)}/>
                <Button theme='action' label='C'onPress={onClearPress}/>
                <Button theme='action' label='=' onPress={onEqPress}/>
                <Button theme='action' label='+'onPress={() => onOpPress('+')}/>
                <Button theme='action' label='!'onPress={onFacPress}/>
            </View>
        </View>
    )
}