import React, {useState} from 'react';
import {Image, View, TouchableOpacity, Text, Button} from 'react-native';
import Modal from 'react-native-modal';
import {ImageBox} from '../../components/homepage/ImageBox';
import {TextBox} from '../../components/homepage/TextBox';
import styles from './HomePage.style';
import ViewItemModal from './ViewItemModal';

interface Item {
  item_name: string;
  item_image_url: string;
  item_unit_price: string;
  serve_for: string;
  item_short_description: string;
  bestseller: string;
}

interface ItemRowProps {
  item: Item;
  index: number;
}

export const ItemRow = ({item, index}: ItemRowProps) => {
  const {
    item_name,
    item_image_url,
    item_unit_price,
    serve_for,
    item_short_description,
    bestseller,
    item_tags,
  } = item;

  console.log('itemitemitemitem ++++++++', item);

  const vegIconSource =
    item_tags[0] === 1
      ? require('../../assets/veg.jpg')
      : require('../../assets/nonveg.png');

  const [textShown, setTextShown] = useState(-1);
  const [isViewItem, setViewItem] = useState(false);

  const viewItemToggle = () => {
    setViewItem(!isViewItem);
  };
  const toggleNumberOfLines = (index: number) => {
    const value = textShown === index ? -1 : index;
    setTextShown(value);
  };
  return (
    <View style={styles.itemContainer}>
      <ViewItemModal
        isViewItem={isViewItem}
        viewItemToggle={viewItemToggle}
        item={item}
      />
      <View style={styles.leftView}>
        <Image source={vegIconSource} style={styles.vegIcon} />
        <TextBox
          color={'#000000'}
          fontSize={20}
          fontWeight={'600'}
          value={item_name + ' Serves ' + serve_for}
        />

        <View style={styles.leftRowView}>
          <TextBox
            color={'#585858'}
            fontSize={18}
            fontWeight={'400'}
            value={'₹' + item_unit_price}
          />
          {/* 
          <TextBox fontSize={18} fontWeight={'400'} value={'Discount'} /> */}
        </View>

        <TextBox
          numberOfLines={textShown === index ? undefined : 2}
          color={'gray'}
          fontSize={14}
          fontWeight={'400'}
          value={item_short_description}
        />

        {textShown !== index ? (
          <Text
            onPress={viewItemToggle}
            style={{fontWeight: '600', color: '#B7710D', fontSize: 16}}>
            {textShown === index ? 'read less...' : '...More'}
          </Text>
        ) : null}
      </View>
      <View style={styles.rightView}>
        <ImageBox imageUrl={item_image_url} styleObj={styles.imageBox} />

        <TouchableOpacity
          style={styles.touchButtonView}
          onPress={viewItemToggle}>
          <TextBox
            color={'#B7710D'}
            fontSize={16}
            fontWeight={'800'}
            value={'ADD'}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
