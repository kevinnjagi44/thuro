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
    this.handleDemoUser = this.handleDemoUser.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  handleDemoUser(e) {
    e.preventDefault();
    this.props.processForm({
      email: 'demo@email.com',
      password: 'password'
    }).then(this.props.closeModal);
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
    // LOGIN FORM //
        <div>
          <form className="modal-form" onSubmit={this.handleSubmit}>
            <h3 className="modal-form-header">Welcome Back</h3>
            <br />
            <div>
              <br />
              <label>Email:
                <br/>
                <input type="text"
                  value={this.state.email}
                  onChange={this.update('email')}
                />
              </label>
              <br />
              <label>Password:
                <br/>
                <input type="password"
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              </label>
              <br />
              <br />
              <input type="submit" value={this.props.formType} />
              <input type="submit" onClick={this.handleDemoUser} value="Demo Login" />
            </div>
            Don't have an account? {this.props.otherForm}
            {/* Please {this.props.formType} or {this.props.otherForm} */}
            <div className="modal-x" onClick={this.props.closeModal}>X</div>
            {this.renderErrors()}
          </form>
        </div>

      )
    } else {
      return (
      // SIGNUP FORM //
        <div>
          <form className="modal-form" onSubmit={this.handleSubmit}>
            <div>
              Welcome to TuroClone!
              <br />
              Please {this.props.formType} or {this.props.otherForm}
              <div className="modal-x" onClick={this.props.closeModal}>X</div>
              {this.renderErrors()}
              <div>
                <br />
                <label>First Name:
                  <br />
                  <input type="text"
                    value={this.state.fname}
                    onChange={this.update('fName')}
                  />
                </label>

                <label>Last Name: 
                  <input type="text"
                    value={this.state.lname}
                    onChange={this.update('lName')}
                  />
                </label>
                <br />
                <label>Email:
                  <br />
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                  />
                </label>
                <br />
                <label>Password:
                  <br />
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                  />
                </label>
                <br />
                <br />
                <input type="submit" value={this.props.formType} />
              </div>
            </div>
          </form>
        </div>
    
      )
    }
  }
}

export default withRouter(SessionForm);
