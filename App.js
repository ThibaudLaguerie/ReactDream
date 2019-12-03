/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import SearchbarComponent from './src/SearchbarComponent';
import ProfileComponent from './src/ProfileComponent';

class App extends React.Component {

  
  constructor(props) {
    super(props);
    this.state = {
      profil: {
        address: {
          city: '',
          geo: '',
          street: '',
          suite: '',
          zipcode: '',
        },
        company: {
          bs: '',
          catchPhrase: '',
          name: ''
        },
        email: '',
        id: '',
        name: '',
        phone: '',
        username: '',
        website: ''
      }
    }
  }

   
  onSearch = profil => {
    this.setState({
      profil: profil
    })
  }

  render() {
   
    const { profil } = this.state
   
    return (
      <React.Fragment>
        <SafeAreaView style={styles.container}>
          <SearchbarComponent handleSearch={this.onSearch}></SearchbarComponent>
          <ProfileComponent profil={profil}></ProfileComponent>
        </SafeAreaView>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
