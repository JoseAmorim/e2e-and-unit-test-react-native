import React from 'react'
import { View, TextInput, StyleSheet, Button, Text } from 'react-native'

// import { Container } from './styles';

const LoginForm: React.FC = () => {
    const [name, setUser] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [loggedIn, setLogged] = React.useState(false)

    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Bem vindo</Text>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setUser}
                testID="name-input"
                placeholder="Digite o usuário"
            />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                textContentType="password"
                secureTextEntry
                testID="password-input"
                placeholder="Digite a senha"
            />
            <Button
                title="Login"
                onPress={() => {
                    // let's pretend this is making a server request, so it's async
                    // (you'd want to mock this imaginary request in your unit tests)...
                    setTimeout(() => {
                        if (name === 'test' && password === 'test123') {
                            setLogged(true)
                        }
                    }, Math.floor(Math.random() * 200))
                }}
            />
            {loggedIn && <Text>Logado</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        marginTop: 40,
    },
    welcome: {
        fontSize: 22,
        fontWeight: 'bold',
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
        marginTop: 10,
    },
})

export default LoginForm
