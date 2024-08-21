
import { it,expect, test, describe } from 'vitest'
import { screen,render } from '@testing-library/react'
import App from '../App'

describe('App Component Test', () => {

    it('Should render', () => {
        render(<App/>)
        screen.debug()
    })
    // render(<App/>)

    // const div = screen.findByRole('div')
  
    // expect(div).toBeInDocumment()
})