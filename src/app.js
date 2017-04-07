import React, { Component } from 'react';
import { View } from 'react-native';
import Header from '../components/header';

class App extends Component {
    
    render() {
        return (
            <View>
                <Header text={'This is custom test'} />
            </View>
        );
    }
}

export default App;
