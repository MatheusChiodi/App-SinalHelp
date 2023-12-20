import { Text, View } from 'react-native';
import styles from './Styles';
import Button from '../../components/Button';
import Logo from '../../components/Logo';

export default function Home({ onPage }) {
  return (
    <View style={styles.container}>
      <Logo />
      <Button text="Ativar Sinal" onPress={() => onPage('Form')} />
    </View>
  );
}
