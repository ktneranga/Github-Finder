import React, { Component,Fragment } from 'react'
import Spinner from '../layouts/Spinner'
import PropTypes from 'prop-types';
import Repos from '../repos/repos'
import {Link} from 'react-router-dom'

export class User extends Component {

//we need componentDidMount life cycle method
componentDidMount(){
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
}

    static propTypes = {
        loading : PropTypes.bool.isRequired,
        getUser : PropTypes.func.isRequired,
        user : PropTypes.object.isRequired,
        repos : PropTypes.array.isRequired,
        getUserRepos : PropTypes.func.isRequired
    }

    
    render() {

        const {
            name,
            avatar_url,
            location,
            bio,
            blog,
            login,
            html_url,
            followers,
            following,
            public_repos,
            public_gists,
            hireable,
            company
        }=this.props.user

        const {loading, repos} = this.props;

        if(loading)return <Spinner/>
        return(
            <Fragment>
                <Link to='/' className="btn btn-light">Back to Search</Link>
                Hireble : {' '}
                {
                    hireable ? (<i className="fas fa-check text-success"></i>) : (<i className="fas fa-times-circle text-danger"></i>)
                }
                <div className="card grid-2">
                    <div className="all-center">
                        <img src={avatar_url} alt={`img_${login}`} style={{width:'150px'}} className="round-img"/>
                        <h1>{name}</h1>
                        <p>Location : {location}</p>
                    </div>
                    <div>
                        { bio && (<Fragment>
                            <h3>Bio</h3>
                            {bio}
                        </Fragment>) }
                        <br></br>
                        <a className="btn btn-dark my-1" href={html_url}>Visit Github Profile</a>
                        <ul>
                            <li>
                            {
                                login && (
                                    <Fragment>
                                        <strong>User name : </strong>{login}
                                    </Fragment>
                                )
                            }
                            </li>
                            <li>
                            {
                                company && (
                                    <Fragment>
                                        <strong>Company : </strong>{company}
                                    </Fragment>
                                )
                            }
                            </li>
                            <li>
                            {
                                blog && (
                                    <Fragment>
                                        <strong>Website : </strong>{blog}
                                    </Fragment>
                                )
                            }
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="badge badge-danger">Followers: {followers}</div>
                    <div className="badge badge-success">Following: {following}</div>
                    <div className="badge badge-light">Public Repos: {public_repos}</div>
                    <div className="badge badge-dark">Public Repos: {public_gists}</div>
                </div>
                <Repos repos={repos}/>           
            </Fragment>
        )
    }
}

export default User
