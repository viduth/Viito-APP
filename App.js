import React from 'react';
import { StyleSheet, Text, View, Button, Alert, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
    
      <Text style={styles.bigBlue}> Viduth Tennakoon</Text>
      

      <Image source={require('./1.jpg')} style={{ width: 250, height: 250 }} />

      <Text>
        My name is Viduth, im a college student at AMDT, i live in kadawatha, i
        love videography, my hobbie is collecting moments. This is my 1st mobile
        app project.{' '}
      </Text>

      <Button
        title="Press me"
        onPress={() => Alert.alert('Viduth Tennakoon')}
      />

      <Image
        style={{ width: 50, height: 50 }}
        source={require('@expo/snack-static/react-native-logo.png')}
      />

        <Text style={{fontWeight: 'bold'}}>
        WUSS
        <Text style={{color: 'red'}}>
          GOODVIITO
        </Text>
      </Text>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

    alignItems: 'center',
    justifyContent: 'center',
  },
  bigBlue: {
    color: 'gold',
    fontWeight: 'bold',
    fontSize: 30,
  }
});
