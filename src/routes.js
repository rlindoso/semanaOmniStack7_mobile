import { crateAppContainer, createStackNavigator, createAppContainer } from 'react-navigation'

import Feed from './pages/Feed';
import New from './pages/New';

export default createAppContainer(
    createStackNavigator({
        Feed,
        New,
    })
);
