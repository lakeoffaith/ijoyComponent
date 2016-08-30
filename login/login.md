```

/*
    ijoy react-native Component_Login
    name,  规则 ijoy name rule   5-11为以字母开头，字母和数字的规则
    password, 规则 ijoy password rule   5-11为以字母开头，字母和数字的规则
    forgetPassword
    Login
    LogUp
    show error   用toast 显示



*/

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Dimensions
} from 'react-native';
import Icon from 'react-native-material-design/lib/Icon'
const window=Dimensions.get('window');
export default class Login extends React.Component{
  render(){
    return(
       <View style={styles.container}>
          <View style={styles.inputs}>
             <View style={styles.inputContainer}>
                <Icon style={styles.inputIcon} name="person"/>
                <TextInput
                style={styles.input}
                placeholder="账号"
                placeholderTextColor="#FFF"
                 />
             </View>
             <View style={styles.inputContainer}>
                <Icon style={styles.inputIcon} name="lock"/>
                <TextInput
                style={styles.input}
                placeholder="密码"
                placeholderTextColor="#FFF"
                 />

             </View>

          </View>

          <View style={styles.signin}>
              <Text style={{fontSize:20}}>登录</Text>
          </View>
          <View style={styles.urls}>
            <View style={styles.forgotPassword}>
               <Text style={styles.greyFont}>忘记密码</Text>
            </View>
            <View style={styles.signup}>
                <Text>注册</Text>
            </View>
          </View>
        </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    marginTop:59,
    flex:1,
    flexDirection:'column',
    backgroundColor:'transparent'
  },
  mark:{
      fontSize:26
  },
  inputs:{
    flex: 0.3,
    marginTop:10,
    marginBottom:10
  },
  signin:{
    backgroundColor:'#FF00FF',
    padding:20,
    alignItems:'center',
    justifyContent:'center',
    flex:0.15
  },
  urls:{
    flexDirection:'row',
  },
  signup:{
    justifyContent:'center',
    alignItems:'center',
    flex:0.15
  },

  inputIcon:{
      marginLeft:15,
      justifyContent:'center'
  },
  inputContainer:{
      padding:10,
      borderWidth:1,
      borderBottomColor:'#CCC',
      borderColor:'transparent'
  },
  input:{
    position:'absolute',
    left:61,
    top:11,
    right:0,

    fontSize:14
  },
  forgotContainer:{
      alignItems:'flex-end',
      padding:15
  }
})

```