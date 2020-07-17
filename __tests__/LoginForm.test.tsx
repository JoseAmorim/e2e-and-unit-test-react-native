/**
 * @format
 */

import 'react-native'
import React from 'react'
import { render, fireEvent, waitFor } from 'react-native-testing-library'
import LoginForm from '../src/components/LoginForm'

test('should login successfully', async () => {
    const { getByTestId, getByText, queryByText } = render(<LoginForm />)

    const credential = {
        username: 'test',
        password: 'test123',
    }

    const nameInput = getByTestId('name-input')

    fireEvent.changeText(nameInput, credential.username)

    const passwordInput = getByTestId('password-input')

    fireEvent.changeText(passwordInput, credential.password)

    const button = getByText('Login')

    fireEvent.press(button)

    await waitFor(() => expect(queryByText('Logado')).toBeTruthy())

    const text = getByText('Logado')

    expect(text.props.children).toBe('Logado')
})
