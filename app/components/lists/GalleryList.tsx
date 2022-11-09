import * as React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {useDispatch} from 'react-redux';
import {screenWidth} from '../../constants/dimensions';
import {commentAction, photoAction} from '../../store/actions';
import GalleryDetails from '../features/gallery/GalleryDetails';

interface GalleryListProps {
  image: string;
  author: string;
  comment: string;
  id: string;
}

const GalleryList = ({image, author, comment, id}: GalleryListProps) => {
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const dispatch = useDispatch();

  const handleOpenPopUp = (id: string) => {
    dispatch(photoAction.setSelectedPhoto(id));
    setIsModalVisible(!isModalVisible);
    dispatch(commentAction.setEditComment(false));
  };

  return (
    <TouchableOpacity
      onPress={() => handleOpenPopUp(id)}
      style={styles.container}>
      <View style={styles.productContainer}>
        <Image style={styles.product} source={{uri: image}} />
        <Text style={styles.photoAuthor}>{author}</Text>
      </View>
      <GalleryDetails
        isModalVisible={isModalVisible}
        handleOpenPopUp={handleOpenPopUp}
        image={image}
        comment={comment}
      />
    </TouchableOpacity>
  );
};

export default GalleryList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productContainer: {
    padding: 16,
    justifyContent: 'center',
    width: screenWidth(42),
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 3,
    marginHorizontal: 12,
    marginTop: 24,
    borderRadius: 20,
  },
  product: {
    width: 120,
    height: 140,
    resizeMode: 'cover',
    alignSelf: 'center',
    borderRadius: 12,
  },
  photoAuthor: {
    fontWeight: '500',
    marginTop: 12,
  },
});
