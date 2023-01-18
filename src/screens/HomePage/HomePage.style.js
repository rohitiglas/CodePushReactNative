import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  itemContainer: {
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
    minHeight: 150,
  },
  leftView: {flex: 5, marginRight: 10},
  leftRowView: {
    marginTop: 5,
    width: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightView: {flex: 3},
  imageBox: {
    borderRadius: 10,
    width: 120,
    height: 120,
    backgroundColor: 'red',
    borderWidth: 0.5,
  },
  vegIcon: {
    width: 20,
    height: 20,
  },
  viewItemImage: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: 300,
    backgroundColor: 'red',
    borderWidth: 0.5,
  },
  touchButtonView: {
    width: 90,
    height: 35,
    bottom: 15,
    justifyContent: 'center',
    left: 14,

    alignItems: 'center',
    backgroundColor: '#FFFFFF',

    borderRadius: 5,
    borderWidth: 0.4,
  },
  addButtonView: {
    width: 120,
    height: 45,

    justifyContent: 'center',

    alignItems: 'center',
    backgroundColor: '#FFFFFF',

    borderRadius: 5,
    borderWidth: 0.4,
  },
  closeView: {
    position: 'absolute',
    right: 10,
    top: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  countContainer: {
    alignItems: 'center',
    padding: 10,
  },
});
export default styles;
