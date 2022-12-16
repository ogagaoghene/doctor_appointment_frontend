import {Component} from 'react';
import axios from 'axios';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
  	this.setState({
  		[event.target.name]:[event.target.value]
  	})
  }
  
  handleSubmit(event) {
  	const {
  		name,
  		email,
  		password,
      password_confirmation,
  	} = this.state;
  	axios.post("http://localhost:3001/api/v1/registrations", {
  		user: {
  			name: name,
  			email: email,
  			password: password,
        password_confirmation: password_confirmation
  		}
  	}, 
  	{withCredentials: false}
  	).then(response => {
      console.log("Registration response", response);
  	}).catch(error => {
  		console.log("Registration error", error);
  	})
    
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-title">
            <p className="h3">Registration</p>
            <p>Status: {this.props.loggedInStatus}</p>
        </div>

        <div className="username">
          <input 
            type="text" 
            name="name" 
            placeholder="firstname"
            value={this.state.name} 
            onChange={this.handleChange}
            required 
          />
        </div>

        <div className="email">
          <input 
            type="text" 
            name="email" 
            placeholder="email" 
            value={this.state.email} 
           onChange={this.handleChange}
            required
          />
        </div>
        
        <div className="password">
          <input 
            type="password" 
            name="password" 
            placeholder="password" 
            value={this.state.password} 
            onChange={this.handleChange}
            required 
          />
        </div>

          <div className="passwordConfirmation">
            <input 
              type="password" 
              name="password_confirmation" 
              placeholder="password confirmation" 
              value={this.state.password_confirmation} 
              onChange={this.handleChange}
              required 
            />
          </div>

        <div className="signup-buttons mt-4 text-center">
          <button type="submit" className=" btn btn-secondary m-3" to="/signin">Register</button>
        </div>
      </form>
    );
  }
}

export default SignUpForm;
