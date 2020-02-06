import React, { Component } from 'react';
import { View, StyleSheet, Keyboard
, TouchableWithoutFeedback, Text, Dimensions
, KeyboardAvoidingView, Platform ,ScrollView,Linking,ToastAndroid,Alert,TextInput} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Communications from 'react-native-communications';
import api from '../api';
import { Permissions, ImagePicker } from 'expo';
import { Checkbox } from 'react-native-paper';
import email from 'react-native-email'
import { Container, Header, Label, DatePicker, Content, List, ListItem, Thumbnail,Item, Icon, Input, Left, Button, Body, Title, Right } from 'native-base'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import  CNRichTextEditor , { CNToolbar , getDefaultStyles, convertToObject } from "react-native-cn-richtext-editor";
import SearchableDropdown from 'react-native-searchable-dropdown';
import {
    Menu,
    MenuOptions, 
    MenuOption,
    MenuTrigger,
    MenuContext,
    MenuProvider,
    renderers
  } from 'react-native-popup-menu';
var items = [
  //name key is must.It is to show the text in front
  { id: 1, name: 'meeting', template: '<div><p><span>This is </span><span style="font-weight: bold;">bold</span><span> and </span><span style="font-style: italic;">italic </span><span>text</span></p></div>' },
  { id: 2, name: 'contoh 2', template: '<div><p><span>This is </span><span style="font-weight: bold;">bold</span><span> and </span><span style="font-style: italic;">italic </span><span>text</span></p></div>'  },
];
const { SlideInMenu } = renderers;

const IS_IOS = Platform.OS === 'ios';
const { width, height } = Dimensions.get('window');
const defaultStyles = getDefaultStyles();

class App extends Component {
  static navigationOptions = {
    title: 'Email Communicator',
    headerTintColor: 'black'
  };
    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;		
      const cekid = params ? params.id : null;
        this.customStyles = {...defaultStyles, body: {fontSize: 12}, heading : {fontSize: 16}
        , title : {fontSize: 20}, ol : {fontSize: 12 }, ul: {fontSize: 12}, bold: {fontSize: 12, fontWeight: 'bold', color: ''}
        };  
        this.state = {
            selectedTag : 'body',
            templateid:cekid,
            data1: ['wildaul@gmail.com', 'fauzahudea@gmail.com'],
            data2: ['ilhamhuda6@gmail.com, syakilamufida11@gmail.com'],
            data3: [],
            data4: [],
            data5: [],
            data6: [],
            data7: [],
            data8: [],
            data9: [],
            data10: [],
            data11: [],
            checked10: false,
            checked11: false,
            checked1: false,
            checked2: false,
            checked3: false,
            checked4: false,
            checked5: false,
            checked: false,
            checked6: false,
            checked7: false,
            checked8: false,
            checked9: false,
            serverData: [],
            email: [],
            subject: '',
            selectedColor : 'default',
            selectedHighlight: 'default',
            colors : ['red', 'green', 'blue'],
            highlights:['yellow_hl','pink_hl', 'orange_hl', 'green_hl','purple_hl','blue_hl'],
            selectedStyles : [],
            // value: [getInitialObject()] get empty editor
            // value: convertToObject('<div><p><span>This is </span><span style="font-weight: bold;">bold</span><span> and </span><span style="font-style: italic;">italic </span><span>text</span></p></div>'
            // , this.customStyles)
            value: [],
            
        };
        // this.state.value = convertToObject("<div><p><span>Test Initial Test</span></p></div>");
        this.editor = null;

    }
pilihtemplate(data){
  Alert.alert('Sorry', this.state.value)
}

addTask = () => {
  let notEmpty = this.state.checked1data.trim().length > 0;

  if (notEmpty) {
    this.setState(
      prevState => {
        let { tasks, text } = prevState;
        return {
          tasks: tasks.concat({ key: tasks.length, text: text }),
          text: ""
        };
      },
      () => Tasks.save(this.state.email)
    );
  }
};

addemail(data){
  this.state.email.push(data)
}
handleEmail = () => {

    Alert.alert('Mote', this.state.email)
  const to = this.state.email// string or array of email addresses
  email(to, {
      // Optional additional arguments
      // cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
      // bcc: 'mee@mee.com', // string or array of email addresses
      subject: this.state.subject,
      body: this.state.value
  }).catch(console.error)
}


   submit(data){
// Linking.openURL('mailto:'+this.state.email+'?subject='+this.state.subject+'&body='+this.state.value);
   Alert.alert('Mote', data) 


} 
 componentDidMount() {
    api.getTemplateId(this.state.templateid).then((result)=>{ 
        this.setState({template:result})
          }
      );
  api.getkategori1().then((result)=>{ 
    this.setState({data1:result})
      }
  );
  api.getkategori2().then((result)=>{ 
    this.setState({data2:result})
      }
  );
  api.getkategori3().then((result)=>{ 
    this.setState({data3:result})
      }
  );
  api.getkategori4().then((result)=>{ 
    this.setState({data4:result})
      }
  );
  api.getkategori5().then((result)=>{ 
    this.setState({data5:result})
      }
  );
  api.getkategori6().then((result)=>{ 
    this.setState({data6:result})
      }
  );
  api.getkategori7().then((result)=>{ 
    this.setState({data7result})
      }
  );
  api.getkategori8().then((result)=>{ 
    this.setState({data8:result})
      }
  );
  api.getkategori9().then((result)=>{ 
    this.setState({data9:result})
      }
  );
  api.getkategori10().then((result)=>{ 
    this.setState({data10:result})
      }
  );
  api.getkategori11().then((result)=>{ 
    this.setState({data11:result})
      }
  );

  }
    onStyleKeyPress = (toolType) => {
        
        if (toolType == 'image') {
            return;
        }
        else {
            this.editor.applyToolbar(toolType);
        }

    }

    onSelectedTagChanged = (tag) => {

        this.setState({
            selectedTag: tag
        })
    }

    onSelectedStyleChanged = (styles) => { 
        const colors = this.state.colors;  
        const highlights = this.state.highlights;  
        let sel = styles.filter(x=> colors.indexOf(x) >= 0);

        let hl = styles.filter(x=> highlights.indexOf(x) >= 0);
        this.setState({
            selectedStyles: styles,
            selectedColor : (sel.length > 0) ? sel[sel.length - 1] : 'default',
            selectedHighlight : (hl.length > 0) ? hl[hl.length - 1] : 'default',
        })
       
    }

    onValueChanged = (value) => {
        this.setState({
            value: value
        });
    }

    insertImage(url) {
        
        this.editor.insertImage(url);
    }

    askPermissionsAsync = async () => {
        const camera = await Permissions.askAsync(Permissions.CAMERA);
        const cameraRoll = await Permissions.askAsync(Permissions.CAMERA_ROLL);

        this.setState({
        hasCameraPermission: camera.status === 'granted',
        hasCameraRollPermission: cameraRoll.status === 'granted'
        });
    };

    useLibraryHandler = async () => {
        await this.askPermissionsAsync();
        let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect: [4, 4],
        base64: false,
        });
        
        this.insertImage(result.uri);
    };

    useCameraHandler = async () => {
        await this.askPermissionsAsync();
        let result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [4, 4],
        base64: false,
        });
        console.log(result);
        
        this.insertImage(result.uri);
    };

    onImageSelectorClicked = (value) => {
        if(value == 1) {
            this.useCameraHandler();    
        }
        else if(value == 2) {
            this.useLibraryHandler();         
        }
        
    }

    onColorSelectorClicked = (value) => {
        
        if(value === 'default') {
            this.editor.applyToolbar(this.state.selectedColor);
        }
        else {
            this.editor.applyToolbar(value);
           
        }

        this.setState({
            selectedColor: value
        });
    }

    onHighlightSelectorClicked = (value) => {
        if(value === 'default') {
            this.editor.applyToolbar(this.state.selectedHighlight);
        }
        else {
            this.editor.applyToolbar(value);
           
        }

        this.setState({
            selectedHighlight: value
        });
    }

    onRemoveImage = ({url, id}) => {        
        // do what you have to do after removing an image
        console.log(`image removed (url : ${url})`);
        
    }

    renderImageSelector() {
        return (
            <Menu renderer={SlideInMenu} onSelect={this.onImageSelectorClicked}>
            <MenuTrigger>
                <MaterialCommunityIcons name="image" size={28} color="#737373" />
            </MenuTrigger>
            <MenuOptions>
                <MenuOption value={1}>
                    <Text style={styles.menuOptionText}>
                        Take Photo
                    </Text>
                </MenuOption>
                <View style={styles.divider}/>
                <MenuOption value={2} >
                    <Text style={styles.menuOptionText}>
                        Photo Library
                    </Text>
                </MenuOption> 
                <View style={styles.divider}/>
                <MenuOption value={3}>
                    <Text style={styles.menuOptionText}>
                        Cancel
                    </Text>
                </MenuOption>
            </MenuOptions>
            </Menu>
        );
    
    }

    renderColorMenuOptions = () => {

        let lst = [];

        if(defaultStyles[this.state.selectedColor]) {
             lst = this.state.colors.filter(x => x !== this.state.selectedColor);
             lst.push('default');
            lst.push(this.state.selectedColor);
        }
        else {
            lst = this.state.colors.filter(x=> true);
            lst.push('default');
        }

        return (
            
            lst.map( (item) => {
                let color = defaultStyles[item] ? defaultStyles[item].color : 'black';
                return (
                    <MenuOption value={item} key={item}>
                        <MaterialCommunityIcons name="format-color-text" color={color}
                        size={28} />
                    </MenuOption>
                );
            })
            
        );
    }

    renderHighlightMenuOptions = () => {
        let lst = [];

        if(defaultStyles[this.state.selectedHighlight]) {
             lst = this.state.highlights.filter(x => x !== this.state.selectedHighlight);
             lst.push('default');
            lst.push(this.state.selectedHighlight);
        }
        else {
            lst = this.state.highlights.filter(x=> true);
            lst.push('default');
        }
        
        

        return (
            
            lst.map( (item) => {
                let bgColor = defaultStyles[item] ? defaultStyles[item].backgroundColor : 'black';
                return (
                    <MenuOption value={item} key={item}>
                        <MaterialCommunityIcons name="marker" color={bgColor}
                        size={26} />
                    </MenuOption>
                );
            })
            
        );
    }

    renderColorSelector() {
       
        let selectedColor = '#737373';
        if(defaultStyles[this.state.selectedColor])
        {
            selectedColor = defaultStyles[this.state.selectedColor].color;
        }
        

        return (
            <Menu renderer={SlideInMenu} onSelect={this.onColorSelectorClicked}>
            <MenuTrigger>
                <MaterialCommunityIcons name="format-color-text" color={selectedColor}
                        size={28} style={{
                            top:2
                        }} />             
            </MenuTrigger>
            <MenuOptions customStyles={optionsStyles}>
                {this.renderColorMenuOptions()}
            </MenuOptions>
            </Menu>
        );
    }

    renderHighlight() {
        let selectedColor = '#737373';
        if(defaultStyles[this.state.selectedHighlight])
        { 
            selectedColor = defaultStyles[this.state.selectedHighlight].backgroundColor;
        }
        return (
            <Menu renderer={SlideInMenu} onSelect={this.onHighlightSelectorClicked}>
            <MenuTrigger>
                <MaterialCommunityIcons name="marker" color={selectedColor}
                        size={24} style={{                          
                        }} />             
            </MenuTrigger>
            <MenuOptions customStyles={highlightOptionsStyles}>
                {this.renderHighlightMenuOptions()}
            </MenuOptions>
            </Menu>
        );
    }

    render() {
        
               
        return (
          <Container>
        <Content style={{borderTopWidth:0, borderTopColor: "#e6e9ed"}}>
          <List>
        <ListItem itemDivider>
              <Text style={{color: "grey", fontSize: 12}}>Default</Text>
            </ListItem>
            </List>
            <View style={{marginTop:10,flex: 1, flexDirection: 'column'}}>
                <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <Checkbox status={this.state.checked1 ? 'checked' : 'unchecked'}
        onPress={() => { 
                this.setState({ checked1: !this.state.checked1,  });
                this.state.email.push.apply(this.state.email, this.state.data1)
                }} />
             <Text style={{marginLeft:30}}>Not Contacted</Text>
             </View>
              <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
              <Checkbox status={this.state.checked2 ? 'checked' : 'unchecked'}
        onPress={() => { this.setState({ checked2: !this.state.checked2 }); 
        this.state.email.push.apply(this.state.email, this.state.data2)
      }} />
             <Text style={{marginLeft:30}}>Cold leads</Text>
             </View>
                  <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <Checkbox status={this.state.checked3 ? 'checked' : 'unchecked'}
        onPress={() => { this.setState({ checked3: !this.state.checked3 }); 
        this.state.email.push.apply(this.state.email, this.state.data3)
      }} />
             <Text style={{marginLeft:30}}>Debitor</Text>
             </View>
              <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
              <Checkbox status={this.state.checked4 ? 'checked' : 'unchecked'}
        onPress={() => { this.setState({ checked4: !this.state.checked4 });    
        this.state.email.push.apply(this.state.email, this.state.data4)
      }} />
             <Text style={{marginLeft:30}}>Hot leads</Text>
             </View>
                  <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <Checkbox status={this.state.checked5 ? 'checked' : 'unchecked'}
        onPress={() => { this.setState({ checked5: !this.state.checked5 }); 
        this.state.email.push.apply(this.state.email, this.state.data5)
      }} />
             <Text style={{marginLeft:30}}>in CPA Process</Text>
             </View>
              <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
              <Checkbox status={this.state.checked6 ? 'checked' : 'unchecked'}
        onPress={() => { this.setState({ checked6: !this.state.checked6 }); 
        this.state.email.push.apply(this.state.email, this.state.data6)
      }} />
             <Text style={{marginLeft:30}}>Just Imported</Text>
             </View>
                  <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
                  <Checkbox status={this.state.checked7 ? 'checked' : 'unchecked'}
        onPress={() => { this.setState({ checked7: !this.state.checked7 }); 
        this.state.email.push.apply(this.state.email, this.state.data7)
      }} />
             <Text style={{marginLeft:30}}>Not Connected</Text>
             </View>
              <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
              <Checkbox status={this.state.checked8 ? 'checked' : 'unchecked'}
        onPress={() => { this.setState({ checked8: !this.state.checked8 }); 
        this.state.email.push.apply(this.state.email, this.state.data8)
      }} />
             <Text style={{marginLeft:30}}>Rejected</Text>
             </View>
             <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
             <Checkbox status={this.state.checked9 ? 'checked' : 'unchecked'}
        onPress={() => { this.setState({ checked9: !this.state.checked9 }); 
        this.state.email.push.apply(this.state.email, this.state.data9)
      }} />
             <Text style={{marginLeft:30}}>Success</Text>
             </View>
             <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
             <Checkbox status={this.state.checked10 ? 'checked' : 'unchecked'}
        onPress={() => { this.setState({ checked10: !this.state.checked10 }); 
        this.state.email.push.apply(this.state.email, this.state.data10)
      }} />
             <Text style={{marginLeft:30}}>Undecided Leads</Text>
             </View>
             <View style={{marginTop:10,flex: 1, flexDirection: 'row'}}>
             <Checkbox status={this.state.checked11 ? 'checked' : 'unchecked'}
        onPress={() => { this.setState({ checked11: !this.state.checked11 }); 
        this.state.email.push.apply(this.state.email, this.state.data11)
      }} />
             <Text style={{marginLeft:30,marginBottom:10}}>Warm Leads</Text>
             </View>
            </View>

                <List>
        <ListItem itemDivider>
              <Text style={{color: "grey", fontSize: 12}}>Kategori Umum Nasabah
</Text>
            </ListItem>
            </List>
            
     
        
              <Item style={{marginTop:10}}floatingLabel last>
              <Label>Subject</Label>
              <Input value={this.state.subject}/>
            </Item> 
       
            <List>
       
            </List>
         
     <KeyboardAvoidingView 
            behavior="padding" 
            enabled
            keyboardVerticalOffset={IS_IOS ? 0 : 0}
            style={styles.root}
            >

            <MenuProvider style={{flex: 1}}>

                      <TouchableWithoutFeedback onPress={Keyboard.dismiss} >             
                    <View style={styles.main}>

		<TextInput multiline={true} value={this.state.value} numberOfLines={20} style={styles.editor} />
   
   
                        {/* <CNRichTextEditor                   
                            ref={input => this.editor = input}
                            onSelectedTagChanged={this.onSelectedTagChanged}
                            onSelectedStyleChanged={this.onSelectedStyleChanged}
                            value={this.state.value}
                            style={styles.editor}
                            styleList={this.customStyles}
                            foreColor='dimgray' // optional (will override default fore-color)
                            onValueChanged={this.onValueChanged}
                            onRemoveImage={this.onRemoveImage}
                        />                         */}
                    </View>
                </TouchableWithoutFeedback>
             <View style={styles.toolbarContainer}>

                    <CNToolbar
                        style={{
                            height: 35,
                        }}
                        iconSetContainerStyle={{
                            flexGrow: 1,
                            justifyContent: 'space-evenly',
                            alignItems: 'center',
                        }}
                        size={28} 
                        iconSet={[
                            {
                                type: 'tool',
                                iconArray: [{
                                    toolTypeText: 'bold',
                                    buttonTypes: 'style',
                                    iconComponent: <MaterialCommunityIcons name="format-bold" />
                                }, 
                                {
                                    toolTypeText: 'italic',
                                    buttonTypes: 'style',
                                    iconComponent: <MaterialCommunityIcons name="format-italic" />
                                },
                                {
                                    toolTypeText: 'underline',
                                    buttonTypes: 'style',
                                    iconComponent: <MaterialCommunityIcons name="format-underline" />
                                },
                                {
                                    toolTypeText: 'lineThrough',
                                    buttonTypes: 'style',
                                    iconComponent: <MaterialCommunityIcons name="format-strikethrough-variant" />
                                }
                            ]
                            },
                            {
                                type: 'seperator'
                            },
                            {
                                type: 'tool',
                                iconArray: [
                                    {
                                        toolTypeText: 'body',
                                        buttonTypes: 'tag',
                                        iconComponent:
                                        <MaterialCommunityIcons name="format-text" />
                                    },
                                    {
                                        toolTypeText: 'title',
                                        buttonTypes: 'tag',
                                        iconComponent:
                                        <MaterialCommunityIcons name="format-header-1" />
                                    },
                                    {
                                        toolTypeText: 'heading',
                                        buttonTypes: 'tag',
                                        iconComponent:
                                        <MaterialCommunityIcons name="format-header-3" />
                                    },
                                    {
                                        toolTypeText: 'ul',
                                        buttonTypes: 'tag',
                                        iconComponent:
                                        <MaterialCommunityIcons name="format-list-bulleted" />
                                    },
                                    {
                                        toolTypeText: 'ol',
                                        buttonTypes: 'tag',
                                        iconComponent:
                                        <MaterialCommunityIcons name="format-list-numbered" />
                                    }
                                ]
                            },
                            {
                                type: 'seperator'
                            },
                            {
                                type: 'tool',
                                iconArray: [
                                {
                                    toolTypeText: 'image',
                                    iconComponent: this.renderImageSelector()
                                },
                                {
                                    toolTypeText: 'color',
                                    iconComponent: this.renderColorSelector()
                                },
                                {
                                    toolTypeText: 'highlight',
                                    iconComponent: this.renderHighlight()
                                }]
                            },
                            
                        ]}
                        selectedTag={this.state.selectedTag}
                        selectedStyles={this.state.selectedStyles}
                        onStyleKeyPress={this.onStyleKeyPress} 
                        backgroundColor="aliceblue" // optional (will override default backgroundColor)
                        color="gray" // optional (will override default color)
                        selectedColor='white' // optional (will override default selectedColor)
                        selectedBackgroundColor='deepskyblue' // optional (will override default selectedBackgroundColor)
                        /> 
                         <ListItem style={{ height: 50,marginLeft:wp('-0.3%'),backgroundColor:"#00a8ea",marginBottom:hp('-0.3%'),width: wp('102%')}}>
            <Left>
            <Button transparent style={{ width: wp('100%')}} onPress={this.handleEmail}>
              <Text style={{color:"white",marginLeft:10, fontSize:10,fontWeight:'bold'}}>SUBMIT</Text>
              </Button>
              </Left>
              <Right>
              <Button transparent   onPress={this.handleEmail}>
              <Icon  name="arrow-forward"  style={{color: "white", fontSize:14, paddingLeft: 10, }}/>
            </Button>
              </Right>
            </ListItem>
                </View>
      

               
            </MenuProvider>
        </KeyboardAvoidingView>
        </Content>
        
      </Container>
           
        );
    }

}

var styles = StyleSheet.create({
    root: {
        flex: 1,
        paddingTop: 20,
        backgroundColor:'#eee',
        flexDirection: 'column', 
        justifyContent: 'flex-end', 
    },
    main: {
        flex: 1,
        paddingLeft: 30,
        paddingRight: 30,
        marginTop:10, height: 300,
        paddingBottom: 1,
        alignItems: 'stretch',
    },
    editor: { 
        backgroundColor : '#fff'
    },
    toolbarContainer: {
        minHeight: 35
    },
    menuOptionText: {
        textAlign: 'center',
        paddingTop: 5,
        paddingBottom: 5
    },
    divider: {
        marginVertical: 0,
        marginHorizontal: 0,
        borderBottomWidth: 1,
        borderColor: '#eee'
    }
});

const optionsStyles = {
    optionsContainer: {
      backgroundColor: 'yellow',
      padding: 0,   
      width: 40,
      marginLeft: width - 40 - 30,
      alignItems: 'flex-end',
    },
    optionsWrapper: {
      //width: 40,
      backgroundColor: 'white',
    },
    optionWrapper: {
       //backgroundColor: 'yellow',
      margin: 2,
    },
    optionTouchable: {
      underlayColor: 'gold',
      activeOpacity: 70,
    },
    // optionText: {
    //   color: 'brown',
    // },
  };

const highlightOptionsStyles = {
optionsContainer: {
    backgroundColor: 'transparent',
    padding: 0,   
    width: 40,
    marginLeft: width - 40,

    alignItems: 'flex-end',
},
optionsWrapper: {
    //width: 40,
    backgroundColor: 'white',
},
optionWrapper: {
    //backgroundColor: 'yellow',
    margin: 2,
},
optionTouchable: {
    underlayColor: 'gold',
    activeOpacity: 70,
},
// optionText: {
//   color: 'brown',
// },
};

export default App;