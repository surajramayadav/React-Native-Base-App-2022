import React, {useMemo} from 'react';
import {Text} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {ThemeProvider} from './src/context/themeProvider';
import {persistor, store} from './src/redux/store';
import Navigation from './src/route/navigation';

const App = () => {
  const [theme, settheme] = React.useState(false);
  const value = useMemo(() => ({theme, settheme}), [theme, settheme]);
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading ...</Text>} persistor={persistor}>
        <ThemeProvider.Provider value={value}>
          <Navigation />
        </ThemeProvider.Provider>
      </PersistGate>
    </Provider>
  );
};

export default App;
