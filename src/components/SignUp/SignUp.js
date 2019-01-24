import React from 'react';

//no state

class SignUp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        email:'',
        password:'',
        name:'',
      }
    }

    onEmailChange = (event) => {
      this.setState({email: event.target.value})
    }

    onPasswordChange = (event) => {
      this.setState({password: event.target.value})
    }

    onNameChange = (event) => {
      this.setState({name: event.target.value})
    }

    onSubmitSignUp = () => {
      if (this.state.password.length < 5) {
        alert('Hey! Please check if the password you entered has more than 5 characters')
      } else if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)===false) {
        alert('Hey! Please check the email you entered is valid')
      } else if(this.state.name.length<1) {
        alert('Hey! Please enter a name')
      } else {
        fetch(`${process.env.API_URL}/signup`,{
          method: 'post',
          headers: {'Content-Type': 'application/json'},
          body:JSON.stringify({
            email: this.state.email,
            password:this.state.password,
            name:this.state.name
          })
        })
          .then(response => response.json())
          .then(user => {
            if (user.id) {
              this.props.loadUser(user);
              this.props.onRouteChange('home');
            } else {
              alert('Hey! You have already signed up for an account, please sign in directly')
            }
          })
        }
    }

    render(){
      return (
        <article className="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
          <main className="pa4 black-80">
            <div className="measure">
              <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                <legend className="f4 fw6 ph0 mh0">Creat An Account Now!</legend>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                  <input
                    className="pa2 input-reset ba bg-transparent w-100"
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.onNameChange}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                  <input
                    className="pa2 input-reset ba bg-transparent w-100"
                    type="email"
                    name="email-address"
                    id="email-address"
                    onChange={this.onEmailChange}
                  />
                </div>
                <div className="mv3">
                  <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                  <input
                    className="b pa2 input-reset ba bg-transparent w-100"
                    type="password"
                    name="password"
                    id="password"
                    onChange={this.onPasswordChange}
                  />
                </div>
              </fieldset>
              <div className="">
                <input
                  className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                  type="submit"
                  value="Sign up and Go!"
                  onClick={this.onSubmitSignUp}
                />
              </div>
            </div>
          </main>
        </article>
      );
    }
}

export default SignUp;
