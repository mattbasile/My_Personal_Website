import React from 'react';

class NavSquare extends React.Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    render(){
        return(
            <div>
            <h3>{this.props.title}</h3>
            <i className={this.props.icon}> </i>  
            </div>
        )
    }

}

export default NavSquare