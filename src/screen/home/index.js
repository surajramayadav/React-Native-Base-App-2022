import React from 'react'
import { View, Text } from 'react-native'
import Icons from '../../components/Icons'


export default function Home() {
    return (
        <View>
            <Text>Home</Text>
            <Icons icon="AntDesign" name="stepforward" size={25}/>
            {/* <Icon name="stepforward" size={25}/> */}
        </View>
    )
}
