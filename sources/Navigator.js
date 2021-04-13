import React from 'react';
import { Input, Root } from 'native-base';
import { Scene, Router, Tabs, Drawer, ActionConst, Stack } from 'react-native-router-flux';

import Home from './screens/Home';
import Help from './screens/Help';
import Hasil from './screens/Hasil';

const AppNavigator = () => (
    <Root>
      <Router>
        <Scene key="Root" hideNavBar={true}>
          <Scene key="Home" type="reset" component={Home}/>
          <Scene key="Help" component={Help}/>
          <Scene key="Hasil" component={Hasil}/>
        </Scene>
      </Router>
    </Root>
  );
  
  export default AppNavigator;
  