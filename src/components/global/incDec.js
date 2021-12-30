import React from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Ant from 'react-native-vector-icons/AntDesign'
import useThemeColors from '../../hooks/useThemeColors'
import Colors from '../../utils/styles/colors'
import { Fonts } from '../../utils/styles/fonts'
export default function IncDec() {
    const theme = useThemeColors()
    const [inc, setinc] = React.useState(1)
    return (
        <View>
            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                <TouchableOpacity onPress={() => setinc(inc - 1)}
                    style={{ width: 30, height: 30, borderRadius: 30, borderWidth: 0.2, borderColor: theme.txt, alignItems: 'center', justifyContent: 'center' }}>
                    <Ant name="minus" size={Fonts.F7} color={Colors.grey} />
                </TouchableOpacity>
                <Text style={{ fontSize: Fonts.h5, color: theme.txt, marginHorizontal:10}}>{inc}</Text>
                <TouchableOpacity onPress={() => setinc(inc + 1)}
                    style={{ width: 30, height: 30, borderRadius: 30, borderWidth: 0.2, borderColor: theme.txt, alignItems: 'center', justifyContent: 'center' }}>
                    <Ant name="plus" size={Fonts.F7} color={Colors.grey} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
