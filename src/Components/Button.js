import React, { Component } from 'react'

class Button extends Component{
    render(){
        
    return(
    <div className='button-container'>
        <button onClick={(e)=>this.props.previous(e.target.value)}>{'< Previous'}</button>
        <button onClick={(e)=>this.props.next(e.target.value)}>{'Next >'}</button>
     </div>
    )
}
}


export default Button