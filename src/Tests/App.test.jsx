
import { it,expect, test, describe, vi } from 'vitest'
import { screen,render } from '@testing-library/react'
import App from '../App'
import CommentBox from '../Components/CommentBox'

describe('App Component Test', () => {    
    
    render(<App/>)

    it('Contains Comment Box', () => {
        screen.debug()

        const divElements=document.querySelectorAll('div');
        
        const hasCommentBoxText = Array.from(divElements).some(div => div.textContent.includes('Comment Box'));
        
        expect(hasCommentBoxText).toBeTruthy()
    })

    it('Contains Comment List', () => {
        screen.debug()

        const divElements=document.querySelectorAll('div');
        
        const hasCommentBoxText = Array.from(divElements).some(div => div.textContent.includes('Comment List'));
        
        expect(hasCommentBoxText).toBeTruthy()
    })
})