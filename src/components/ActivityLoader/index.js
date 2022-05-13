import React from 'react';
import {Image, Modal, View} from 'react-native';

import {icons} from '../../helpers/iconConstant';
import style from './styles';

const ActivityLoader = ({visible}) => {
  return (
    <Modal
      visible={visible}
      statusBarTranslucent
      transparent={true}
      style={{flex: 1}}>
      <View style={style.containerStyle}>
        <View style={style.indicatorViewStyle}>
          <Image
            source={icons.loader}
            style={style.imageStyle}
            resizeMode={'contain'}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ActivityLoader;
