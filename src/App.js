import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import './App.css';
import 'tachyons';
import Logo from './components/Title/Logo.js';
import Welcome from './components/Title/Welcome.js';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import ImageDisplay from './components/ImageDisplay/ImageDisplay';
import WordDisplay from './components/WordDisplay/WordDisplay';
import VoiceDisplay from './components/VoiceDisplay/VoiceDisplay';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import 'semantic-ui-css/semantic.min.css';

const initialState = {
  input: '',
  imageURL: '',
  route: 'signin',
  isSignedIn: false,
  keywords:[],
  user: {
    id:'',
    name:'',
    email:'',
    password:'',
    entries:0,
    joined:'',
  }
}

class App extends Component {
  constructor() {
    super();
    this.state= initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id:data.id,
      name:data.name,
      email:data.email,
      password:data.password,
      entries:data.entries,
      joined:data.joined
    }})
  }

  onInputChange = (event) => {
    console.log(event);
    this.setState({input: event.target.value});
  }

  onSubmit = () => {
    console.log('onSubmit');
    this.setState({imageURL: this.state.input });
    //add Image API
      fetch('http://localhost:3001/analyzeimage', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          imageURL: this.state.imageURL
        })
      })
      .then(response => {
        if (response) {
          fetch('http://localhost:3001/image', {
            method: 'put',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, { entries: count }))
          })
          .catch(console.log)
       }
     })
  }
  onRouteChange = (route) => {
    if (route === 'signin') {
      this.setState(initialState)
    }
    this.setState({route: route});
  }
  render() {
    return (
      <div className="App">

        <Navigation route={this.state.route} onRouteChange={this.onRouteChange} />
        { this.state.route === 'home'
        ? <div>
            <Welcome
              name={this.state.user.name}
              entries={this.state.user.entries}
              isSignedIn={this.state.isSignedIn}
            />
            <div className='container'>
            {/*Logo: to use one sentence to describe what this app does*/}
              <div className='Row'>
                <ImageDisplay
                  imageURL={this.state.imageURL}
                />

                <ImageLinkForm
                  className='ImageLinkForm'
                  onInputChange={this.onInputChange}
                  onSubmit={this.onSubmit}
                />
              </div>
              <div className='Row'>
                <WordDisplay
                  className='WordDisplay'
                  imageURL={this.state.imageURL}
                  keywords={this.state.keywords}
                />
                <VoiceDisplay
                  className='VoiceDisplay'
                  imageURL={this.state.imageURL}
                />
              </div>
            </div>
          </div>
        : (
           this.state.route === 'signin'
           ? <div>
              <Logo />
              <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
             </div>
           : <div>
              <Logo />
              <SignUp loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
             </div>
          )


        }
      </div>
    );
  }
}

export default App;
