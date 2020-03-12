import React, { Component } from 'react';
import Header from './components/Navbar'
import Messages from './components/Messages'
import Home from './components/Home'
import Profile from './components/Profile'
import { StyleSheet, Text, View } from 'react-native';

import {createStore} from 'redux'

import reducer from './Redux/reducer'
import {Provider} from 'react-redux'


const store = createStore(reducer)


 class App extends Component {
   componentDidMount() {
     fetch("https://woke-api.herokuapp.com/users")
     .then(r => r.json())
     .then(resp => {
       this.setState({
         users:resp
       }, (resp)=> console.log("app",resp))
     })
   }
   

  state={
    index:0,
    users:[]
  }

  handleInput_from_nav = (index) => {
    console.log("app",index)
    this.setState({
      index
    })
  }

  handleRendering = () => {
    if(this.state.index === 0){
      return <Home users={this.state.users}/>
    } else if(this.state.index === 1){
      return <Messages/>
    } else if (this.state.index === 2){
      return <Profile/>
    }
  }


  render() {
    return (
      <Provider store={store}>
      <View>
          <Header index={this.handleInput_from_nav}/>
          {this.handleRendering()}
          
      </View>
      </Provider>
     
    );
  }
}


export default App;
// {this.dynamicComponentRendering}
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
// });
