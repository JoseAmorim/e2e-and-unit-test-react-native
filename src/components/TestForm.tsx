import React from 'react'
import { TextInput, StyleSheet, View, Button, Text } from 'react-native'

// import { Container } from './styles';

function TestForm() {
    const [name, setUser] = React.useState('')
    const [show, setShow] = React.useState(false)

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setUser}
                testID="input"
                placeholder="Digite o usuário"
            />
            <Button
                title="Print Username"
                accessibilityLabel="print username"
                onPress={() => {
                    // let's pretend this is making a server request, so it's async
                    // (you'd want to mock this imaginary request in your unit tests)...
                    setTimeout(() => {
                        setShow(!show)
                    }, Math.floor(Math.random() * 200))
                }}
            />
            {show && <Text testID="printed-username">{name}</Text>}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        margin: 40,
    },
    input: {
        width: '80%',
        height: 40,
        textAlignVertical: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#b4b4b4',
        backgroundColor: 'white',
        paddingLeft: 10,
        paddingRight: 10,
    },
})

export default TestForm
