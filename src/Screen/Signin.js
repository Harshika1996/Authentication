import React, { useContext, useEffect, useState } from "react";
import { View, Text, StatusBar, TouchableOpacity, Switch } from "react-native";
import { MyContext } from "../../Context/ContextProvider";






const Signin = ({ navigation }) => {
   
    const {
        isAuthentication,
        setisAuthentication,
        themeValue,
        setthemeValue,
       
        themes
    } = useContext(MyContext)
    const [selectedTheme, setSelectedTheme] = useState(themes.light)
    const [isEnabled, setIsEnabled] = useState(false);
    
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState)
     
       // console.log(selectedTheme);
        //console.log("toggleTheme",selectedTheme);
        if(selectedTheme.background.backgroundColor == 'white' ){
            setSelectedTheme(themes.dark)
            setthemeValue(themes.dark)
          

        }else{
            setSelectedTheme(themes.light)
            setthemeValue(themes.light)
         
           
        }
    };
    

    useEffect(() => {
        StatusBar.setHidden(true, 'none');
    });

    return (
        <View style={{ flex: 1, alignItems: 'center',backgroundColor:  selectedTheme.background.backgroundColor  }}>
            <Text style={{ textAlign: 'center', marginTop: 100, fontSize: 35, fontWeight: 'bold', color: 'orange' }}>SIGNIN</Text>
            <View style={{ marginTop: 95, alignSelf: 'flex-end', flexDirection: 'row', margin: 30, }}>
                <Text style={{ alignItems: 'center', marginRight: 10,color:selectedTheme.text.color }}>ChangeTheme</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? 'orange' : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>

            <TouchableOpacity
                onPress={() => {
                    setisAuthentication('true');
                   
                        navigation.replace('Signout')
                    
                }}
                style={{ height: 40, width: '80%', borderRadius: 5, justifyContent: 'center', backgroundColor: 'orange', elevation: 1 }}
            >

                <Text style={{ textAlign: 'center',color:'white',fontWeight:'bold',fontSize:20 }}>SignIn</Text>
            </TouchableOpacity>

            
        </View>
    );

};

export default Signin;