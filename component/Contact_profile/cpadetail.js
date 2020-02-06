import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, TextInput, Picker, ToastAndroid, AsyncStorage, CheckBox,KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import NumberFormat from 'react-number-format';
import * as ImagePicker from 'expo-image-picker';

import api from '../api';

class Upload extends Component {
    static navigationOptions = {
    title: 'Detail CPA',
    headerTintColor: 'black'
  };

	constructor(props) {    
    	super(props);      
    	this.state = {step:1,harga:null,
    		listprovinsi:[],select_prov:null,
    		listkota:[],select_kota:null,
    		listarea:[],select_area:null,
    		address:null,address_number:null,
    		no_pap:null,
    		type:'sell',properti:'1',lt:null,lb:null,km:null,kt:null,garage:null,
    		title:null,deskripsi:null,
    		images:[],
    		listing_date:null,
    		id_contact:null,
    		listed_id:null,
    		logged:null,agen:[],id_user_co:null,
    		showdate:false, contacts:[]

    	}; 
    	//this._getofficeagen();
  	}


	  componentWillMount(){		
		api.getCpaDetail(this.state.id_contact).then((result)=>{ 
		  this.setState({listingproduk:result, loading: false})
			}
	
			
		);
	
	
		}


_pickImage = async (idx) => {

	    let result = await ImagePicker.launchImageLibraryAsync({
	      mediaTypes: ImagePicker.MediaTypeOptions.Images,
	      allowsEditing: true	      
	    });

	    if (!result.cancelled) {   	
	    	var tmp = this.state.images.concat(result.uri);
			this.setState({ images:tmp })		      	
	    }
	};


	_removeImage(idx){
	    var tmp = this.state.images;
	    tmp[idx] = null;
	    tmp.splice(idx,1);
	    this.setState({ images:tmp });
	}



  	_submit = async () => {

  	 var data={};
  	 data.id_user = this.state.logged.id;
	 data.id_user_co = this.state.id_user_co; // ============
	 data.listing_type = this.state.type;
	 data.id_property_type = this.state.properti;
	 data.title = this.state.title;
	 data.price = this.state.harga;
	 data.address = this.state.address; 
	 data.address_number = this.state.address_number;
	 data.id_area = this.state.select_area;
	 data.building_size = this.state.lb;
	 data.land_size = this.state.lt;
	 data.bedroom = this.state.kt;
	 data.bathroom = this.state.km;
	 data.garage = this.state.garage;
	 data.description = this.state.deskripsi;
	 data.no_pap = this.state.no_pap;
	 data.status = this.props.navigation.state.params.status; 
	 data.images = this.state.images;
	 data.listing_date = this.state.listing_date;
	 data.id_contact = this.state.id_contact;

	 if(data.title && data.price && data.id_area && data.land_size && data.description)
	 	await api.insertListing(data).then( (result) => {
            if(result.status){
            	this.setState({listed_id:result.data.id, step:4});
            }else{
            	ToastAndroid.show(result.message, ToastAndroid.SHORT);
            }            
        });
	 else
	 	ToastAndroid.show("Harap Lengkapi Form Anda", ToastAndroid.SHORT);

	};

  	render_picker(){

  		let table = []

	    for (let i = 0; i < this.state.images.length+1; i++) {
	      table.push((this.state.images[i])?
			<TouchableOpacity key={i} onPress={()=>this._removeImage(i)}><View><Image style={{opacity:0.7,margin:5,height: 70,width:70,borderRadius:10}} resizeMode="cover" source={{uri:this.state.images[i]}} /><Text style={{position:'absolute',top:0,right:0}}><Icon size={30} color="#000" name="times-circle"/></Text></View></TouchableOpacity>
			:
	    	<TouchableOpacity key={i} onPress={()=>this._pickImage(i)}>
				<View style={{borderWidth:1,borderColor:'#999',borderRadius:10,margin:5,height:70,width:70,justifyContent:'center',alignItems:'center'}}><Icon name="plus-circle" color="#999"/></View>
			</TouchableOpacity>		
		);
		
	    }

	    return table;
		
  	}

 

	render() {
		return(
			<View  style={{flex:1,backgroundColor: "#f5f5f5"}}>

			{(this.state.step != 5)?
			<View style={{flexDirection:'row',paddingTop:15,alignContent:'space-between'}}>
				<TouchableOpacity style={{flex:1}} onPress={()=>this.setState({step:1})}>
				<Text style={{fontWeight:'bold',fontSize:15,textAlign:'center',paddingBottom:13,borderBottomWidth:3,borderColor:(this.state.step==1)?'#00a8ea':'#f4f4f4'}}>Tahap 1</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{flex:1}} onPress={()=>this.setState({step:2})}>
				<Text style={{fontWeight:'bold',fontSize:15,textAlign:'center',paddingBottom:13,borderBottomWidth:3,borderColor:(this.state.step==2)?'#00a8ea':'#f4f4f4'}}>Tahap 2</Text>
				</TouchableOpacity>
				<TouchableOpacity style={{flex:1}} onPress={()=>this.setState({step:3})}>
				<Text style={{fontWeight:'bold',fontSize:15,textAlign:'center',paddingBottom:13,borderBottomWidth:3,borderColor:(this.state.step==3)?'#00a8ea':'#f4f4f4'}}>Tahap 3</Text>
				</TouchableOpacity>

        
			</View>:null}

			{(this.state.step==4)?
			<ScrollView style={{flex:1,padding:15}}>
				<View style={{alignItems:'center',flex:1,marginTop:50}}>
					<Icon name="check-circle" size={30} color="#3b544a"/>
					<Text style={{marginTop:15,fontSize:21,color:'#3b544a'}}>CPA Terupload!</Text>					
				</View>
			</ScrollView>:null}

			

			{(this.state.step==1)?
			<ScrollView style={{flex:1,padding:15}}>	
				<KeyboardAvoidingView behavior="padding" enabled>


						<Text style={{fontSize:17,marginVertical:15}}>1. Pekerjaan</Text>		

				<View style={{flex:1}}>					
					<TextInput style={{height: 40, borderColor: '#ddd', borderRadius:10, paddingHorizontal:15, borderWidth: 1}} placeholder="Pekerjaan" value={this.state.pekerjaan} onChangeText={(pekerjaan) => this.setState({pekerjaan})} />
				</View>	

						<Text style={{fontSize:17,marginVertical:15}}>2. Alamat Kantor</Text>		

				<View style={{flex:1}}>					
					<TextInput style={{height: 40, borderColor: '#ddd', borderRadius:10, paddingHorizontal:15, borderWidth: 1}} placeholder="Alamat Kantor" value={this.state.alamat} onChangeText={(alamat) => this.setState({alamat})} />
				</View>		
        
				<Text style={{fontSize:17,marginVertical:15}}>3. Lama Bekerja</Text>

				<View style={{flex:1}}>					
					<NumberFormat value={this.state.harga} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} renderText={value => <TextInput style={{height: 40, borderColor: '#ddd', borderRadius:10, paddingHorizontal:15, borderWidth: 1}} placeholder="Lama Bekerja" keyboardType="numeric" value={value} onChangeText={(lamabekerja) => this.setState({lamabekerja})} />} onValueChange={(values) => {const {formattedValue, value} = values;this.setState({lamabekerja: value})}}/>
				</View>					

		

		

		

				<Text style={{fontSize:17,marginVertical:15}}>4. Tujuan Permohonan Kredit</Text>		

				<View style={{flex:1}}>					
					<TextInput style={{height: 40, borderColor: '#ddd', borderRadius:10, paddingHorizontal:15, borderWidth: 1}} placeholder="Tujuan Permohonan" value={this.state.tujuanpermohonan} onChangeText={(tujuanpermohonan) => this.setState({tujuanpermohonan})} />
				</View>			
        
				<Text style={{fontSize:17,marginVertical:15}}>5. Tujuan Permohonan Kredit (Keterangan)</Text>		

				<View style={{flex:1}}>					
					<TextInput style={{height: 40, borderColor: '#ddd', borderRadius:10, paddingHorizontal:15, borderWidth: 1}} placeholder="Keterangan" value={this.state.keterangan} onChangeText={(keterangan) => this.setState({keterangan})} />
				</View>		

        <Text style={{fontSize:17,marginVertical:15}}>6. Plafond</Text>

				<View style={{flex:1}}>					
					<NumberFormat value={this.state.harga} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} renderText={value => <TextInput style={{height: 40, borderColor: '#ddd', borderRadius:10, paddingHorizontal:15, borderWidth: 1}} placeholder="Plafond" keyboardType="numeric" value={value} onChangeText={(plafond) => this.setState({plafond})} />} onValueChange={(values) => {const {formattedValue, value} = values;this.setState({plafond: value})}}/>
				</View>				

				<Text style={{fontSize:17,marginVertical:15}}>7. Jenis Pinjaman</Text>		

				<View style={{flex:1}}>					
					<TextInput style={{height: 40, borderColor: '#ddd', borderRadius:10, paddingHorizontal:15, borderWidth: 1}} placeholder="Jenis Pinjaman" value={this.state.jenismenikah} onChangeText={(jenispinjaman) => this.jenispinjaman} />
				</View>	

				 <TouchableOpacity onPress={()=>this.setState({step:2})} style={{width:'50%',alignSelf:'flex-end'}}>
				 <Text style={{marginTop:20,color:'#00a8ea',paddingHorizontal:20,borderRadius:5,borderWidth:1,borderColor:'#00a8ea',fontSize:17, textAlign:'center',paddingVertical:10}}>Lanjut <Icon name="chevron-right"/></Text>
				 </TouchableOpacity>


 


				 <View style={{height:50}}></View>

				 </KeyboardAvoidingView>				

			</ScrollView> : null }

			{(this.state.step==2)?
				<ScrollView style={{flex:1,padding:15}}>
				<KeyboardAvoidingView behavior="padding" enabled>			

			
        
				<Text style={{fontSize:17,marginVertical:15}}>8. Jangka Waktu</Text>

				<View style={{flex:1}}>					
					<NumberFormat value={this.state.harga} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} renderText={value => <TextInput style={{height: 40, borderColor: '#ddd', borderRadius:10, paddingHorizontal:15, borderWidth: 1}} placeholder="Lama Bekerja" keyboardType="numeric" value={value} onChangeText={(jenispinjaman) => this.setState({jenispinjaman})} />} onValueChange={(values) => {const {formattedValue, value} = values;this.setState({jenispinjaman: value})}}/>
				</View>					

		

		

		

				<Text style={{fontSize:17,marginVertical:15}}>9. Status Menikah</Text>		

				<View style={{flex:1}}>					
					<TextInput style={{height: 40, borderColor: '#ddd', borderRadius:10, paddingHorizontal:15, borderWidth: 1}} placeholder="Status Menikah" value={this.state.statusmenikah} onChangeText={(statusmenikah) => this.setState({statusmenikah})} />
				</View>			
        


        <Text style={{fontSize:17,marginVertical:15}}>10. Nilai Angsuran</Text>

				<View style={{flex:1}}>					
					<NumberFormat value={this.state.harga} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} renderText={value => <TextInput style={{height: 40, borderColor: '#ddd', borderRadius:10, paddingHorizontal:15, borderWidth: 1}} placeholder="Nilai Angsuran" keyboardType="numeric" value={value} onChangeText={(nilaiangsuran) => this.setState({nilaiangsuran})} />} onValueChange={(values) => {const {formattedValue, value} = values;this.setState({nilaiangsuran: value})}}/>
				</View>				

				<Text style={{fontSize:17,marginVertical:15}}>11. Bank yang diinginkan</Text>		

				<View style={{flex:1}}>					
					<TextInput style={{height: 40, borderColor: '#ddd', borderRadius:10, paddingHorizontal:15, borderWidth: 1}} placeholder="Bank yang diinginkan" value={this.state.bank} onChangeText={(bank) => this.bank} />
				</View>
        				<Text style={{fontSize:17,marginVertical:15}}>12. Pengalaman yang tidak nyaman terkait bank</Text>		

				<View style={{flex:1}}>					
					<TextInput style={{height: 40, borderColor: '#ddd', borderRadius:10, paddingHorizontal:15, borderWidth: 1}} placeholder="Pengalaman tidak nyaman" value={this.state.pengalamanbank} onChangeText={(pengalamanbank) => this.setState({pengalamanbank})} />
				</View>		


    <Text style={{fontSize:17,marginVertical:15}}>13. Total penghasilan perbulan (RP)</Text>

				<View style={{flex:1}}>					
					<NumberFormat value={this.state.harga} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} renderText={value => <TextInput style={{height: 40, borderColor: '#ddd', borderRadius:10, paddingHorizontal:15, borderWidth: 1}} placeholder="Total penghasilan" keyboardType="numeric" value={value} onChangeText={(penghasilanperbulan) => this.setState({penghasilanperbulan})} />} onValueChange={(values) => {const {formattedValue, value} = values;this.setState({penghasilanperbulan: value})}}/>
				</View>	


            <Text style={{fontSize:17,marginVertical:15}}>14. Penghasilan lain (sewa,bisnis sampingan) Rp</Text>

				<View style={{flex:1}}>					
					<NumberFormat value={this.state.harga} displayType={'text'} thousandSeparator={'.'} decimalSeparator={','} renderText={value => <TextInput style={{height: 40, borderColor: '#ddd', borderRadius:10, paddingHorizontal:15, borderWidth: 1}} placeholder="Penghasilan lain" keyboardType="numeric" value={value} onChangeText={(penghasilanlain) => this.setState({penghasilanlain})} />} onValueChange={(values) => {const {formattedValue, value} = values;this.setState({penghasilanlain: value})}}/>
				</View>	
				<View style={{flexDirection:'row',alignContent:'space-between',flex:1}}>				

				<TouchableOpacity style={{flex:1,margin:5}} onPress={() => this.setState({step:1})}>
				 <Text style={{marginTop:20,color:'#00a8ea',paddingHorizontal:20,borderRadius:5,borderWidth:1,borderColor:'#00a8ea',fontSize:17, textAlign:'center',paddingVertical:10}}><Icon name="chevron-left"/> Kembali</Text>
				 </TouchableOpacity>

				 <TouchableOpacity style={{flex:1,margin:5}} onPress={()=>this.setState({step:3})}>
				 <Text style={{marginTop:20,color:'#00a8ea',paddingHorizontal:20,borderRadius:5,borderWidth:1,borderColor:'#00a8ea',fontSize:17, textAlign:'center',paddingVertical:10}}>Lanjut <Icon name="chevron-right"/></Text>
				 </TouchableOpacity>			 

				 </View>

				 <View style={{height:50}}></View>

				 </KeyboardAvoidingView>

			</ScrollView>
				:null}

				{(this.state.step==3)?
					<ScrollView style={{flex:1,padding:15}}>

					<KeyboardAvoidingView behavior="padding" enabled>			

          	<Text style={{fontSize:17,marginVertical:15}}><Icon name="file-alt" size={21}/> Dokumen perorangan </Text>

<View style={{marginTop:10,flex: 1, flexDirection: 'column'}}>
                <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30}}>KTP Pemohon</Text>
             </View>
              <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30}}>KTP Pasangan</Text>
             </View>
                  <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30}}>KK</Text>
             </View>
              <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30}}>Akta Nikah/ Cerai</Text>
             </View>
                  <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30}}>NPWP</Text>
             </View>
              <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30}}>SPT/ PPH21</Text>
             </View>
                  <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30}}>Slip Gaji/ Keterangan Penghasilan</Text>
             </View>
              <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30}}>Rekening 6 bulan terakhir</Text>
             </View>
             <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30}}>Surat Keterangan/ Rekomendasi Perusahaan</Text>
             </View>
             <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30}}>Akta Pisah Harta Notaril</Text>
             </View>
             <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30,marginBottom:10}}>Pernyataan Pemilikan Properti</Text>
             </View>
              <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30,marginBottom:10}}>SHM/ HGB/ Strata title</Text>
             </View>
              <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30,marginBottom:10}}>IMB</Text>
             </View>
                   <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <CheckBox checked={this.state.checked} onValueChange={() =>
                      this.setState({ checked: !this.state.checked })
                    } />
             <Text style={{marginLeft:30,marginBottom:10}}>PBB</Text>
             </View>
              </View>  
				<Text style={{fontSize:17,marginVertical:15}}><Icon name="camera" size={21}/> Upload Gambar Dokumen </Text>

				<ScrollView style={{flexDirection:'row'}} showsHorizontalScrollIndicator={false} horizontal={true}>

					{this.render_picker()}

				</ScrollView>

			

	
				<View style={{flexDirection:'row',alignContent:'space-between',flex:1}}>				

				<TouchableOpacity style={{flex:1,margin:5}} onPress={() => this.setState({step:2})}>
				 <Text style={{marginTop:20,color:'#00a8ea',paddingHorizontal:20,borderRadius:5,borderWidth:1,borderColor:'#00a8ea',fontSize:17, textAlign:'center',paddingVertical:10}}><Icon name="chevron-left"/> Kembali</Text>
				 </TouchableOpacity>				

				 <TouchableOpacity style={{flex:1,margin:5}} onPress={() => this._submit()}>
				 <Text style={{marginTop:20,color:'#fff',backgroundColor:'#00a8ea',paddingHorizontal:20,borderRadius:5,borderWidth:1,borderColor:'#00a8ea',fontSize:17, textAlign:'center',paddingVertical:10}}>Upload <Icon name="upload"/></Text>
				 </TouchableOpacity>			 

				 </View>

				 <View style={{height:50}}></View>

				 </KeyboardAvoidingView>

			</ScrollView>:null}
			
			</View>
		);		
	}
}

export default Upload;