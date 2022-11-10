import React,{useEffect , useContext,useState} from "react";
import { View ,Text,StatusBar ,TouchableOpacity} from "react-native";
import { MyContext } from "../../Context/ContextProvider";


const Signout = ({navigation}) =>{
    const {
        isAuthentication,
        setisAuthentication,
        themeValue,
        setthemeValue,
        themes
    } = useContext(MyContext)
    const [selectedTheme, setSelectedTheme] = useState('')
    useEffect(() => {
        StatusBar.setHidden(true, 'none');
        console.log(themeValue.text.color);
      });
    return(
        <View style={{flex:1,alignItems:'center',backgroundColor:themeValue.background.backgroundColor}}>
            <Text style={{textAlign:'center',marginTop:130,fontSize:35,fontWeight:'bold',color:'orange'}}>Signout</Text>
        <Text style={{marginTop:90,fontSize:20 ,color:themeValue.text.color}}>User Is SignIn </Text>
            <TouchableOpacity
            onPress={()=>{
                navigation.navigate('Signin'),
                setisAuthentication('false')
            }} 
            
            style={{ marginTop:30,height:40,width:'80%',borderRadius:5,justifyContent:'center',backgroundColor:'orange',elevation:1}}
            >

                <Text style={{textAlign:'center',color:'white',fontSize:20}}>SignOut</Text>
            </TouchableOpacity>
        
        </View>
    );

};

export default Signout;