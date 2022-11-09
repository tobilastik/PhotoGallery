import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Flex from '../../layouts/Flex';

const EmptyGallery = () => {
  return (
    <View style={styles.container}>
      <Flex justify="space-between">
        <Text>No photo available at the moment</Text>
      </Flex>
    </View>
  );
};

export default EmptyGallery;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 18,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
    marginHorizontal: 12,
    padding: 12,
    marginTop: 6,
  },
});
