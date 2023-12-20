import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import Home from './src/screen/Home/Home';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import Form from './src/screen/Form/Form';
import Batsinal from './src/screen/Home/BatSinal';

export default function App() {
  const [page, setPage] = useState('Home');

  const handlePage = (page) => {
    setPage(page);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        {page === 'Home' && <Home onPage={handlePage} />}
        {page === 'Form' && <Form onPage={handlePage} />}
        {page === 'BatSinal' && <Batsinal onPage={handlePage} />}
        <StatusBar style="auto" />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
