import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


export default class ProfileComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            profil: this.props.profil
        }
    }
    componentDidMount() {
        this.setState({
            profil: this.props.profil
        })
    }

    render() {
        const { profil } = this.state

        return(
            <React.Fragment>   
                <View style={styles.container}>
                    <Text style={styles.text}> { profil.name }</Text>
                    <Text style={styles.text}> { profil.username }</Text>
                    <Text style={styles.text}> { profil.phone }</Text>
                    <Text style={styles.text}> { profil.address.city }</Text>
                    <Text style={styles.text}> { profil.address.street }</Text>
                    <Text style={styles.text}> { profil.address.suite }</Text>
                    <Text style={styles.text}> { profil.website }</Text>
                    <Text style={styles.text}> { profil.company.name }</Text>
                </View>
                <View style={styles.buttonsView}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={[styles.text, {color: 'white'}]}> Previous </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}> 
                        <Text style={[styles.text, {color: 'white'}]}> Next </Text>
                    </TouchableOpacity>
                </View>
            </React.Fragment>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        textAlign: 'center',
    },
    button: {
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 15,
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 5,
        justifyContent: 'center',
        backgroundColor: '#C9A8A0',
        flex: 1
    },
    buttonsView: {
        flexDirection: 'row'
    }
}) 