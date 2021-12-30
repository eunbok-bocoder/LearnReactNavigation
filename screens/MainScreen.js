import React, {useEffect, useCallback} from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Text, Button, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation, useFocusEffect} from '@react-navigation/native';

// 하단 탭 내비게이터
// const Tab = createBottomTabNavigator();
// 머티리얼 상단 탭 내비게이터
// const Tab = createMaterialTopTabNavigator();

const Tab = createMaterialBottomTabNavigator();

// case 1)
// function OpenDetailButton({onPress}) {
//   return <Button title="Detail 1 열기" onPress={onPress} />;
// }

// case 2)
// function OpenDetailButton({navigation}) {
//   return (
//     <Button
//       title="Detail 1 열기"
//       onPress={() => {
//         navigation.push('Detail', {id: 1});
//       }}
//     />
//   );
// }

// case 3)
function OpenDetailButton() {
  const navigation = useNavigation();

  return (
    <Button
      title="Detail 1 열기"
      onPress={() => {
        navigation.push('Detail', {id: 1});
      }}
    />
  );
}

function HomeScreen({navigation}) {
  // useEffect(() => {
  //   console.log('mounted');
  //   return () => {
  //     console.log('unmounted');
  //   };
  // }, []);

  useFocusEffect(
    useCallback(() => {
      console.log('이 화면을 보고 있어요.');
      return () => {
        console.log('다른 화면으로 넘어갔어요.');
      };
    }, []),
  );

  return (
    <View>
      <Text>Home</Text>
      {/* <Button
        title="Detail 1 열기"
        onPress={() => {
          navigation.push('Detail', {id: 1});
        }}
      /> */}
      {/* <OpenDetailButton onPress={() => navigation.push('Detail', {id: 1})} /> */}
      {/* <OpenDetailButton navigation={navigation} /> */}
      <OpenDetailButton />
    </View>
  );
}

function SearchScreen() {
  return (
    <View>
      <Text>Search</Text>
    </View>
  );
}

function NotificationScreen() {
  return (
    <View>
      <Text>Notification</Text>
    </View>
  );
}

function MessageScreen() {
  return (
    <View>
      <Text>Message</Text>
    </View>
  );
}

function MainScreen() {
  return (
    <Tab.Navigator initialRouteName="Home" labeled={true} shifting={true}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: '홈',
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={24} />,
          tabBarColor: 'black',
          tabBarBadge: 'new',
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabel: '검색',
          tabBarIcon: ({color}) => (
            <Icon name="search" color={color} size={24} />
          ),
          tabBarColor: 'gray',
        }}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          tabBarLabel: '알림',
          tabBarIcon: ({color}) => (
            <Icon name="notifications" color={color} size={24} />
          ),
          tabBarColor: 'green',
          tabBarBadge: 30,
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageScreen}
        options={{
          tabBarLabel: '메시지',
          tabBarIcon: ({color}) => (
            <Icon name="message" color={color} size={24} />
          ),
          tabBarColor: 'blue',
          tabBarBadge: true,
        }}
      />
    </Tab.Navigator>
  );
}

export default MainScreen;
