import React, { useState } from 'react';
import { Image, ActivityIndicator, StyleSheet } from 'react-native';

export default function Logo() {
  const [isLoadImage, setIsLoadImage] = useState(false);
  return (
    <>
      {!isLoadImage ? (
        <ActivityIndicator size="large" color="#000" style={styles.container} />
      ) : null}
      <Image
        source={require('../assets/Batman.png')}
        style={styles.container}
        onLoad={() => setIsLoadImage(true)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '20%',
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 30,
  },
});
