//user item is the card component of a one user
import React from 'react'
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

function userItem ({user : {login, avatar_url, id}}){

    /*
    this component is not using a state, so that we can use stateless functions as components
    */
    
        // //object destructing
        // const {login, avatar_url, html_url, id} = props.user;

        return (
            <div className="card all-center">
                <img src={avatar_url} className="round-img" style={{width:'60px'}} alt={`user_image_${id}`}/>
                <h3>{login}</h3>
                <div>
                    <Link to={`/user/${login}`} className="btn btn-sm bg-dark my-1">More</Link>
                </div>
            </div>
        )
}

userItem.prototype = {
    user : PropTypes.object.isRequired
}



export default userItem
