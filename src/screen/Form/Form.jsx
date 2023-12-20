import React, { useState } from 'react';
import { Text, View, Alert } from 'react-native';
import styles from './Styles';
import MyInput from '../../components/MyInput';
import Button from '../../components/Button';

export default function Form({ onPage }) {
  const [overlay, setOverlay] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [text, setText] = useState('');
  const [errors, setErrors] = useState({});

  const validateName = (name) =>
    /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÊÍÏÓÔÕÖÚÇÑ ]{2,}$/.test(name);
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) =>
    /^\(\d{2}\)\s\d{4,5}-\d{4}$/.test(phone);
  const validateText = (text) => text.trim().length > 0;

  const maskPhone = (phone) => {
    return phone
      .replace(/\D/g, '')
      .replace(/^(\d{2})(\d)/g, '($1) $2')
      .replace(/(\d)(\d{4})$/, '$1-$2');
  };

  const toSendForm = () => {
    const newErrors = {
      name: !validateName(name),
      email: !validateEmail(email),
      phone: !validatePhone(phone),
      text: !validateText(text),
    };

    setErrors(newErrors);

    const formIsValid = !Object.values(newErrors).some((error) => error);
    if (formIsValid) {
      onPage('BatSinal');
    }
  };

  const handleNameChange = (newName) => {
    setName(newName);

    setErrors((prevErrors) => ({
      ...prevErrors,
      name: !validateName(newName),
    }));
  };

  const handleEmailChange = (newEmail) => {
    newEmail = newEmail.replace(/\s/g, '');
    setEmail(newEmail);

    setErrors((prevErrors) => ({
      ...prevErrors,
      email: !validateEmail(newEmail),
    }));
  };

  const handlePhoneChange = (newPhone) => {
    const maskedPhone = maskPhone(newPhone); 
    setPhone(maskedPhone); 

    setErrors((prevErrors) => ({
      ...prevErrors,
      phone: !validatePhone(maskedPhone),
    }));
  };

  const handleTextChange = (newText) => {
    setText(newText);

    setErrors((prevErrors) => ({
      ...prevErrors,
      text: !validateText(newText),
    }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Button
          text="Voltar"
          height={50}
          borderRadius={50}
          width={50}
          icon={'return-up-back'}
          onPress={() => onPage('Home')}
        />
        <Text style={{ fontSize: 30, fontWeight: 'bold' }}>Formulário</Text>
      </View>
      <View style={styles.form}>
        <View style={{ width: '100%' }}>
          <MyInput
            placeholder="Digite seu nome"
            title="Digite seu nome"
            value={name}
            onChangeText={handleNameChange}
            keyboardType="default"
            placeholderTextColor="#282A36"
            overlay={(v) => setOverlay(v)}
          />
          {errors.name && (
            <Text style={{ color: 'red', textAlign: 'center' }}>
              Name inválido
            </Text>
          )}
        </View>

        <View style={{ width: '100%' }}>
          <MyInput
            placeholder="Digite seu email"
            title="Digite seu email"
            value={email}
            onChangeText={handleEmailChange}
            keyboardType="default"
            placeholderTextColor="#282A36"
            overlay={(v) => setOverlay(v)}
          />
          {errors.email && (
            <Text style={{ color: 'red', textAlign: 'center' }}>
              Email inválido
            </Text>
          )}
        </View>

        <View style={{ width: '100%' }}>
          <MyInput
            placeholder="Digite seu telefone"
            title="Digite seu telefone"
            value={phone}
            onChangeText={handlePhoneChange}
            keyboardType="phone-pad"
            placeholderTextColor="#282A36"
            overlay={(v) => setOverlay(v)}
            maxLength={15}
          />
          {errors.phone && (
            <Text style={{ color: 'red', textAlign: 'center' }}>
              Phone inválido
            </Text>
          )}
        </View>

        <View style={{ width: '100%' }}>
          <MyInput
            placeholder="Digite seu texto"
            title="Digite seu texto"
            value={text}
            onChangeText={handleTextChange}
            keyboardType="default"
            placeholderTextColor="#282A36"
            overlay={(v) => setOverlay(v)}
          />
          {errors.text && (
            <Text style={{ color: 'red', textAlign: 'center' }}>
              Text inválido
            </Text>
          )}
        </View>

        <Button
          text="Enviar"
          onPress={() => toSendForm()}
          height={50}
          borderRadius={10}
        />
      </View>
      {overlay ? <View style={styles.overlay}></View> : null}
    </View>
  );
}
