import { SafeAreaView, StyleSheet} from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles';
import Home from './src/screens/home';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaView style={{backgroundColor: theme.colors.gray_700}}/>
      <Home />
    </ThemeProvider>
  );
}


