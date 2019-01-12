import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
    const {textStyle, viewStyle}= styles;
    return (
        <View styles={viewStyle}>
            <Text style={textStyle}>Albums</Text>
        </View>

    );
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        height: 70,
        alignItems: 'center',
        paddingTop: 30,
        ShadowColor: '#000',
        shadowOffset: {Width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
    }, textStyle: {
        fontSize: 25
    }
}

export default Header;