import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const EntrySummaryList = () => {
  return (
    <View>
      <Text style={styles.title}>Categorias</Text>
      <FlatList
        data={[
          {key: 'Alimentação: $200'},
          {key: 'Combustível: $12'},
          {key: 'Aluguel: $120'},
          {key: 'Lazer: $250'},
          {key: 'Outros: $1200'},
        ]}
        renderItem={({item}) => <Text style={styles.entry}>- {item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  entry: [],
});

export default EntrySummaryList;
