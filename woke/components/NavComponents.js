import React, {Component} from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import { Text, View } from 'react-native';

export class LeftComponent extends Component {
    constructor () {
        super()
        this.state = {
          selectedIndex: 2
        }
        this.updateIndex = this.updateIndex.bind(this)
      }
      
      updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }
      
      render () {
        const buttons = ['Hello', 'World', 'Buttons']
        const { selectedIndex } = this.state
      
        return (
          <ButtonGroup
            onPress={this.updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
            containerStyle={{height: 100}}
          />
        )
      }
}
export function CenterComponent(props) {
    
    

    return (
        <Text>Woke-Muz</Text>
    );
}

