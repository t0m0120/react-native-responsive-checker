import * as React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import { ResponsiveCheckView } from 'react-native-responsive-checker';

export default function App() {
  return (
    <ResponsiveCheckView>
      <View style={styles.container}>
        <Text>TestScreen</Text>
        <Text>Insert the Screen you want to check.</Text>
      </View>
    </ResponsiveCheckView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc'
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
