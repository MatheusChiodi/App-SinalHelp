import React, { useState } from 'react';
import { Image, ActivityIndicator, StyleSheet,SafeAreaView } from 'react-native';

export default function Batsinal({ onPage }) {
  const [isLoadImage, setIsLoadImage] = useState(false);

  setTimeout(() => {
    onPage('Home');
  }, 3000);

  return (
    <>
      {!isLoadImage ? (
        <ActivityIndicator size="large" color="#000" style={styles.container} />
      ) : null}
      <Image
        source={require('../../assets/BatSinal.png')}
        style={styles.container}
        onLoad={() => setIsLoadImage(true)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
});
