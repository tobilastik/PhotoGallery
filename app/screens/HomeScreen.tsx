import * as React from 'react';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import EmptyGallery from '../components/features/gallery/EmptyGallery';
import GalleryList from '../components/lists/GalleryList';
import HomeHeader from '../components/headers/HomeHeader';
import {State} from '../store/reducers';
import {photoAction} from '../store/actions';
import {Provider, useDispatch, useSelector} from 'react-redux';
import axios from 'axios';

interface HomeScreenProps {}

const HomeScreen = (props: HomeScreenProps) => {
  const dispatch = useDispatch();
  const {photoGallery} = useSelector((state: State) => state.photos);

  const [pollLoaded, setPollLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    if (photoGallery.length == 0) {
      loadGallery();
    }
  }, []);

  const loadGallery = async () => {
    try {
      const responseData = await axios.get(
        `https://api.mocki.io/v2/0de5018a/getGallery`,
      );

      dispatch(photoAction.setPhotos(responseData.data.message));
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      <HomeHeader />
      <View style={styles.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={photoGallery}
          renderItem={({item}) => <GalleryList {...item} />}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          ListEmptyComponent={<EmptyGallery />}
        />
      </View>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
});
