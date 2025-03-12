import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#cccccc',
        borderColor: '#c20202',
    },
    displayLabel: {
        flex: 1,
        color: 'black',
        fontSize: 18,
        alignItems: 'flex-end',
        marginLeft: 28,
    },
    loginInput: {
        numberOfLines: 1,
        color: 'crimson',
        backgroundColor: 'white',
        fontSize: 16,
        alignItems: 'flex-end',
        margin: 10,
        padding: 4,
    },
    loginButton: {
        flex: 1,
        backgroundColor: 'green',
        color: 'white',
        fontSize: 24,
        borderRadius: 12,
        alignItems: 'center',
        margin: 10,
        padding: 4,
    }
})