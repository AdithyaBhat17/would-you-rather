import React from 'react';
import { connect } from 'react-redux';
import { logIn } from '../actions/authentication';
import { addUserAction } from '../actions/shared';
import { Redirect } from 'react-router-dom';
import loginimg from '../assets/login.svg';
import Navbar from './Navbar';
class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            login: false,
            redirect: false,
            userNotFound: false,
            usernameTaken: false
        }
        this.switchTabs = this.switchTabs.bind(this);        
        this.loginForm = this.loginForm.bind(this);
        this.signupForm = this.signupForm.bind(this);        
    }

    switchTabs(action){
        action === 'login' ? this.setState({login: true}) : this.setState({login: false})
    }

    loginForm(e){
        e.preventDefault();
        const username = e.target[0].value;
        console.log('username',username);
        const { users, dispatch } = this.props;
        users.map(user => {
            if(user === username){
                dispatch(logIn(username));
                this.setState({redirect:true});
            }else{
                this.setState({userNotFound: true});
            }
        });
    }

    signupForm(e){
        e.preventDefault();
        const username = e.target[0].value;
        const name = e.target[1].value;
        console.log(username + name);
        const { users, dispatch } = this.props;
        users.map(user => {
            if(user === username){
                this.setState({usernameTaken: true});
            }
        });
        dispatch(addUserAction(username, name));
    }

    render(){
        const {from} = this.props.location.state || {from: {pathname: '/dashboard'}}
        const { login, redirect, userNotFound, usernameTaken } = this.state;
        const { authUser } = this.props;
        if(redirect || authUser !== null)
            return <Redirect to={from}/> 
        return(
            <div>
                <Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-12">
                            <div style={login ? {display:`block`} : {display:`none`}}>
                                <h1 className="tagline">Welcome Back!</h1>
                                <form onSubmit={this.loginForm} className="form">
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" id="username" className="form-control" required placeholder="shrek"/>
                                    </div>
                                    <button className="login" type="submit">Let me in!</button>
                                    <span 
                                    onClick={() => this.switchTabs('register')}
                                    style={{fontSize:`12px`,marginLeft:`5px`,cursor:`pointer`}}
                                    >New here? Please sign up</span>
                                    {userNotFound && <div style={{color:`#ff0000`}}>Hey! Looks like you're new here.. try signing up</div>}
                                </form>
                            </div>
                            <div style={login === false ? {display:`block`} : {display:`none`}}>
                                <h1 className="tagline-s">Signup to get started!</h1>
                                <form onSubmit={this.signupForm} className="form">
                                    <div className="form-group">
                                        <label htmlFor="username">Username</label>
                                        <input type="text" id="username" className="form-control" required placeholder="shrek"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="name">Firstname</label>
                                        <input type="text" id="name" className="form-control" required placeholder="Shrek"/>
                                    </div>
                                    <button className="login" type="submit">Let me in!</button>
                                    <span 
                                    onClick={() => this.switchTabs('login')}
                                    style={{fontSize:`12px`,marginLeft:`5px`,cursor:`pointer`}}
                                    >Already a member? Login here</span>
                                    {usernameTaken && <div style={{color:`#ff0000`}}>Hey! Looks like you've been here before,try logging in</div> }
                                </form>
                            </div>                             
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <img className="login-img" src={loginimg} alt="Login"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps ({users, authUser}){
    const userdata = Object.keys(users);
    return{
        users: userdata,
        authUser
    }
}

export default connect(mapStateToProps)(Login);

