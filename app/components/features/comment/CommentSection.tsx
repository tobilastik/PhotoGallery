import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Flex from '../../layouts/Flex';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {gray, primaryLight, red, textColor} from '../../../constants/colors';
import img from '../../../constants/images';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../../store/reducers';
import {commentAction, photoAction} from '../../../store/actions';

type CommentSectionProps = {
  comment: string;
};

const CommentSection = ({comment}: CommentSectionProps) => {
  const dispatch = useDispatch();
  const {photoGallery, selectedPhoto} = useSelector(
    (state: State) => state.photos,
  );

  const handleDeleteComment = () => {
    const updatedData = photoGallery.map((item: {id: string}) =>
      item.id === selectedPhoto ? {...item, comment: null} : item,
    );
    dispatch(photoAction.setPhotos(updatedData));
  };

  const handleEditComment = () => {
    dispatch(commentAction.setEditComment(true));
  };

  return (
    <View style={styles.container}>
      <Flex align="flex-start">
        <Image style={styles.posterImage} source={img.avatar} />
        <Flex style={styles.commentContainer} direction="column">
          <Flex>
            <Text style={styles.authorName}>Jane Doe</Text>
            <Text>•</Text>
            <Text style={styles.timePosted}>1h ago</Text>
          </Flex>

          <View style={{paddingRight: 12}}>
            <Text style={styles.commentText}>{comment}</Text>
          </View>
          <Flex>
            <TouchableOpacity onPress={handleEditComment}>
              <Text style={styles.editText}>Edit</Text>
            </TouchableOpacity>
            <Text>|</Text>
            <TouchableOpacity onPress={handleDeleteComment}>
              <Text style={styles.deleteText}>Delete</Text>
            </TouchableOpacity>
          </Flex>
        </Flex>
      </Flex>
    </View>
  );
};

export default CommentSection;

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
  },
  commentFieldContainer: {
    padding: 8,
    flex: 1,
  },
  posterImage: {
    height: 30,
    width: 30,
    marginTop: 4,
  },
  commentField: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 6,
    borderColor: gray,
  },
  commentContainer: {
    alignItems: 'flex-start',
    padding: 6,
  },
  authorName: {
    fontSize: 16,
    marginRight: 6,
    fontWeight: '600',
  },
  timePosted: {
    fontSize: 16,
    marginLeft: 6,
  },
  commentText: {
    color: textColor,
    paddingRight: 12,
    marginVertical: 6,
  },
  editText: {
    marginRight: 6,
    fontSize: 16,
  },
  deleteText: {
    marginLeft: 6,
    fontSize: 16,
    color: red,
  },
});
