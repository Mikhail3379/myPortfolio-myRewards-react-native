import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import * as React from 'react';

import {useStoreState} from '../hooks/storeHooks';

import {
  OnboardingScreen,
  SetPinScreen,
  GetstartedScreen,
  BackupWalletScreen,
  LegalScreen,
  HomeScreen,
  DashboardScreen,
  ReceiveScreen,
  SendScreen,
  SettingsScreen,
  BackupScreen,
  QRScannerScreen,
  SecretRecoveryScreen,
  MyPortfolioScreen,
  MyRewardsScreen,
} from '../screens';

export default function Onboarding() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator();

function RootNavigator() {
  //const hasWallet = useStoreState((state) => state.hasWallet);

  return (
    <Stack.Navigator initialRouteName="MyRewardsScreen">
       <Stack.Screen
        name="My Rewards"
        component={MyRewardsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="My Portfolio"
        component={MyPortfolioScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Secret Recovery"
        component={SecretRecoveryScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Get Started"
        component={GetstartedScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Set Pin"
        component={SetPinScreen}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="Legal"
        component={LegalScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Back up"
        component={BackupWalletScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      
    </Stack.Navigator>
  );
}
