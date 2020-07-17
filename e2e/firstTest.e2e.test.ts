import { by, device, expect, element } from 'detox'

describe('Login', () => {
    beforeEach(async () => {
        await device.reloadReactNative()
    })

    it('should have name input', async () => {
        await expect(element(by.id('name-input'))).toBeVisible()
    })

    it('should have password input', async () => {
        await expect(element(by.id('password-input'))).toBeVisible()
    })

    it('should have login button', async () => {
        await expect(element(by.text('Login'))).toBeVisible()
    })

    it('should type the name, password and confirm', async () => {
        await element(by.id('name-input')).typeText('test')

        await element(by.id('password-input')).typeText('test123')

        await element(by.text('Login')).tap()

        await expect(element(by.text('Logado'))).toBeVisible()
    })
})
