/**
 * @format
 */

import 'react-native'
import React from 'react'
import { render, fireEvent, waitFor } from 'react-native-testing-library'

import TestForm from '../src/components/TestForm'

test('examples of some things', async () => {
    const { getByTestId, getByText, queryByTestId } = render(<TestForm />)
    const famousWomanInHistory = 'Ada Lovelace'

    const input = getByTestId('input')
    fireEvent.changeText(input, famousWomanInHistory)

    const button = getByText('Print Username')
    fireEvent.press(button)

    await waitFor(() => expect(queryByTestId('printed-username')).toBeTruthy())

    const text = getByTestId('printed-username')

    expect(text.props.children).toBe(famousWomanInHistory)
})
