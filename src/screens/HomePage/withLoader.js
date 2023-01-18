import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';

export default function withLoader(Component, url) {
  return props => {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function getData() {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      }

      getData();
    }, []);

    if (!data) {
      return (
        <View>
          <Text>Loading....</Text>
        </View>
      );
    }

    return <Component {...props} data={data} />;
  };
}
