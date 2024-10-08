import { Component } from "react";


class CommentBox extends Component{

    state={comment:''}

    handleChange=(event)=>{
        this.setState({comment:event.target.value})
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        this.setState({comment:''})


    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h4>Comment Box</h4>
                <textarea value={this.state.comment} onChange={this.handleChange} data-testid="textbox"/>                    
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}


export default CommentBox;