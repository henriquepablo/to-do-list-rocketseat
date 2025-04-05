import { StyleSheet} from 'react-native';
import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles';
import Home from './src/screens/home';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
