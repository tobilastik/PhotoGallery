import * as React from 'react';
import {View, StyleSheet, FlatList, ActivityIndicator} from 'react-native';
import EmptyGallery from '../components/features/gallery/EmptyGallery';
import GalleryList from '../components/lists/GalleryList';
import HomeHeader from '../components/headers/HomeHeader';
import {State} from '../store/reducers';
import {photoAction} from '../store/actions';
import {useDispatch, useSelector} from 'react-redux';
import {loadGallery} from '../api';
import {primaryLight} from '../constants/colors';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const {photoGallery} = useSelector((state: State) => state.photos);

  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (photoGallery.length == 0) {
      setLoading(true);
      handleLoadGallery();
    }
  }, []);

  const handleLoadGallery = async () => {
    const response = await loadGallery();
    dispatch(photoAction.setPhotos(response));
    setLoading(false);
  };

  return (
    <>
      <HomeHeader />
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size={'large'} color={primaryLight} />
        ) : (
          <FlatList
            showsVerticalScrollIndicator={false}
            data={photoGallery}
            renderItem={({item}) => <GalleryList {...item} />}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
            ListEmptyComponent={<EmptyGallery />}
          />
        )}
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
