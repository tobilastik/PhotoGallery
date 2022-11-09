import * as React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';
import Flex from '../layouts/Flex';

import {primary, primaryLight, white} from '../../constants/colors';
import {screenHeight} from '../../constants/dimensions';
import img from '../../constants/images';

interface HomeHeaderProps {}

const HomeHeader = (props: HomeHeaderProps) => {
  return (
    <View>
      <View style={styles.header}>
        <Flex justify="space-between">
          <View style={styles.menuContainer}>
            <Feather name="grid" size={24} color="white" />
          </View>
          <Image style={{height: 40, width: 40}} source={img.avatar} />
        </Flex>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Hello there,{'\n'}Welcome back!</Text>
        </View>
      </View>
    </View>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: primary,
    height: screenHeight(35),
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
    paddingVertical: 80,
    padding: 20,
  },
  menuContainer: {
    backgroundColor: primaryLight,
    padding: 10,
    borderRadius: 12,
  },
  text: {
    fontSize: 36,
    color: white,
    fontWeight: '500',
  },
  textContainer: {
    marginTop: 42,
  },
});
