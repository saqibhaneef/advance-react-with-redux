
import { it,expect, test, describe, vi } from 'vitest'
import { screen,render } from '@testing-library/react'
import App from '../App'

describe('App Component Test', () => {    
    
    const {container}=render(<App/>) 
    screen.debug()
    it('Should render App Component', () => {
        expect(container).not.toBeNull();       
    })

    it('Contains Comment Box', () => {

        const divElements=document.querySelectorAll('div');
        
        const hasCommentBoxText = Array.from(divElements).some(div => div.textContent.includes('Comment Box'));
        
        expect(hasCommentBoxText).toBeTruthy()
    })    

    it('Contains Comment List', () => {

        const divElements=document.querySelectorAll('div');
        
        const hasCommentBoxText = Array.from(divElements).some(div => div.textContent.includes('Comment List'));
        
        expect(hasCommentBoxText).toBeTruthy()
    })
})