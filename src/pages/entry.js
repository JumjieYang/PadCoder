import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Svg, {Path} from 'react-native-svg';

const Entry = ({navigation}) => {
  const onButtonTouch = () => {
    navigation.navigate('Login');
  };
  return (
    <SafeAreaView style={style.background}>
      <Text style={style.title}>
        Welcome to <Text style={{color: '#FF971E'}}>PadCoder.</Text>
      </Text>
      <View style={style.feature1}>
        <View>
          <Svg
            width={60}
            height={44}
            viewBox="0 0 60 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M17.8953 36L1.90698 22L17.8953 8M41.8777 36L57.866 22L41.8777 8M35.8821 2L23.8909 42"
              stroke="#FF971E"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </View>
        <Text style={style.feature1_text}> Coding anytime, anywhere.</Text>
      </View>
      <View style={style.feature2}>
        <View>
          <Svg
            width={60}
            height={44}
            viewBox="0 0 60 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M29.887 12v30m0-30c1.998-6.58 9.546-9.939 25.98-10 .263 0 .524.042.766.125.243.084.464.206.65.361s.333.34.433.542c.1.202.151.42.15.639v30c0 .442-.21.866-.585 1.178a2.217 2.217 0 0 1-1.414.488c-15.988 0-22.165 2.689-25.98 6.667-3.794-3.958-9.993-6.667-25.981-6.667-1.235 0-1.999-.838-1.999-1.867v-29.8c-.001-.218.05-.436.15-.638.1-.203.247-.387.433-.542.186-.155.407-.277.65-.36A2.34 2.34 0 0 1 3.906 2c16.434.061 23.982 3.42 25.98 10Z"
              stroke="#FF971E"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </View>
        <Text style={style.feature2_text}> Sharpen the coding skills.</Text>
      </View>
      <View style={style.feature3}>
        <View>
          <Svg
            width={60}
            height={44}
            viewBox="0 0 60 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <Path
              d="M54.848 12.17 31.346 2.29A3.786 3.786 0 0 0 29.884 2c-.507 0-1.008.1-1.462.29L4.92 12.17c-.901.376-1.66.96-2.193 1.683a4.098 4.098 0 0 0-.82 2.416v21.149c0 2.53 2.44 4.582 5.45 4.582h45.059c3.01 0 5.45-2.052 5.45-4.582v-21.15a4.099 4.099 0 0 0-.822-2.416c-.534-.724-1.294-1.307-2.196-1.682v0Z"
              stroke="#FF971E"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <Path
              d="M48.893 34.668 31.507 23.151a3.604 3.604 0 0 0-1.982-.58c-.717 0-1.415.204-1.981.58L10.155 34.668m26.9-8.363 18.293-11.8m-51.649 0 18.696 12.03"
              stroke="#FF971E"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </View>
        <Text style={style.feature3_text}> Ace the technical interview.</Text>
      </View>
      <View style={style.button} onTouchEnd={onButtonTouch} />
      <Text style={style.button_text}>Get started</Text>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  background: {
    backgroundColor: '#F5F5F5',
    height: '100%',
  },
  title: {
    position: 'absolute',
    width: 1001,
    height: 77,
    left: 128,
    top: 133,
    // fontFamily: 'RobotoFlex',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 75,
    lineHeight: 88,
  },
  feature1: {
    position: 'absolute',
    width: 411.09,
    height: 40,
    left: 126.91,
    top: 359,
    flexDirection: 'row',
  },
  feature1_text: {
    // fontFamily: 'RobotoFlex',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 28,
    lineHeight: 33,
    paddingLeft: 39.13,
  },
  feature2: {
    position: 'absolute',
    width: 411.09,
    height: 40,
    left: 126.91,
    top: 506,
    flexDirection: 'row',
  },
  feature2_text: {
    // fontFamily: 'RobotoFlex',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 28,
    lineHeight: 33,
    paddingLeft: 39.13,
  },
  feature3: {
    position: 'absolute',
    width: 411.09,
    height: 40,
    left: 126.91,
    top: 653,
    flexDirection: 'row',
  },
  feature3_text: {
    // fontFamily: 'RobotoFlex',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 28,
    lineHeight: 33,
    paddingLeft: 39.13,
  },
  button: {
    position: 'absolute',
    width: 256,
    height: 70,
    left: 953,
    top: 835,
    backgroundColor: 'rgba(255,151,30,0.82)',
    borderRadius: 20,
  },
  button_text: {
    position: 'absolute',
    width: 121,
    height: 29,
    left: 1021,
    top: 855,
    fontSize: 25,
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: 29,
    textAlign: 'center',
    color: '#FFFFFF',
  },
});

export default Entry;
