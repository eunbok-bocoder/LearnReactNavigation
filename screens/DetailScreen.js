import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useRoute} from '@react-navigation/native';

function IDText() {
  const route = useRoute();
  return <Text style={styles.text}>id: {route.params.id}</Text>;
}

function DetailScreen({route, navigation}) {
  useEffect(() => {
    navigation.setOptions({
      title: `상세 정보 - ${route.params.id}`,
    });
  }, [navigation, route.params.id]);

  return (
    <View style={styles.block}>
      {/* <Text style={styles.text}>id: {route.params.id}</Text> */}
      <IDText />
      <View style={styles.buttons}>
        <Button
          title="다음"
          // 이전 화면과 동일하면 스택을 쌓지 않고 파라미터만 변경함
          // onPress={() => navigation.navigate('Detail', {id: route.params.id + 1})}
          onPress={() => navigation.push('Detail', {id: route.params.id + 1})}
        />
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
        <Button title="처음으로" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
}

export default DetailScreen;

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
  buttons: {
    flexDirection: 'row',
  },
});
