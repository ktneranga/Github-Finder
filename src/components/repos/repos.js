import React from 'react'
import RepoItem from './repoItem'
import PropTypes from 'prop-types';

const repos=({repos})=> {
    return (
        <div>
            {
                repos.map(repo=>( 
                    <RepoItem key={repo.id} repo={repo}/>
                ))
            }
            
        </div>
    )
}

repos.prototype = {
    repos : PropTypes.array.isRequired
}

export default repos
