import React from 'react';
import {View, StyleSheet, Picker, Button} from 'react-native';

import EntryLabel from '../../components/BalanceLabel';
import EntrySummary from '../../components/EntrySummary';
import EntryList from '../../components/EntryList';

const Report = () => {
  return (
    <View style={styles.container}>
      <EntryLabel />
      <View>
        <Picker>
          <Picker.Item label="Todas Categorias" />
        </Picker>
        <Picker>
          <Picker.Item label="Últimos 7 dias" />
        </Picker>
      </View>
      <EntrySummary />
      <EntryList />

      <Button title="Salvar" />
      <Button title="Fechar" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
});

export default Report;
