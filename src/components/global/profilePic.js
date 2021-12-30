import React from 'react'
import { Image ,View} from 'react-native'

export default function ProfilePic({pic}) {
    return (
      <View>
          <View style={{height:50,width:20,borderRadius:50}}>
              <Image source={pic} resizeMode='contain'/>
          </View>
      </View>
    )
}
