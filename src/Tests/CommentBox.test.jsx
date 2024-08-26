import React from 'react'
import CommentBox from '../Components/CommentBox'
import { it,beforeEach, describe, expect, afterEach } from 'vitest'
import { screen, render, fireEvent } from '@testing-library/react'

describe('<CommentBox/>',()=>{

    let commentBoxContainer=render(<CommentBox/>);

    // beforeEach(()=>{
    //     commentBoxContainer = render(<CommentBox/>)
    // })

    // afterEach(()=>{
    //     commentBoxContainer=null;
    // })

    it('has text area and button',async ()=>{

        // const textBox= await commentBoxContainer.findByRole("textbox")
        const button= await commentBoxContainer.findByRole("button")
        // expect(textBox).not.toBeNull()

        expect(button).not.toBeNull()

    })

    describe('text area',async()=>{
        const textBox = screen.getByTestId('textbox')        
        fireEvent.change(textBox, { target: { value: 'new comment' } });

        it('TextBox change event', ()=>{

            // const textBox = screen.getByTestId('textbox')            
            // fireEvent.change(textBox, { target: { value: 'new comment' } });
    
            expect(textBox.value).toEqual('new comment');
        })
    
        it('Form submit and empty text area', ()=>{
    
            // const textBox = screen.getByTestId('textbox')        
            // fireEvent.change(textBox, { target: { value: 'new comment' } });
    
            const button = screen.getByText('Submit Comment')        
            fireEvent.click(button);
    
            expect(textBox.value).toEqual('');
    
        })

    })    

})


