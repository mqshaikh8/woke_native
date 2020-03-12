import React, { Component } from 'react';
import { Text, View,Image } from 'react-native';

class Home extends Component {
    state = {
        users:[]
    }
    componentDidMount() {
        if(this.props.users.length > 1){
            let arr = this.props.users
            this.setState({
                users:arr
            })
        }else{
            let arr = this.props.users
            this.setState({
                users:[{}]
            })
        }
    }
    

    cardRenderer = () => {
        if(this.props.users.length > 1){
            const inner_style ={
                width: 80,
                height: 80,
                borderRadius: 80/2,
              }
              const left_list={
                  alignItems: 'left'
              }
              const right_list={
                alignItems: 'right'
            }
            const cardStyle = {
                backgroundColor: 'blue',
            }


        return this.props.users.map(user => {
            console.log(user)
            return(
                    <View key={user.id} style={cardStyle}>
                    <View style={left_list}>
                        <Image 
                            style={inner_style}
                            source={user.img_url ? {uri:user.img_url} : {uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F53639401%2Fhtml-failed-parsing-srcset-attribute-value-since-it-has-an-unknown-descriptor&psig=AOvVaw3tzSZj1OPiFYz9zrWbOlrJ&ust=1584100282202000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCNCupMfvlOgCFQAAAAAdAAAAABAD"}}/>
                        <Text>{user.username}</Text>
                    </View>
                    <View style={right_list}>
                        <Text>{`Supported cause ${user.cause}`}</Text>
                    </View>
                    </View>)
        }
                )
        }
    }

    render() {
        const outside_style ={
           
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center'
          }
         const container ={
            flex: 100,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }
        return (
            <View style={container}>
                <View style={outside_style}>{this.cardRenderer()}</View>
            </View>
        );
    }
}

export default Home;