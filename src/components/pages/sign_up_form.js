import {Component} from 'react';

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: ""
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
    console.log("Form submitted");
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-title">
            <p className="h3">Registration</p>
        </div>

        <div className="username">
          <input 
            type="text" 
            name="name" 
            placeholder="firstname"
            value={this.state.name} 
            required 
          />
        </div>

        <div className="email">
          <input 
            type="text" 
            name="email" 
            placeholder="email" 
            value={this.state.email} 
            required
          />
        </div>
        
        <div className="password">
          <input 
            type="password" 
            name="password" 
            placeholder="firstname" 
            value={this.state.password} 
            required 
          />
        </div>

        <div className="signup-buttons mt-4 text-center">
          <button type="submit" className=" btn btn-secondary m-3" to="/signin">SIGN UP</button>
        </div>
      </form>
    );
  }
}

export default SignUpForm;
