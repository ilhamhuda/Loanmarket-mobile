import React, { Component } from 'react';
import { Image,ActivityIndicator, ImageBackground, Dimensions,TouchableOpacity,StyleSheet,  View,  Linking, ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import api from '../api'; 
import {
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';

var screenWidth = Dimensions.get('window').width;
import Communications from 'react-native-communications';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Container, Header, Tabs,Tab,TabHeading, Card,CardItem, Content, List, ListItem, Thumbnail, Text,Item, Icon, Input, Left, Button, Body, Title, Right,Fab } from 'native-base';
class BuyerWall extends Component {
  static navigationOptions = {
    title: 'Group contact',
    headerTintColor: 'black'
  };
	constructor(props) {    
    	super(props);
      const { params } = this.props.navigation.state;		
      const cekid = params ? params.id : null;	      
    	this.state = {detail:[],loading:true,listingcpa:[],listingnote: [],listingrequire: [],idcontact:cekid, active: false,mybuyer:[
    		{agenid:1,desc:'Elon Musk',title:'Rumah Minimalis Murah',id:1,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		{agenid:1,desc:'Elon Musk',title:'Rumah Baru Renovasi',id:2,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		{agenid:1,desc:'Elon Musk',title:'Rumah Modern Cluster',id:3,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		{agenid:1,desc:'Elon Musk',title:'Nature Residence',id:4,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		{agenid:1,desc:'Elon Musk',title:'Rumah Pondok Indah',id:5,date:'11 Juni 2013',text:'Read Note',btn:'Notesdetail'},
    		],publik:[
    		{agenid:1,desc:'Pembelian Rumah dan Renovasi Kecil',title:'KPR, Kredit Multiguna',id:1,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsdetail'},
    		{agenid:1,desc:'Pembelian Rumah',title:'Take Over Top Up',d:2,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsdetail'},
    		{agenid:1,desc:'Renovasi Kecil',title:'KPR',id:3,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsdetail'},
    		{agenid:1,desc:'Pembelian Rumah dan Renovasi Kecil',title:'Kredit Rekening Koran',id:4,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsdetail'},
    		{agenid:1,desc:'Pembelian Rumah dan Renovasi Kecil',title:'Term Loan',id:5,date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsdetail'},
    		]
        ,cpa:[
    		{agenid:1,tujuanpermohonan:'Pembelian Rumah dan Renovasi Kecil',jenispinjaman:'KPR, Kredit Multiguna',id:1,due_date:'11 Juni 2013',text:'Read Loan Require',btn:'Requirementsdetail'}
    		],buyer:'note'};
  	}

    
componentWillMount(){   
 
  
  api.getGroupUser(global.userid).then((result)=>{ 
      this.setState({listingnote:result,loading:false})
        }
    );



  /*api.getcategory4().then((result)=>{ 
    this.setState({listing:result.data})
  });	*/  
}


  	listingproduk(listing){
  		return(
  			<View key={listing.id} style={{borderRadius:10,marginTop:10,paddingBottom:10,backgroundColor:'#fff'}}>

				        <View style={{flex: 1,backgroundColor:'white', flexDirection: 'column', margin:10,width: wp('80%')}}>
<View></View>
<Text numberOfLines={1}  style={{color:"black",width: wp('73%'), paddingBottom:5,marginRight:10, fontSize: 16}}>{listing.name} </Text>
             <View style={{flex: 1, flexDirection: 'row'}}>  
             <Icon  name="paper"  style={{color: "grey", marginRight:5, fontSize:14, paddingLeft: 10}}/>
          
           <Text style={{color:"grey", paddingBottom:10, fontSize: 11, }}>
           {listing.description}</Text>
   
             </View>

            
             <View style={{flex: 1, flexDirection: 'row'}}>  
 
   
             </View>

   <ListItem style={{ height: 50,marginLeft:wp('-0.3%'),backgroundColor:"#00a8ea",width: wp('70%'), borderRadius:10}}>
            <Left>
            <Button transparent style={{ width: wp('90%')}} onPress={()=>this.props.navigation.navigate('Groupcontactdetail',{id:listing.id})}>
              <Text style={{color:"white", fontSize:10,fontWeight:'bold'}}>See Groups </Text>
              </Button>
              </Left>
              <Right>
              <Button transparent onPress={()=>this.props.navigation.navigate('Groupcontactdetail',{id:listing.id})}>
              <Icon  name="arrow-forward"  style={{color: "white", fontSize:14, paddingLeft: 10}}/>
            </Button>
              </Right>
            </ListItem>
 


           </View>


				</View>						
  			);

  	}
      addnote(){
        return(
          <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{ }}
          style={{ backgroundColor: '#00a8ea' }}
          position="bottomRight"
          onPress={()=>this.props.navigation.navigate('Groupcontactadd')}>
          <Icon name="add" />
        </Fab>
        )
      }

     


    // listingproduk(listing){
  	// 	return(
  	// 		<View key={listing.id} style={{borderRadius:10,marginBottom:10,backgroundColor:'#fff'}}>

    //     </View>
    //   )
    // }

    
	render() {
    if (this.state.loading) {
      return<ActivityIndicator color='#00a8ea' style={{flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 80}}/>;
    }
		return(
           <Container style={{backgroundColor:'#f5f5f5'}}>
    <View style={{ flex: 1 }}>
        <Content style={{backgroundColor:'#f5f5f5',marginRight:20,marginLeft:20}}>
                        <Searchbar
       style={{backgroundColor:"white",margin:5,marginTop:10,paddingBottom: 0, borderWidth: 0, borderColor: 'white'}}
        placeholder="Search Group"
        onChangeText={query => { this.setState({ firstQuery: query }); }}
        value={this.state.firstQuery}
      />
        


		<View style={{flex:1,backgroundColor:'#f4f4f4'}}>
			


			<ScrollView style={{flex:1, padding:15}}>

                	{(this.state.buyer=='note')?this.state.listingnote.map((item)=>this.listingproduk(item)):null}
             

			<View style={{height:20}}></View>
			</ScrollView>
		</View>

         
      </Content>
        {(this.state.buyer=='note')?this.addnote():null}

        </View>
    </Container>
		);		
	}
}

export default BuyerWall;