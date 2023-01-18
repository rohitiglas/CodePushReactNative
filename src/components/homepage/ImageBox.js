import React from 'react';
import {Image} from 'react-native';

export const ImageBox = ({imageUrl, styleObj}) => {
  return (
    <>
      <Image source={{uri: imageUrl}} style={styleObj} />
    </>
  );
};
