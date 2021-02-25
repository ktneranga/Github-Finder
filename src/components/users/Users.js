import React from 'react'
import UserItem from './userItem'
import Spinner from '../layouts/Spinner'
import PropTypes from 'prop-types';

 const Users = ({users, loading})=> {

        if(loading){
            return <Spinner style={{width:'200px', display:'block', margin : 'auto'}}/>
        }else{
            return (
                <div className="grid-3">
                    {
                        users.map(user=>(
                            //we need to have unique key prop in order to loop through data
                            <UserItem key={user.id} user={user}/>
                        ))
                    }
                </div>
            )
        }
}

Users.propType={
    users : PropTypes.array.isRequired,
    loading : PropTypes.bool.isRequired
}

export default Users
