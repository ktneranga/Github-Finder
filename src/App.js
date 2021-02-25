import React, {Component, Fragment} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/layouts/Navbar';
import Users from './components/users/Users'
import Search from './components/users/Search'
import Alert from './components/layouts/Alert'
import About from './components/pages/About'
import User from './components/users/User'
import axios from 'axios'
import './App.css';

class App extends Component {

  state = {
    users : [],
    loading : false,
    alert : null,
    user : {},
    repos : []
  }

  // async componentDidMount(){
  //   // axios.get('https://api.github.com/users').then((res)=>console.log(res.data));

  //   //when the state running means it's fetching data
  //   this.setState({loading : true})

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
  //   ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

  //   //after data fetching loading should be stopped
  //   this.setState({users : res.data, loading : false})
  // }

  //search users
   searchUsers= async (text)=>{
    //make loading true
    this.setState({loading : true});

    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

    this.setState({users : res.data.items, loading : false})
  }

  //get single user
  getUser = async(userName) =>{
    //make loading true
    this.setState({loading : true});

    const res = await axios.get(`https://api.github.com/users/${userName}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    console.log(res.data);
    this.setState({user : res.data, loading : false})

  }

  //get user's repos
 getUserRepos = async(userName)=>{
    const res = await axios.get(`https://api.github.com/users/${userName}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    this.setState({repos : res.data, loading: false});
 }

  //clear users from state
  clearUsers = ()=>this.setState({users : [], loading : false})

  //showAlert
  setAlert = (msg, type)=>{
  this.setState({alert : {msg : msg, type : type}})
  //set time out
  setTimeout(()=>this.setState({alert : null}), 5000);
 }


  render(){
    const {users,user, loading, repos} = this.state;
    return (
      //we have to wrap within the Router
      <Router>
      <div className='app'>
        <Navbar/>
        <div className="container">
          <Alert alert={this.state.alert}/>
          {/* search and the users should be in home page */}
          <Switch>
            <Route exact path='/' render={props=>(
             <Fragment>
                <Search 
                searchUsers={this.searchUsers} 
                clearUsers={this.clearUsers} 
                showClear={this.state.users.length > 0 ?true:false}
                setAlert={this.setAlert}
                />
                <Users loading={loading} users = {users}/>
             </Fragment>
            )}/>
            <Route exact path='/about' component={About}/>
            <Route exact path='/user/:login' render={props=>(
              <Fragment>
                <User {...props} getUser={this.getUser} user={user} loading={loading} getUserRepos={this.getUserRepos} repos={repos}/>
              </Fragment>
            )}/>
          </Switch>
        </div>
      </div>
      </Router>
     )
  }
}

export default App;
