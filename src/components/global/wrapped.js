import React, {Children} from 'react';
import {StatusBar, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeProvider} from '../../context/themeProvider';
import useThemeColors from '../../hooks/useThemeColors';

export default function Wrapped({children, color}) {
  const theme = useThemeColors();
  const {theme: th, settheme} = React.useContext(ThemeProvider);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: theme.bg}}>
      <StatusBar
        barStyle={th ? 'light-content' : 'dark-content'}
        backgroundColor={theme.bg}
      />
      {children}
    </SafeAreaView>
  );
}
