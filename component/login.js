import React, { Component } from 'react';
import {  Image, View, StyleSheet,TouchableOpacity, Alert,AppRegistry,
  TextInput,ImageBackground,BackHandler,Text,AsyncStorage,ToastAndroid  } from 'react-native';
import { Constants } from 'expo';
import {createStackNavigator,createTabNavigator,NavigationActions,TabNavigator,}  from 'react-navigation';
import { Icon } from 'react-native-elements';
import api from './api'; 
import Profil from './Other/profile';
import Berandalogin from '../App';
//import { Tabpembantu1 } from '../global2';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange as loc,
  removeOrientationListener as rol
} from 'react-native-responsive-screen';



export default class HomeStack extends Component{
static navigationOptions = {
    header:null,
  };
  constructor(props) {
		    
    super(props);	
    global.tabbaru = null;


  	this.state = {email:'wildan.nul.ihsan@gmail.com',password:'parahyangan1308'};
  }
  
  login(){
    api.login(this.state.email,this.state.password).then((result)=>{ 	      
        if(!result.status) Alert.alert("Email atau Password anda Salah",result.message);
        else{
          AsyncStorage.setItem("logged_id", result.data.id);
          global.userid = result.data.id
          // ToastAndroid.show("Selamat Datang " + result.data.id, ToastAndroid.SHORT);        
          ToastAndroid.show("Selamat Datang ", ToastAndroid.SHORT);  
          // this.props.navigation.navigate("Home");
          this.props.navigation.navigate("Home",{id:result.data.id});
        }
      }); 
    
  } 
	render(){ 
    const resizeMode = 'center';
		return(

      <ImageBackground
        style={{
          backgroundColor: 'white',
          flex: 1,
        
          position: 'absolute',
          width: '100%',
          height: '100%',
          justifyContent: 'center',
        }}
        source={{
          uri:           'https://images.hdbackgroundpictures.com/pictureHD51b556ddd9b9341434.jpg',
        }}
        // source={require('../assets/bck-login.png')}
      >
			<View style={styles.container}>
      <Logo/>

           <Signup2/> 
		

		<TextInput textContentType="emailAddress" 
		keyboardType="email-address"
		 value={this.state.email} 
		 placeholder="Email"
		  underlineColorAndroid='white' 
		  style={styles.inputBox} 
		  placeholderTextColor = "#dddddd"  
		  onChangeText={(text) => this.setState({email:text})} />

<TextInput    underlineColorAndroid='white' 
              placeholder="Password"
			  style={styles.inputBox} 
              secureTextEntry={true}
              placeholderTextColor = "#dddddd" 
value={this.state.password} 
onChangeText={(text) => this.setState({password:text})}/>


               
           <TouchableOpacity   onPress={()=>this.login()} style={styles.button}>
             <Text style={styles.buttonText}>Sign in</Text>
           </TouchableOpacity>  

           <Signup/>   
  		</View>
      </ImageBackground>
			);
	}
}


class Signup extends Component{

	// signup() {
	// 	Actions.signup()
	// }

	render() {
		return(
		
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}></Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> </Text></TouchableOpacity>
				</View>
	
			)
	}
}


class Signup2 extends Component{

	// signup() {
	// 	Actions.signup()
	// }

	render() {
		return(
		
				<View style={styles.signupTextCont2}>
				
				</View>
	
			)
	}
}
class Logo extends Component {
  render() {
    return (
      <View style={styles.signupTextCont}>
        <Image
          style={styles.gambar}
          source={{
          uri:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT-Ewh9a2yVpEt4AzWxSsb81bc6dI25yWPCSOevkLNEdrjpDEOY',
        }}
       />  
  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
  },
  gambar: {
    alignItems: 'stretch',
     width: wp('30'),
     height: hp('20%'),
   },
  inputBox: {
    width: wp('90%'),
    height: hp('7%'),
    backgroundColor:'#ffffff',
    borderRadius: 20,
    paddingHorizontal:16,
    fontSize:16,
   color:'#8c8c8c',
    marginVertical: 10
  },
searchSection: {
    flex: 1,
    flexDirection: 'row',
       width: wp('90%'),
    justifyContent: 'center',
borderRadius: 20,
    alignItems: 'center',
    fontSize:16,
   color:'#8c8c8c',
    backgroundColor: '#fff',
},
searchIcon: {
    padding: 10,
    marginRight:10,
    marginLeft:10,
},
  button: {
    width: wp('90%'),
    height: hp('8%'),
    backgroundColor:'#00a8ea',
     borderRadius:20,
      marginVertical: 10,
      paddingVertical: 13
 },

  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'white',
    textAlign:'center'
  }, 
   signupTextCont : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  input: {
    color: '#424242',
    marginLeft:10
},
  signupTextCont2 : {
  	flexGrow: 1,
    alignItems:'flex-end',
    justifyContent :'center',
    paddingVertical:0,
    flexDirection:'row'
  },
  signupText: {
  	color:'#0000',
  	fontSize:16
  },
  signupButton: {
  	color:'#0000',
  	fontSize:16,
  	fontWeight:'500'
  }
  //  gambar: {
//   justifyContent: 'center',
  //  width: wp('50'),
  //  height: hp('3%'),
//  }


  
});










