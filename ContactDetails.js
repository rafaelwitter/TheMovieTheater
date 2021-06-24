import * as React from 'react';
import { Text, View, StyleSheet, Button, Linking} from 'react-native';
 
export default class moovieDetailsScreen extends React.Component {
  static navigationOptions = {
    title: 'Dados do filme',
  };
 
  constructor(props) {
    super(props);
    let moovie = props.navigation.getParam('moovie');
    this.state = {
      name: moovie.name,
      director: moovie.director,
      duration: moovie.duration,
      trailer: moovie.trailer,
      lat: moovie.address.geo.lat,
      lng: moovie.address.geo.lng
    };
  }

  render() {
    const { navigate } = this.props.navigation;
    const { name, director, duration, lat, lng } = this.state;
    return (
      <View>
        <View style={styles.container}>
          <Text style={styles.moovieName}>{name}</Text>
          <Text style={styles.moovieDetails}>Moovie Director: {director}</Text>
          <Text style={styles.moovieDetails}>Moovie Duration: {duration}</Text>
        </View>         
        <View style={styles.button} >
          <Button title="Voltar" onPress={() => navigate('moovieList')} />
        </View>
        <View style={styles.button}>
          <Button onPress={() => Linking.openURL('https://www.youtube.com/watch?v=9xXElwPu2QI&ab_channel=Itami%E6%B0%B8%E4%B9%85')} 
            title="Ver trailer" />
          <Button onPress={() => Linking.openURL('tel:${phone}')}
            title="Ligar" />
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  moovieName: {
    fontSize: 18,
    fontWeight: 'bold',
    height: 44,
  },
  moovieDetails: {
    fontSize: 16,
    height: 44,
  },
  button: {
    padding: 15
  }
});
