import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyCCEY-CD1iSpSowupPZJcSuHEQ_yLvVzhg',
    authDomain: 'manager-2714d.firebaseapp.com',
    databaseURL: 'https://manager-2714d.firebaseio.com',
    projectId: 'manager-2714d',
    storageBucket: 'manager-2714d.appspot.com',
    messagingSenderId: '191493388327'
  };
  firebase.initializeApp(config);
  }

  render() {
    return (
          <Provider store={createStore(reducers)}>
          <LoginForm />
        </Provider>
      );
    }
}

export default App;
