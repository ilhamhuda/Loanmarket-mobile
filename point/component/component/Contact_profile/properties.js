import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

class BuyerWall extends Component {
	constructor(props) {    
    	super(props);      
    	this.state = {mybuyer:[
    		{agenid:1,agen:'Elon Musk',title:'Rumah Minimalis Murah',id:1,price:'880.000.000',lt:200},
    		{agenid:1,agen:'Elon Musk',title:'Rumah Baru Renovasi',id:2,price:'950.000.000',lt:170},
    		{agenid:1,agen:'Elon Musk',title:'Rumah Modern Cluster',id:3,price:'1.000.000.000',lt:190},
    		{agenid:1,agen:'Elon Musk',title:'Nature Residence',id:4,price:'1.500.000.000',lt:300},
    		{agenid:1,agen:'Elon Musk',title:'Rumah Pondok Indah',id:5,price:'999.000.000',lt:200},
    		],publik:[
    		{agenid:2,agen:'Michael',title:'Rumah Baru Renovasi',id:2,price:'950.000.000',lt:170},
    		{agenid:3,agen:'Arnold',title:'Rumah Modern Cluster',id:3,price:'1.000.000.000',lt:190},
    		{agenid:4,agen:'Randy',title:'Nature Residence',id:4,price:'1.500.000.000',lt:300},
    		{agenid:5,agen:'Brian',title:'Rumah Pondok Indah',id:5,price:'999.000.000',lt:200},
    		],buyer:'mybuyer'};
  	}

  	render_listing(listing){
  		return(
  			<View key={listing.id} style={{borderRadius:10,marginBottom:10,backgroundColor:'#fff'}}>
					
					<View style={{flexDirection:'row',padding:15}}>
						{(listing.agenid==1)?<Image style={{height: 35,width:35,borderRadius:35}} resizeMode="cover" source={{
                    uri:
                      'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg',
                  }} />:null}
						{(listing.agenid==2)?<Image style={{height: 35,width:35,borderRadius:35}} resizeMode="cover" source={{
                    uri:
                      'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg',
                  }} />:null}
						{(listing.agenid==3)?<Image style={{height: 35,width:35,borderRadius:35}} resizeMode="cover" source={{
                    uri:
                      'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg',
                  }} />:null}
						{(listing.agenid==4)?<Image style={{height: 35,width:35,borderRadius:35}} resizeMode="cover"source={{
                    uri:
                      'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg',
                  }} />:null}
						{(listing.agenid==5)?<Image style={{height: 35,width:35,borderRadius:35}} resizeMode="cover" source={{
                    uri:
                      'https://i.dailymail.co.uk/1s/2019/08/12/06/17174924-0-image-a-8_1565588063762.jpg',
                  }} />:null}

						<View style={{marginLeft:10}}>
							<Text style={{fontSize:15,fontWeight:'bold'}}>{listing.agen}</Text>
							<Text style={{color:'#888'}}>Raywhite Djuanda</Text>
						</View>
						
					</View>

					<View style={{padding:10}}>
						<View style={{flexDirection:'row',alignContent:'space-between'}}>
							<Text style={{width:'25%',color:'#555'}}>Tipe</Text>
							<Text>: </Text>
							<Text style={{color:'#555'}}>Beli Rumah</Text>
						</View>

						<View style={{flexDirection:'row',alignContent:'space-between'}}>
							<Text style={{width:'25%',color:'#555'}}>LT</Text>
							<Text>: </Text>
							<Text style={{color:'#555'}}>200m</Text>
						</View>

						<View style={{flexDirection:'row',alignContent:'space-between'}}>
							<Text style={{width:'25%',color:'#555'}}>Budget</Text>
							<Text>: </Text>
							<Text style={{color:'#555'}}>800jt</Text>
						</View>

						<View style={{flexDirection:'row',alignContent:'space-between'}}>
							<Text style={{width:'25%',color:'#555'}}>Lokasi</Text>
							<Text>: </Text>
							<Text style={{color:'#555'}}>Bandung, Jawa Barat</Text>
						</View>

						<View style={{flexDirection:'row',alignContent:'space-between'}}>
							<Text style={{width:'25%',color:'#555'}}>Catatan</Text>
							<Text>: </Text>
							<Text style={{width:'70%',color:'#555'}}>Rumah menghadap barat. Ada Garasi. Kamar Tidur 4. Kolam Renang.</Text>
						</View>

					</View>

					<Text style={{margin:10,marginTop:10,color:'#fff',paddingHorizontal:40,borderRadius:20,paddingVertical:10,backgroundColor:'#00854c',fontSize:15, textAlign:'center'}}>HUBUNGI</Text>

				</View>						
  			);

  	}

	render() {
		return(
		<View style={{flex:1,backgroundColor:'#f4f4f4'}}>
			
			<View style={{flexDirection:'row',paddingTop:15,alignContent:'space-between',backgroundColor:'#fff'}}>
				<TouchableOpacity style={{flex:1}} onPress={()=>this.setState({buyer:'mybuyer'})}>
				<Text style={{fontWeight:'bold',fontSize:15,textAlign:'center',paddingBottom:13,borderBottomWidth:3,borderColor:(this.state.buyer=='mybuyer')?'#00854c':'#ccc',color:(this.state.buyer=='mybuyer')?'#00854c':'#000'}}>My Buyer</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{flex:1}} onPress={()=>this.setState({buyer:'publik'})}>
				<Text style={{fontWeight:'bold',fontSize:15,textAlign:'center',paddingBottom:13,borderBottomWidth:3,borderColor:(this.state.buyer=='publik')?'#00854c':'#ccc',color:(this.state.buyer=='publik')?'#00854c':'#000'}}>Publik</Text>
				</TouchableOpacity>
			</View>

			<ScrollView style={{flex:1, padding:15}}>
			{(this.state.buyer=='mybuyer')?this.state.mybuyer.map((item)=>this.render_listing(item)):this.state.publik.map((item)=>this.render_listing(item))}
			<View style={{height:20}}></View>
			</ScrollView>
		</View>
		);		
	}
}

export default BuyerWall;