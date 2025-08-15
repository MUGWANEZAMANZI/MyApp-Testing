import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { RestrictMapBounds } from './Restrict.jsx'; // Adjust the import path as necessary

export default function App() {
  return (
    <View style={styles.container}>
      <RestrictMapBounds />
    </View>
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
