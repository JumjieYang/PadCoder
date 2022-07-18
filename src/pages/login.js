import CookieManager from '@react-native-community/cookies';
import React, {useState} from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';

const Login = ({navigation}) => {
  const [session, setSession] = useState('');
  const [token, setToken] = useState('');

  return (
    <View style={{flex: 1}}>
      <WebView
        source={{uri: 'https://leetcode.com/accounts/login'}}
        onNavigationStateChange={event => {
          if (event.url === 'https://leetcode.com/') {
            CookieManager.getAll(true).then(res => {
              const leetcode_session = res.LEETCODE_SESSION.value;
              const csrf_token = res.csrftoken.value;
              setSession(leetcode_session);
              setToken(csrf_token);
              console.log(session);
              console.log(token);
              navigation.navigate('Code');
            });
          }
        }}
      />
    </View>
  );
};

export default Login;
