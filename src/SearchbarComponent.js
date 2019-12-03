import React from 'react'
import { View, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native'


export default class SearchbarComponent extends React.Component {

    
    
    constructor(props) {
        super(props)
        this.state = {
            id_profile: '',
        }        
    } 

    url = 'https://jsonplaceholder.typicode.com/users/'

    updateSearch = id_profile => {
        this.setState({
            id_profile
        })
    }

    async searchProfileAsync(id) {
        let response = await fetch(this.url+id.toString())
        let responseJSON = await response.json()
        this.props.handleSearch(await responseJSON)
    }

    

    render() {

        const { id_profile } = this.state

        return(
            <View style={styles.container}>
                <TextInput keyboardType='number-pad' style={styles.input} placeholder="Id de profil" value={id_profile} onChangeText={this.updateSearch} />
                <TouchableOpacity style={styles.button} 
                    onPress={() => { 
                        this.setState({id_profile: ''})
                        this.searchProfileAsync(id_profile) 
                        }
                    }>
                    <Text style={styles.text}> Chercher </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    input: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 15,
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 5,
        flex: 1,
        textAlign: 'center',
        fontSize: 20
    },
    button: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 15,
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 5,
        justifyContent: 'center',
        backgroundColor: '#C9A8A0'
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    }
})
