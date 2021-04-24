import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';

const Cart = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        flexDirection: 'column',
        marginVertical: 25,
        marginHorizontal: 20
      }}>
        <Text style={{ fontSize: 27,fontWeight: 'bold',}}>ADD TO CART</Text>

        <Text style={{color:'grey',marginTop: 10,letterSpacing: 0.8,fontSize:17}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer
        </Text>
      </View>

      <View>
        <Image source={require('../assets/cart.png')}
            resizeMode='contain'
            style={{
              width: 220,
              height: 220,
              marginVertical: 5
            }}
        />
      </View>

      <TouchableOpacity style={{
        justifyContent:'center',
        backgroundColor:'#8972d4',
        alignItems:'center',
        marginVertical: 50,
        borderRadius: 25,
        width: 150,
        height: 50
      }}
      onPress={() => navigation.navigate('Payment')}
      >
        <Text style={{fontSize: 20,fontWeight: 500,color:'white',alignItems:'center'}}> Next</Text>
    </TouchableOpacity>

    {/* Rendering Dot */}
    <View style={{
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      width: '100%'
      
    }}>
      <View>
        <Text style={{paddingLeft: 10}}>Previous</Text>
      </View>
      <View style={{flexDirection:'row',justifyContent:'center',  alignItems:'center'}}>
        <Text style={styles.dot}></Text>
        <Text style={styles.dots}></Text>
        <Text style={styles.dot}></Text>
      </View>
      <Text style={{fontSize:16, marginRight: 10}}>Skip</Text>
    </View>
  </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:'center'
  },
  dot: {
    marginRight: 5,
    marginLeft: 3,
    backgroundColor: 'grey',
    borderRadius: 5,
    width: 10,
    height:5,
  },
  dots: {
    width: 15,
    height:8,
    borderRadius: 5,
    backgroundColor:'#8972d4',
    marginRight:5,
    marginLeft: 3
  }
});

export default Cart