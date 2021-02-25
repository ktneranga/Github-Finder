import React from 'react'
import PropTypes from 'prop-types'; 

function repoItem({repo}) {
    return (
        <div className="card">
            <h3><a href={repo.html_url}>{repo.name}</a></h3>
        </div>
    )
}

repoItem.prototype={
    repo : PropTypes.object.isRequired
}

export default repoItem
