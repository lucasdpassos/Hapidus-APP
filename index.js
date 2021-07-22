/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Amplify from 'aws-amplify'
import config from './src/aws-exports'
import { AmplifyTheme } from 'aws-amplify-react-native';



Amplify.configure(config)


AppRegistry.registerComponent(appName, () => App);
