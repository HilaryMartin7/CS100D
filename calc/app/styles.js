import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainBody: {
        flex: 1,
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: '#cccccc',
        borderColor: '#c20202',
    },
    displayLabel: {
        flex: 1,
        backgroundColor: 'crimson',
        color: 'white',
        fontSize: 24,
        alignItems: 'flex-end',
        margin: 10,
        padding: 4,
    },
    buttonRow: {
        alignItems: 'center',
        flexDirection: 'row',
      },
    actionButton: {
        flex: 1,
        backgroundColor: 'darkgrey',
        color: 'white',
        fontSize: 24,
        borderRadius: 12,
        alignItems: 'center',
        margin: 10,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 16,
        paddingRight: 16,
    },
    numberButton: {
        flex: 1,
        backgroundColor: 'white',
        color: 'black',
        fontSize: 24,
        borderRadius: 12,
        alignItems: 'center',
        margin: 10,
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 16,
        paddingRight: 16,
    }

})