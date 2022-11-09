import * as React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import Flex from '../../layouts/Flex';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {gray, primaryLight} from '../../../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../../store/reducers';
import {photoAction} from '../../../store/actions';

type CommentFieldProps = {
  comment: string;
};

const CommentField = ({comment}: CommentFieldProps) => {
  const [text, setText] = React.useState('');
  const dispatch = useDispatch();
  const {photoGallery, selectedPhotoID} = useSelector(
    (state: State) => state.photos,
  );
  const {editComment} = useSelector((state: State) => state.comment);

  React.useEffect(() => {
    if (editComment) {
      setText(comment);
    }
  }, [editComment]);

  const handleSendComment = () => {
    const updatedData = photoGallery.map((item: {id: string}) =>
      item.id === selectedPhotoID ? {...item, comment: text} : item,
    );
    dispatch(photoAction.setPhotos(updatedData));
    setText('');
  };
  return (
    <View style={styles.container}>
      <Flex>
        <AntDesign name="pluscircle" size={30} color={gray} />
        <View style={styles.commentFieldContainer}>
          <TextInput
            multiline
            placeholder="add a comment"
            style={styles.commentField}
            value={text}
            onChangeText={text => setText(text)}
          />
        </View>
        <TouchableOpacity onPress={handleSendComment}>
          <FontAwesome name="send" size={24} color={primaryLight} />
        </TouchableOpacity>
      </Flex>
    </View>
  );
};

export default CommentField;

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
  },
  commentFieldContainer: {
    padding: 8,
    flex: 1,
  },
  commentField: {
    borderWidth: 1,
    padding: 8,
    borderRadius: 6,
    borderColor: gray,
  },
});
