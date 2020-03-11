import React, { Component } from 'react';
import { Text,ButtonGroup } from 'react-native-elements';
import {Selection} from '../Redux/action'
import {connect} from 'react-redux'
class Header extends Component {
    constructor () {
        super()
        this.state = {
          selectedIndex: 2
        }
        this.updateIndex = this.updateIndex.bind(this)
      }
      
      updateIndex (selectedIndex) {
        this.setState({selectedIndex},() => this.props.index(selectedIndex))
      }

      
      render () {
        const buttons = ['Home', 'Messages', 'Profile']
        const { selectedIndex } = this.state
        // console.log("header",this.props)
        return (
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 50}}
          />
        )
      }
}
export default connect(null,{Selection})(Header);


