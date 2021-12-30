import React from 'react'
import { Text, View,TouchableOpacity } from 'react-native'
import useThemeColors from '../../hooks/useThemeColors'
import Colors from '../../utils/styles/colors'
import { Fonts } from '../../utils/styles/fonts'



export default function BookButton({txt,AddToCart}) {
    const theme=useThemeColors()
    return (
      <TouchableOpacity onPress={()=>AddToCart &&AddToCart()} >
          <View style={{borderRadius:20,backgroundColor:Colors.blue,padding:20,alignItems:'center'}}>
            <Text style={{ fontSize: Fonts.h6, color:Colors.white, textTransform:'uppercase' }}>{txt}</Text>
          </View>
      </TouchableOpacity>
    )
}
