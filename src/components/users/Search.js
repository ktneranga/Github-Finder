import React, { Component } from 'react'
import PropTypes from 'prop-types';

class Search extends Component {

    state = {
        text : '' 
    }

    //onChange = (e) => this.setState({text : e.target.value});
    onChange = (e) => this.setState({[e.target.name] : e.target.value});

    onSubmit = (e)=>{
        e.preventDefault();
        //display an alert
        if(this.state.text===''){
            this.props.setAlert('Please enter something', 'light');
        }else{
        //when we click on the submit button we props up the text in the state
        //then we can send the search value to the App.js component
        this.props.searchUsers(this.state.text);
        this.setState({text : ''});
        }
    }

    onClick = (e) =>{
        e.preventDefault();
        this.props.clearUsers()
    }



    //add a propTypes for searchUsers
   static propTypes = {
       searchUsers : PropTypes.func.isRequired,
       clearUsers : PropTypes.func.isRequired,
       showClear : PropTypes.bool.isRequired,
   }

    render() {

        return (
            <div>
            <form className="form" onSubmit={this.onSubmit}>
                {/* usually when we have a text box we attach with state */}
                <input 
                type="text" 
                name="text" 
                placeholder="Search here..." 
                value={this.state.text}
                onChange={this.onChange}
                />
                <input type="submit" name="submit" value="Search" className="btn btn-dark btn-block"/>
            </form>
            {
                
                this.props.showClear && <button type="submit" name="clear" className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>
            }
            
            </div>
            
            
        )
    }
}

export default Search
