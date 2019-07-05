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
    // this.handleDemoUser = this.handleDemoUser.bind(this);
    this.prettyDemoUser = this.prettyDemoUser.bind(this);
  }


  componentWillUnmount () {
    this.props.clearErrors();
  }
// ** Begin animated demo login **
  async prettyDemoUser(e) {
    e.preventDefault();

    const demoUser = {
      email: 'demo@email.com',
      password: 'password'
    };

    const sleep = ms => new Promise(res => setTimeout(res, ms));

    document.getElementById('email-input').focus();
    for (let i = 1; i <= demoUser.email.length; i++) {
      this.setState({ email: demoUser.email.substr(0, i) });
      await sleep(50);
    }

    await sleep(250);

    document.getElementById('password-input').focus();
    for (let i = 1; i <= demoUser.password.length; i++) {
      this.setState({ password: demoUser.password.substr(0, i) });
      await sleep(50);
    }

    await sleep(250);

    document.getElementById('session-submit-btn').click();
    document.getElementById('password-input').blur();
  }
// ** End animated demo login ** 

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(this.props.closeModal);
  }

  // handleDemoUser(e) {
  //   e.preventDefault();
  //   this.props.processForm({
  //     email: 'demo@email.com',
  //     password: 'password'
  //   }).then(this.props.closeModal);
  // }

  renderErrors() {
    return (
      <ul className="error-messages">
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
        <div className="modal-container">
          <form className="modal-form" onSubmit={this.handleSubmit}>
            <h3 className="modal-form-header">Welcome back</h3>
            <br />
            <div className="modal-container">
              <br />
              <label>Email
                <br/>
                <input type="text" 
                  id="email-input" 
                  placeholder="Email" 
                  value={this.state.email}
                  onChange={this.update('email')}
                />
              </label>
              <br />
              <label>Password
                <br/>
                <input type="password" 
                  id="password-input" 
                  placeholder="Password" 
                  value={this.state.password}
                  onChange={this.update('password')}
                />
              </label>
              <br />
              <br />
              <input id="session-submit-btn" type="submit" value={this.props.formType} value="Log in" />
              <br/>
              <br/>
              {/* <input type="submit" onClick={this.handleDemoUser} value="Demo Log in" /> */}
              <input type="submit" onClick={this.prettyDemoUser} value="Demo Log in" />
            </div>
            <div className="modal-bottom"> 
              <br />
              Don't have an account? &nbsp; {this.props.otherForm}
              {/* Please {this.props.formType} or {this.props.otherForm} */}
            </div>
            <div className="modal-x" onClick={this.props.closeModal}>X</div>
            {this.renderErrors()}
          </form>
        </div>

      )
    } else {
      return (
      // SIGNUP FORM //
        <div className="modal-container">
          <form className="modal-form" onSubmit={this.handleSubmit}>
            <div>
              <h3 className="modal-form-header">Let's get started</h3>
              <br />
              <div className="modal-x" onClick={this.props.closeModal}>X</div>
              {this.renderErrors()}
              <div className="modal-container">
                <br />
                <label>First Name
                  <br />
                  <input type="text"
                    value={this.state.fname}
                    onChange={this.update('fname')}
                    />
                </label>

                <label>Last Name
                  <input type="text"
                    value={this.state.lname}
                    onChange={this.update('lname')}
                    />
                </label>
                <br />
                <label>Email
                  <br />
                  <input type="text"
                    value={this.state.email}
                    onChange={this.update('email')}
                    />
                </label>
                <br />
                <label>Password
                  <br />
                  <input type="password"
                    value={this.state.password}
                    onChange={this.update('password')}
                    />
                </label>
                <br />
                  <br />
                  <input type="submit" value={this.props.formType} value="Sign up"/>
                <div className="modal-bottom">
                  <br/>
                  Already have an account? &nbsp; {this.props.otherForm}
                </div>
              </div>
            </div>
          </form>
        </div>
    
      )
    }
  }
}

export default withRouter(SessionForm);
