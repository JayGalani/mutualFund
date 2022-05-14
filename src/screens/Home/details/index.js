import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {LineChart, Grid, YAxis, XAxis} from 'react-native-svg-charts';

import style from './styles';
import {Header} from '../../../components';
import {icons} from '../../../helpers/iconConstant';
import {colors} from '../../../helpers/utils';

const DetailScreen = () => {
  const route = useRoute();

  const {goBack} = useNavigation();
  const {data} = route?.params;

  const [isReturnExpanded, setIsReturnExpanded] = useState(true);

  const finalArray = data?.data?.map(item => Number(item?.nav));
  const finalArrayDate = data?.data?.map(item => String(item?.date));

  const contentInset = {top: 20, bottom: 20};

  return (
    <View style={style.container}>
      <Header isTitle={'Mutual fund Detail'} />
      <View style={{flex: 1}}>
        <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
          <Text style={style.titleText}>{data?.meta?.scheme_name || ''}</Text>
          <Text style={style.titleDescText}>
            {`${data?.meta?.fund_house} | ${
              data?.meta?.scheme_category || ''
            }` || ''}
          </Text>
          <Text style={style.titleFundText}>
            {`${data?.meta?.scheme_type}` || ''}
          </Text>

          <View style={{flexDirection: 'row'}}>
            <YAxis
              data={finalArray}
              contentInset={contentInset}
              svg={{
                fill: 'grey',
                fontSize: 10,
              }}
              numberOfTicks={10}
              formatLabel={value => `${value}`}
            />
            <View style={{flex: 1, height: 200}}>
              <LineChart
                style={{height: 200, flex: 1}}
                data={finalArray}
                svg={{stroke: 'rgb(134, 65, 244)'}}
                contentInset={{top: 20, bottom: 20}}>
                <Grid />
              </LineChart>
              <XAxis
                data={finalArrayDate}
                contentInset={contentInset}
                svg={{
                  fill: 'grey',
                  fontSize: 10,
                }}
                numberOfTicks={10}
                formatLabel={(value, index) => {
                  return finalArrayDate?.[index]?.split('-')?.[0] || 0;
                }}
              />
            </View>
          </View>
          <View style={style.categoryContent}>
            <View>
              <Text style={style.categoryTitle}>{'Inversted'}</Text>
              <Text style={style.categoryDescText}>{'₹5,000'}</Text>
            </View>
            <View>
              <Text style={style.categoryTitle}>{'Total returns'}</Text>
              <Text style={[style.categoryDescText, {color: 'red'}]}>
                {'-12.28%'}
              </Text>
            </View>
          </View>
          <View style={style.categoryContent}>
            <View style={{flex: 1}}>
              <Text style={[style.categoryTitle, {color: 'grey'}]}>
                {'NAV: 13-May-2022'}
              </Text>
              <Text style={[style.categoryDescText, {color: 'black'}]}>
                {'₹ 146.00'}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={[style.categoryTitle, {color: 'grey'}]}>
                {'Rating'}
              </Text>
              <Text style={[style.categoryDescText, {color: 'black'}]}>
                {'NA'}
              </Text>
            </View>
          </View>
          <View style={style.categoryContent}>
            <View style={{flex: 1}}>
              <Text style={[style.categoryTitle, {color: 'grey'}]}>
                {'Min. SIP amount'}
              </Text>
              <Text style={[style.categoryDescText, {color: 'black'}]}>
                {'₹ 100'}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={[style.categoryTitle, {color: 'grey'}]}>
                {'Min Fund Size'}
              </Text>
              <Text style={[style.categoryDescText, {color: 'black'}]}>
                {'₹ 8,742 Cr'}
              </Text>
            </View>
          </View>
          <View style={style.categoryContent}>
            <View style={{flex: 1}}>
              <Text style={[style.categoryTitle, {color: 'grey'}]}>
                {'Max. SIP amount'}
              </Text>
              <Text style={[style.categoryDescText, {color: 'black'}]}>
                {'₹ 5000'}
              </Text>
            </View>
            <View style={{flex: 1}}>
              <Text style={[style.categoryTitle, {color: 'grey'}]}>
                {'Max Fund Size'}
              </Text>
              <Text style={[style.categoryDescText, {color: 'black'}]}>
                {'₹ 50,001 Cr'}
              </Text>
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => setIsReturnExpanded(!isReturnExpanded)}
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text style={style.trendsText}>{'Return Details'}</Text>
              <Image
                source={icons.down}
                style={[
                  style.downIcon,
                  {
                    transform: [
                      {rotate: isReturnExpanded ? '180deg' : '360deg'},
                    ],
                  },
                ]}
                resizeMode={'contain'}
              />
            </TouchableOpacity>
            {isReturnExpanded && (
              <View style={style.categoryContent}>
                <View>
                  <Text style={style.categoryTitle}>{'Inversted'}</Text>
                  <Text style={style.categoryDescText}>{'₹5,000'}</Text>
                </View>
                <View>
                  <Text style={style.categoryTitle}>{'Total returns'}</Text>
                  <Text style={[style.categoryDescText, {color: 'red'}]}>
                    {'-12.28%'}
                  </Text>
                </View>
              </View>
            )}
          </View>
        </ScrollView>
      </View>
      <View style={style.bottomView}>
        <TouchableOpacity
          onPress={() => goBack()}
          style={style.mainContainerStyle}>
          <View
            style={[
              style.linearGradientStyle,
              {borderWidth: 2, borderColor: colors.endingPointGradient},
            ]}>
            <Text style={style.buttonText}>{'BACK'}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={style.mainContainerStyle}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[colors.startingPointGradient, colors.endingPointGradient]}
            style={[style.linearGradientStyle]}>
            <Text style={style.buttonText}>{'Buy'}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DetailScreen;
