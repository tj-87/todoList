
import React, { useState } from 'react';
import { StatusBar } from "react-native";

import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {

  const [lisTarefa, setLisTarefa] = useState([]);
  const [tarefaName, setTarefaName] = useState('');

  function handleAdd() {
    setLisTarefa(prevState => [... prevState, tarefaName]);
    setTarefaName('');
  }

  function handleRemove(index) {
    const removeItem = (lisTarefa.filter(item => item !== lisTarefa[index]))
    setLisTarefa(removeItem)
  }

  return (
    <>
    <StatusBar 
      barStyle= 'light-content' 
      backgroundColor='transparent'
      translucent

    />
    <View style={{
      flex: 1,
      backgroundColor: '#1C1C1C',
      padding: 24
    }} >
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
      }} >
        <Text style={{
          color: '#FFF',
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 48,
        }}

        >Lista de Atividades
        </Text>
      </View>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        marginTop: 36,
        marginBottom: 42
      }} >
        <TextInput style={{
          flex: 1,
          height: 56,
          backgroundColor: '#363636',
          borderRadius: 5,
          color: '#FFFF',
          padding: 16,
          fontSize: 16,
          marginRight: 12
        }}
          placeholder='Nome da Atividade'
          placeholderTextColor="#6B6B6B"
          onChangeText={setTarefaName}
          value={tarefaName}
        />

        <TouchableOpacity style={{
          width: 56,
          height: 56,
          borderRadius: 5,
          backgroundColor: '#31CF67',
          alignItems: 'center',
          justifyContent: 'center'
        }}
          onPress={handleAdd}
        >
          <Text style={{
            color: '#FFF',
            fontSize: 24

          }}
          >
            Add
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={lisTarefa}
        keyExtractor={item => item}
        renderItem={({ item, index }) => (
          <View style={{
            width: '100%',
            backgroundColor: '#363636',
            borderRadius: 5,
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 10
          }} >

            <Text style={{
              flex: 1,
              fontSize: 16,
              color: '#FFF',
              marginLeft: 16,
              marginRight: 12
            }} >
              {item}
            </Text>

            <TouchableOpacity style={{
              width: 56,
              height: 56,
              borderRadius: 5,
              backgroundColor: '#FF0000',
              alignItems: 'center',
              justifyContent: 'center'
            }}
              onPress={() => handleRemove(index)}
            >
              <Text style={{
                color: '#FFF',
                fontSize: 24
              }}
              >
                Del
              </Text>
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={{
            marginTop: 200
          }}>
          <Text style={{
            color: '#FFF',
            fontSize: 14,
            textAlign: 'center',
          
          }}>
            Não existe atividades adicionadas ainda? Adicione atividades a sua lista.
          </Text>
          </View>
        )}
      />
    </View>
    </>
  );
}

