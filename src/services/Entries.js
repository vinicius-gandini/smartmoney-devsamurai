import {Alert} from 'react-native';
import {getRealm} from './Realm';

export const getEntries = async () => {
  const realm = await getRealm();

  const entries = realm.objects('Entry');

  return entries;
};

export const saveEntry = async (value) => {
  const realm = await getRealm();
  let data = {};
  const {amount} = value;

  try {
    (await realm).write(() => {
      data = {
        id: 'ABC',
        amount: amount,
        entryAt: new Date(),
        isInit: false,
      };

      realm.create('Entry', data, true);
      console.log('saveEntry: data: ', JSON.stringify(data));
    });
  } catch (error) {
    console.error(
      'saveEntry: error on save object: ',
      JSON.stringify(this.data),
    );
    Alert.alert('Erro ao salvar os dados de lançamento.');
  }

  return data;
};
