import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen/SearchScreen';

const navigator = createStackNavigator({
  Search: SearchScreen
}, {
  initialRoutename: 'Search',
  defaultNavigationsOptions: {
    title: 'BusinessSearch'
  }
});

export default createAppContainer(navigator);