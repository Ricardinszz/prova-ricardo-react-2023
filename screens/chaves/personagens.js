import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, ScrollView } from 'react-native';
import { Card, Button, Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const personagens = () => {
    
    const [personagens, setPersonagens] = useState([]);
    const navigation = useNavigation();
    const navigateToActorDetails = (id) => {
        navigation.navigate('detalhes', { id });
    };

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/orionteles/chavo/personagens')
            .then(response => response.json())
            .then(data => setPersonagens(data));
    }, []);



return (
    <>
      <ScrollView style={{ padding: 15, }}>

      <Text style={{ fontSize: 24, textAlign: 'center', color: 'red' }}>Personagens do Chaves</Text>

        {personagens.map(item => (
          <Card mode='outlined' style={{ marginBottom: 15 }} key={item.id}>
            <Card.Content style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Avatar.Image source={{ uri: '' + item.urlImagem }} />
              <Card.Title
                title={item.nome}
                subtitle={item.ator}
              />
              <Button
                mode="text"
                icon="chevron-right"
                onPress={() => navigateToActorDetails(item.id)}
                style={{ marginLeft: 'auto' }}
              />


            </Card.Content>
          </Card>
        ))}


      </ScrollView>

    </>
  )
}

export default personagens;
