import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import MemoScreen from '../screens/MemoScreen';
import HomeClass from '../screens/HomeClass';
import useReducerPage from '../screens/useReducerPage';
import useImperativeHandlerPage from '../screens/useImperativeHandlerPage';
import UseEffectScreen from '../screens/UseEffectScreen';
import UseMemoScreen from '../screens/UseMemoScreen';
import UseCallbackScreen from '../screens/useCallbackScreen';
import ContextApiScreen from '../screens/ContextApiScreen';
import useRefScreen from '../screens/useRefScreen';
import UseLayoutEffectScreen from '../screens/UseLayoutEffectScreen';

const Stack = createStackNavigator();

const transitionAnim = ({ current, next, layouts }) => {
  return {
    cardStyle: {
      transform: [
        {
          translateX: current.progress.interpolate({
            inputRange: [0, 1],
            outputRange: [layouts.screen.width, 0],
          }),
        },
        {
          scale: next
            ? next.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [1, 0.9],
              })
            : 1,
        },
      ],
    }
  }
}

const App = () => {
  return (
    <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    cardStyleInterpolator: transitionAnim
                    
                  }} 
            >
            <Stack.Screen name='home' component={HomeScreen} />
            <Stack.Screen name='memo' component={MemoScreen} />
            <Stack.Screen name='homeClass' component={HomeClass}  />
            <Stack.Screen name='useReducer' component={useReducerPage} />
            <Stack.Screen name='useImperative' component={useImperativeHandlerPage} />
            <Stack.Screen name='useEffect' component={UseEffectScreen} />
            <Stack.Screen name='useMemo' component={UseMemoScreen} />
            <Stack.Screen name='useCallback' component={UseCallbackScreen} />
            <Stack.Screen name='contextApi' component={ContextApiScreen} />
            <Stack.Screen name='useRef' component={useRefScreen} />
            <Stack.Screen name='useLayout' component={UseLayoutEffectScreen} />
            
            </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;   