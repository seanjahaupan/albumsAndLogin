import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
   const { textStyle, viewStyle } = styles;
   
    return (
        <View style={viewStyle} >
            <Text style={textStyle}>
                {props.text}
            </Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 20,
    },

    viewStyle: {
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 15,
        height: 60

    }
};

export default Header;
