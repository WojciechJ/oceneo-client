import React, { Component } from 'react';
import '../css/login.css';
import {
	Link
} from 'react-router-dom';

class Login extends Component {
	
  constructor(props) {
    super(props);

    this.state = {
      login: "",
      password: ""
    };
  }
  
   handleLoginChange = (evt) => {
    this.setState({ login: evt.target.value });
  }
   handlePasswordChange = (evt) => {
    this.setState({ password: evt.target.value });
  }

  
  render() {
    return (


<div className=" wrapper fadeInDown">
        <div id="formContent">
          {/* Logo */}
          <div className="fadeIn first">
            <h1>Oceneo</h1>
          </div>
        
          <form onSubmit={this.handleSubmit} role="form" className="loginform">
		  
            <input 
			autoFocus
			type="text" 
			id="login" 
			className="fadeIn second" 
			name="login" 
			placeholder="Login" 
			value={this.state.title}
			onChange={this.handleTitleChange}
			required />
			
            <input 
			type="password" 
			id="password" 
			className="fadeIn third" 
			name="password" 
			placeholder="Hasło" 
			value={this.state.password}
			onChange={this.handlePasswordChange}
			required />
			
            <input 
			type="submit" 
			className="fadeIn fourth" 
			defaultValue="Zaloguj" />
			
          </form>
		  
        
          <div id="formFooter">
            <Link className="underlineHover" to="/recover">Nie pamiętasz hasła?</Link>
          </div>
          <div id="formFooter">
            <Link className="underlineHover" to="/register">Zarejestruj się</Link>
          </div>
          <div id="formFooter">
            <Link className="underlineHover" to="/">Powrót do strony głównej.</Link>
          </div>
        </div>
      </div>

	  );
  }
}  
	  
export default Login;