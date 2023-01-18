import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  SectionList,
  StatusBar,
  ScrollView,
  Animated,
  FlatList,
} from 'react-native';
import {ItemRow} from './ItemRow';
import DynamicHeader from './DynamicHeader';
import TabSectionList from '../../library/tabSectionList/index';
import useBbkProductData from './useBbkProductData';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7211111',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1',
    title: 'Third Item',
  },
  {
    id: '2222-3da1-471f-bd96-1',
    title: 'Third Item',
  },
  {
    id: '33-3da1-471f-bd96-1',
    title: 'Third Item',
  },
  {
    id: '33-3da1-3333-bd96-1',
    title: 'Third Item',
  },
  {
    id: '33-3da1-3333-66-1',
    title: 'Third Item',
  },
  {
    id: '33-3da1-3333-777-1',
    title: 'Third Item',
  },
  {
    id: '33-3da1-000-777-1',
    title: 'Third Item',
  },
  {
    id: '33-3da1-9999-777-1',
    title: 'Third Item',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7211111',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1',
    title: 'Third Item',
  },
  {
    id: '2222-3da1-471f-bd96-1',
    title: 'Third Item',
  },
  {
    id: '33-3da1-471f-bd96-1',
    title: 'Third Item',
  },
  {
    id: '33-3da1-3333-bd96-1',
    title: 'Third Item',
  },
  {
    id: '33-3da1-3333-66-1',
    title: 'Third Item',
  },
  {
    id: '33-3da1-3333-777-1',
    title: 'Third Item',
  },
  {
    id: '33-3da1-000-777-1',
    title: 'Third Item',
  },
  {
    id: '33-3da1-9999-777-1',
    title: 'Third Item',
  },
];

const App = () => {
  const scrollOffsetY = useRef(new Animated.Value(0)).current;

  const productData = useBbkProductData();

  const SectionHeader = ({title, categoryImage}) => {
    console.log('categoryImage', categoryImage);
    return <Text style={styles.header}>{title}</Text>;
    //  <Text style={styles.header}>{title}</Text>;
  };

  const Item = ({title, date, share}) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}>{share}</Text>
      <Text style={styles.title}>{date}</Text>
    </View>
  );

  const renderItem = ({item}) => (
    <Item
      date={item.exDateFrDividend}
      share={item.dividendShare}
      title={item.dividentType}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={productData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReached={() => console.log('On End Reached ', 'Calling')}
        onEndReachedThreshold={0.1}
      />
      {/* <DynamicHeader animHeaderValue={scrollOffsetY} /> */}
      {/* <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
          {useNativeDriver: false},
        )}> */}
      {/* <SectionList
          scrollEnabled={false}
          sections={menuList}
          keyExtractor={(item, index) => item + index}
          renderItem={({item, index}) => <ItemRow item={item} index={index} />}
          renderSectionHeader={({section: {title}}) => (
            <SectionHeader title={title} />
          )}
        /> */}

      {/* <TabSectionList
        sections={productData}
        keyExtractor={(item, index) => item + index}
        stickySectionHeadersEnabled={true}
        scrollToLocationOffset={50}
        tabBarStyle={styles.tabBar}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderTab={({title, isActive}) => (
          <View
            key={title}
            style={[
              styles.tabContainer,
              {
                borderBottomWidth: isActive ? 1 : 0,
                backgroundColor: isActive ? 'black' : 'transparent',

                borderRadius: 10,
              },
            ]}>
            <Text
              style={[
                styles.tabText,
                {color: isActive ? '#FFFFFF' : '#9e9e9e'},
              ]}>
              {title}
            </Text>
          </View>
        )}
        renderSectionHeader={({section: {title, categoryImage}}) => (
          <SectionHeader title={title} categoryImage={categoryImage} />
        )}
        renderItem={({item, index}) => (
          <ItemRow key={index} item={item} index={index} />
        )}
      /> */}
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  imageBox: {
    borderRadius: 10,
    width: 120,
    height: 120,
    backgroundColor: 'red',
    borderWidth: 0.5,
  },
  header: {
    fontSize: 20,
    backgroundColor: 'white',
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  title: {
    fontSize: 24,
  },
  tabBar: {
    backgroundColor: '#fff',
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
  },
  separator: {
    height: 0.5,
    width: '96%',
    alignSelf: 'flex-end',
    backgroundColor: '#eaeaea',
  },
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  tabBar: {
    backgroundColor: '#fff',
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
  },
  tabContainer: {
    borderBottomColor: '#090909',
  },
  tabText: {
    padding: 15,
    color: '#9e9e9e',
    fontSize: 12,
    fontWeight: '500',
  },
  separator: {
    height: 0.2,
    width: '96%',
    marginRight: 10,
    alignSelf: 'flex-end',
    backgroundColor: 'black',
  },
  sectionHeaderContainer: {
    height: 10,
    backgroundColor: '#f6f6f6',
    borderTopColor: '#f4f4f4',
    borderTopWidth: 1,
    borderBottomColor: '#f4f4f4',
    borderBottomWidth: 1,
  },
  sectionHeaderText: {
    color: '#010101',
    backgroundColor: '#fff',
    fontSize: 23,
    fontWeight: 'bold',
    paddingTop: 25,
    paddingBottom: 5,
    paddingHorizontal: 15,
  },
  itemContainer: {
    paddingVertical: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
  },
  itemTitle: {
    flex: 1,
    fontSize: 20,
    color: '#131313',
  },
  itemPrice: {
    fontSize: 18,
    color: '#131313',
  },
  itemDescription: {
    marginTop: 10,
    color: '#b6b6b6',
    fontSize: 16,
  },
  itemRow: {
    flexDirection: 'row',
  },
});

export default App;
