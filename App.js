import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image, TouchableHighlight, Alert, ScrollView, Platform } from 'react-native';

export default function App() {
    console.log("App Executed");
    return (
        <SafeAreaView style={styles.container}>
            {/* SafeAreaView is a view that consider the top of some mobiles (like camera, notification and clock) */}

            <StatusBar hidden={true}></StatusBar>
            {/* Remove app and clock topscreen view */}

            <Text style={styles.basicText}>Hello World!</Text>
            {/* Display basic text */}

            <ScrollView style={styles.imageContainer} contentContainerStyle={styles.imageContainerContent}>
                {/* A scrollable view, note that the ContentContainerStyle is required */}

                <TouchableHighlight onPress={() => console.log('image 1 tapped')}>
                    {/* A toutchable component that display a shadow on touch */}

                    <Image style={styles.imageSize} source={require('./assets/icon.png')} ></Image>
                    {/* Load image from assets */}

                </TouchableHighlight>
                <TouchableHighlight onPress={() => console.log('image 2 tapped')}>
                    <Image style={styles.imageSize} source={{ uri: 'https://picsum.photos/2500/2030' }} ></Image>
                    {/* Load image from internet */}

                </TouchableHighlight>
                <TouchableHighlight onPress={() => Alert.alert("my title alert", "my alert message", [
                    { text: "idk what im doing but it looks like a button", onPress: () => alert("u might be dumb") },
                    { text: "yea this one too", onPress: () => alert("ur still dumb, no matters the button ur pressing on") },
                ])}>
                    {/* Load image, with which, on touch, display alert with custom button that display text depending on what button uve touched */}

                    <Image style={styles.imageSize} source={{ uri: 'https://picsum.photos/1080/1060' }} ></Image>
                </TouchableHighlight>
            </ScrollView>
        </SafeAreaView>
    );
}
/* Notes that if we put 2 styles in a component, the right one overright the left one)*/
const styles = StyleSheet.create({
    container: {
        flex: 1, //Flex is the amount of places it will take, if it is set to 2, it takes twice of the normal place
        backgroundColor: Platform.OS === 'android' ? '#212121' : '#FFFFFF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    basicText: {
        color: '#E5E5E5',
    },
    imageContainer: {
        flex: 1,
        width: '70%',
        height: '100%',

    },
    imageContainerContent: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    imageSize: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
    },
});