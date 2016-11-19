import React from 'react';
let {hashHistory} = require('react-router');

class Signup extends React.Component {
    onFormSubmit(event) {
        event.preventDefault();
        var username = this.refs.username.value;
        var password = this.refs.password.value;
        if (username.length == 0 || password.length == 0) {
            //show username error
        }
        else {
            fetch('/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                })
            }).then(function (response) {
                if (response.status == 200) {
                    hashHistory.push('/login');                }
                else {
                    alert("Sign up failed! most likely user name is not available");
                }
            });
        }
    }

    render() {
        return (<div className="container">
            <h1>Sign up</h1>
            <form onSubmit={this.onFormSubmit.bind(this)}>
                <input ref="username" type="text" className="form-control" placeholder="Username" required
                       autoFocus/>
                <input ref="password" type="password" className="form-control" placeholder="Password" required/>
                <input type="submit" value="Sign up" className="btn btn-primary btn-block"/>
            </form>
        </div>);
    }
}

export default Signup;