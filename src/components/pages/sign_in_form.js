import {Component} from 'react';

class SigninForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = event => {
    this.setState({
      [event.target.name]:[event.target.value]
    })
  }

  handleSubmit(event) {
    console.log("Form submitted");
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className='p-5 d-flex flex-coloumn align-items-center justify-content-center'  method="POST">
        <div className="form-body p-5">
          <div className="logo-title mt-5 mt-md-5 pt-md-5">
            <h3>Login</h3>
          </div>
       
          <div className="form-outline mb-4">
            <input 
              type="text" 
              id="firstname"
              placeholder="firstname"
              value={this.state.username} 
              onChange={this.handleChange}
              className="form-control" 
              required
            />
          </div>

          <div className="signup-buttons mt-5 text-center">
            <button type="submit" >Login</button>
          </div>
        </div>
      </form>
    )
  }
}

export default SigninForm;