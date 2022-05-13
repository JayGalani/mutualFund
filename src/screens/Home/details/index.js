import React from 'react';
import {View, Text} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {LineChart, Grid} from 'react-native-svg-charts';

import style from './styles';
import {Header} from '../../../components';

const DetailScreen = () => {
  const route = useRoute();
  const {data} = route?.params;
  const abc = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];
  return (
    <View style={style.container}>
      <Header isTitle={'Mutual fund Detail'} />
      <LineChart
        style={{height: 200}}
        data={abc}
        svg={{stroke: 'rgb(134, 65, 244)'}}
        contentInset={{top: 20, bottom: 20}}>
        <Grid />
      </LineChart>
    </View>
  );
};

export default DetailScreen;
