import React from 'react';
import loadingimg from '../assets/loading.gif';
import { connect } from 'react-redux';

class Login extends React.Component{
    render(){
        return(
            this.props.loading === true ? <img src={loadingimg} alt="loading" className="loading"/> : (
                <div className="container">
                    <h1 className="choose-header">Choose your fighter</h1>
                    <div className="row">
                        {
                            this.props.users !== null && Object.values(this.props.users).map((user) => (
                                <div className="col-md-4 col-sm-12" key={user.id} onClick={() => this.props.onSelect(user.id)}>
                                    <div className="thumbnail">
                                        <img src={user.avatarURL} alt="{user.name}" className="character"/>
                                        <h4 className="username">{user.name}</h4>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <button 
                    className="login"
                    onClick={this.props.onLogin}>
                        Get in!
                    </button>
                </div>
            )    
        );
    }
}

const mapStateToProps = (state) => {
    return{
        users: state.users
    }
}

export default connect(mapStateToProps)(Login);

