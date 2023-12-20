import { LinearGradient } from 'expo-linear-gradient';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Button({
  text,
  onPress,
  height = 70,
  borderRadius = 20,
  width = '80%',
  icon = false,
}) {
  const styles = StyleSheet.create({
    container: {
      width: width,
      height: height,
      alignItems: 'center',
      justifyContent: 'center',

      borderRadius: borderRadius,
      elevation: 10,
    },
    text: {
      color: '#000',
      fontSize: 30,
      fontWeight: 'bold',
    },
  });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <LinearGradient
        colors={['rgba(253,147,123,1)', 'rgba(234,185,64,1)']}
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: borderRadius,
        }}
      >
        <Text style={styles.text}>
          {icon ? <Ionicons name={icon} size={30} color="black" /> : text}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
