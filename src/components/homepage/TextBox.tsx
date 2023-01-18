import React from 'react';
import {Text, View} from 'react-native';

interface TextboxProps {
  value: string | number;
  fontSize: number;
  fontWeight: string;
  color?: string;
  numberOfLines?: number;
}

export const TextBox = ({
  value,
  fontSize,
  fontWeight,
  color,
  numberOfLines,
}: TextboxProps) => {
  return (
    <>
      <Text
        numberOfLines={numberOfLines}
        ellipsizeMode="tail"
        style={{
          marginTop: 5,
          fontSize: fontSize,
          fontWeight: fontWeight,
          color: color || 'black',
        }}>
        {value}
      </Text>
    </>
  );
};
