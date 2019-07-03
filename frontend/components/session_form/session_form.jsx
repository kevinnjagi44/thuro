import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.state = this.props.formFields;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    if (this.props.formType == 'login') {
      return (

        <div>
          <form onSubmit={this.handleSubmit}>
            Welcome Back to TuroClone!
            <br />
            Please {this.props.formType} or {this.props.navLink}
            {this.renderErrors()}
            <div>
              <br />
              <label>Email:
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                />
              </label>
              <br />
              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              </label>
              <br />
              <br />
              <input type="submit" value={this.props.formType} />
            </div>
          </form>
        </div>

      )
    } else {
      return (

        <div>
          <form onSubmit={this.handleSubmit}>
            Welcome to TuroClone!
            <br />
            Please {this.props.formType} or {this.props.navLink}
            {this.renderErrors()}
            <div>
              <br />
              <label>First Name:
                <input type="text"
                  value={this.state.fname}
                  onChange={this.update('fname')}
                />
              </label>
              <br />
              <label>Last Name:
                <input type="text"
                  value={this.state.lname}
                  onChange={this.update('lname')}
                />
              </label>
              <br />
              <label>Email:
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                />
              </label>
              <br />
              <label>Password:
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              </label>
              <br />
              <br />
              <input type="submit" value={this.props.formType} />
            </div>
          </form>
        </div>
    
      )
    }
  }
}

export default withRouter(SessionForm);
