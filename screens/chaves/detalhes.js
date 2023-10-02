import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Card } from 'react-native-paper';

const Detalhes = ({ route, bordao }) => {
  const navigation = useNavigation();
  const { id } = route.params;
  const [ator, setAtor] = useState(null);

  useEffect(() => {
    fetch(`https://my-json-server.typicode.com/orionteles/chavo/personagens/${id}`)
      .then((response) => response.json())
      .then((data) => setAtor(data));
  }, [id]);

  if (!ator) {
    return <Text>Carregando...</Text>;
  }

  
  const navigateToBordoes = () => {
    navigation.navigate('bordoes'); 
  };

  return (
    <ScrollView style={{ flex: 1 }}>
      <Card mode='outlined' style={{ marginBottom: 15 }}>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={{ uri: ator.urlImagem }}
            style={{ width: '100%', maxHeight: 200, aspectRatio: 1, resizeMode: 'contain' }}
          />
        </View>
        <Card.Content style={{ flexDirection: 'column', alignItems: 'center' }}>
          <Text style={{ fontSize: 24, marginBottom: 8 }}>{ator.nome}</Text>
          <Text style={{ fontSize: 16, marginBottom: 15 }}>{ator.ator}</Text>
          <Text style={{ fontSize: 16, marginBottom: 15 }}>{ator.sexo}</Text>
          <Text style={{ fontSize: 16, marginBottom: 15 }}>{ator.idade}</Text>
          <Text style={{ fontSize: 16, marginBottom: 15 }}>{ator.endereco}</Text>
          <Text>{ator.biografia}</Text>
        </Card.Content>
      </Card>

     
      <TouchableOpacity onPress={navigateToBordoes}>
        <Card mode='outlined' style={{ marginBottom: 15 }}>
          <Card.Content>
            <Text style={{ fontSize: 24, textAlign: 'center', color: 'red' }}>Bordões</Text>
            <Text>{bordao}</Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Detalhes;
