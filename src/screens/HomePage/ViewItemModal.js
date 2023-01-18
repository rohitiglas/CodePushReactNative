import React from 'react';
import {Image, View, TouchableOpacity, Text, Button} from 'react-native';
import Modal from 'react-native-modal';
import {ImageBox} from '../../components/homepage/ImageBox';
import {TextBox} from '../../components/homepage/TextBox';
import styles from './HomePage.style';

const ViewItemModal = ({isViewItem, viewItemToggle, item}) => {
  const {
    item_name,
    item_image_url,
    item_unit_price,
    serve_for,
    item_short_description,
    bestseller,
  } = item;
  return (
    <Modal
      isVisible={isViewItem}
      animationType="slide"
      transparent={true}
      onBackdropPress={viewItemToggle}
      style={{borderRadius: 20, justifyContent: 'flex-end', margin: 0}}
      onRequestClose={viewItemToggle}>
      <View
        style={{
          width: '100%',
          height: '70%',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          backgroundColor: 'white',

          marginTop: 'auto',
        }}>
        <ImageBox imageUrl={item_image_url} styleObj={styles.viewItemImage} />
        <View
          style={{
            paddingLeft: 10,
            backgroundColor: 'white',
            paddingBottom: 100,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{flex: 3}}>
              <TextBox
                fontSize={22}
                fontWeight={'600'}
                value={item_name + ' Serves ' + serve_for}
              />
            </View>

            <View style={{marginLeft: 5, flex: 1.5, justifyContent: 'center'}}>
              <TouchableOpacity
                style={styles.addButtonView}
                onPress={viewItemToggle}>
                <TextBox
                  color={'green'}
                  fontSize={16}
                  fontWeight={'800'}
                  value={'ADD'}
                />
              </TouchableOpacity>
            </View>
          </View>

          <TextBox
            fontSize={22}
            fontWeight={'400'}
            value={'₹' + item_unit_price}
          />
          <TextBox
            numberOfLines={false}
            color={'gray'}
            fontSize={18}
            fontWeight={'400'}
            value={item_short_description}
          />
        </View>

        <TouchableOpacity style={styles.closeView} onPress={viewItemToggle}>
          <TextBox fontSize={16} fontWeight={'800'} value={'X'} />
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default ViewItemModal;
