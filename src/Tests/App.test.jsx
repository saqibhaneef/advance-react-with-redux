
import { it,expect, test, describe, vi, beforeEach } from 'vitest'
import { screen,render } from '@testing-library/react'
import App from '../App'
import CommentBox from '../Components/CommentBox'
import CommentList from '../Components/CommentsList'


describe('<App/>', () => {    
    let container;
    
    beforeEach(()=>{
        container=render(<App/>)     
    })
    
    
    it('Should render App Component', () => {
        expect(container).not.toBeNull();       
    })

    it('Shows comment box', () => {
        
        expect(container).contain(CommentBox);
    })

    it('Shows a Comment List', () => {
        
        expect(container).contain(CommentList);
    })
    
    // it('Contains Comment Box', () => {

    //     const divElements=document.querySelectorAll('div');
        
    //     const hasCommentBoxText = Array.from(divElements).some(div => div.textContent.includes('Comment Box'));
        
    //     expect(hasCommentBoxText).toBeTruthy()
    // })    

    

    // it('Contains Comment List', () => {

    //     const divElements=document.querySelectorAll('div');
        
    //     const hasCommentBoxText = Array.from(divElements).some(div => div.textContent.includes('Comment List'));
        
    //     expect(hasCommentBoxText).toBeTruthy()
    // })
})