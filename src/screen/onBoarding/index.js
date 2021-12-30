import React from 'react';
import {View, Text} from 'react-native';
import Wrapped from '../../components/global/wrapped';

export default function onBoarding() {
  return (
    <Wrapped>
      <View>
        <View>
          <Text>Choose your favorite fashion categories</Text>
          <Text>You can choose more than one</Text>
        </View>
        <View >
          <View style={{padding: 10, borderWidth: 1}}>
            <Text style={{}}>Jacket</Text>
          </View>
        </View>
      </View>
    </Wrapped>
  );
}
