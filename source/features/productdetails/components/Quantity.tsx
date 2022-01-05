import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {RegularTextB} from '../../../components/Text';
import Colors from '../../../constants/Colors';

export const QuantityCounter = ({
  paddingHorizontal,
  quantity,
  setQuantity,
  editQuantity,
  isInCart,
  cartQuan,
  removeFromCart,
}) => {
  const styles = StyleSheet.create({
    mainView: {
      marginTop: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: paddingHorizontal,
    },
    button: {
      backgroundColor: Colors.primary,
      height: 25,
      width: 25,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    input: {
      color: 'white',
      fontFamily: 'Gilroy-SemiBold',
      fontSize: 18,
      padding: 0,
    },
  });

  const addQuan = () => {
    if (isInCart) {
      const newquan = `${parseInt(cartQuan) + 1}`;
      editQuantity(newquan);
      setQuantity(newquan);
    } else {
      setQuantity(prev => {
        const newquan = `${parseInt(prev) + 1}`;
        return newquan;
      });
    }
  };

  const reduceQuan = () => {
    if (isInCart) {
      const newquan = `${parseInt(cartQuan) - 1}`;
      if (parseInt(newquan) > -1) {
        editQuantity(newquan);
        setQuantity(newquan);
      }
      if (parseInt(newquan) === 0) {
        removeFromCart();
      }
    } else {
      setQuantity(prev => {
        const newquan = `${parseInt(prev) - 1}`;
        if (parseInt(newquan) > -1) {
          return newquan;
        } else {
          return '0';
        }
      });
    }
  };
  return (
    <View style={styles.mainView}>
      <TouchableOpacity onPress={reduceQuan} style={styles.button}>
        <RegularTextB>-</RegularTextB>
      </TouchableOpacity>
      <TextInput
        value={isInCart ? cartQuan?.toString() : quantity?.toString()}
        onChangeText={text => {
          if (isInCart) {
            editQuantity(text);
          }
          setQuantity(text);
        }}
        style={styles.input}
      />
      <TouchableOpacity onPress={addQuan} style={styles.button}>
        <RegularTextB>+</RegularTextB>
      </TouchableOpacity>
    </View>
  );
};
const Quantity = ({
  quantity,
  setQuantity,
  editQuantity,
  isInCart,
  cartQuan,
  removeFromCart,
}) => {
  return (
    <View>
      <RegularTextB>Quantity</RegularTextB>
      <QuantityCounter
        {...{
          quantity,
          setQuantity,
          editQuantity,
          isInCart,
          cartQuan,
          removeFromCart,
        }}
        paddingHorizontal={10}
      />
    </View>
  );
};

export default Quantity;

const styles = StyleSheet.create({});
