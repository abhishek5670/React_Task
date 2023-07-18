import React from 'react';
import { View, Text, TextInput, StyleSheet, SafeAreaView, Pressable } from 'react-native';
// import {AntDesign} from 'react-native-vector-icons/FontAwesome';

const Header = () => {
    const handlePress = (buttonName) => {
        console.log(`Button pressed: ${buttonName}`);
    }

    return (
        
            <View style={styles.header}>
                <View style={styles.userContainer}>
                    <View style={styles.iconContainer}>
                        {/* <AntDesign name="user" size={24} color="black" /> */}
                    </View>
                    <Text style={styles.userName}>Ankit</Text>
                </View>
                <View style={styles.searchContainer}>
                    {/* <AntDesign name="search1" size={20} color="gray" /> */}
                    <TextInput style={styles.searchInput} placeholder="Search..." placeholderTextColor="black" />
                </View>
                <View style={styles.third}>
                    <Pressable style={styles.button} onPress={() => handlePress('Gold')}>
                        <Text style={styles.buttonText}>Gold</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => handlePress('Silver')}>
                        <Text style={styles.buttonText}>Silver</Text>
                    </Pressable>
                    <Pressable style={styles.button} onPress={() => handlePress('Both')}>
                        <Text style={styles.buttonText}>Both</Text>
                    </Pressable>
                </View>
            </View>
    );
};

const styles = StyleSheet.create({
    header: {
        height: '25%',
        flexDirection: 'coloumn',
        // alignItems: 'center',
        // marginBottom: 16,
        // he

        flexDirection: 'column',
        backgroundColor: '#F1F2FF'
    },
    userContainer: {
        // flexDirection: 'column',
        // alignItems: 'center',
        // marginRight: 16,
        marginTop: 20,
        width: '100%',
        flexDirection: 'row',
        margin: 10,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#e0e0e0',
        alignItems: 'center',
        // justifyContent: 'center',
        marginRight: 8,
    },
    userName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black'
    },
    searchContainer: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    searchInput: {
        marginLeft: 8,
        fontSize: 16,
        color: 'black'
    },
    third: {
        // flex: 1,
        flexDirection: 'row',
        marginTop: 20,

        // justifyContent: 'center',
        // alignItems: 'center',
    },
    button: {
        width: '20%',
        height: 30,
        backgroundColor: 'grey',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
        marginLeft: 5,
        marginRight: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Header;