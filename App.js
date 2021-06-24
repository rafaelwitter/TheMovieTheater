import * as React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import ContactListScreen from './ContactList'
import ContactDetailsScreen from './ContactDetails'
import HomeScreen from './Home'

const MainNavigator = createStackNavigator({
  Home: {screen: HomeScreen},
  ContactList: {screen: ContactListScreen},
  ContactDetails: {screen: ContactDetailsScreen},
}); 
 
const App = createAppContainer(MainNavigator);
export default App;