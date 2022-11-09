import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {screenHeight, screenWidth} from '../../../constants/dimensions';
import PopupModal from '../../modals/PopupModal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {primaryLight} from '../../../constants/colors';
import CommentSection from '../comment/CommentSection';
import CommentField from '../comment/CommentField';

interface GalleryDetailsProps {
  isModalVisible: boolean;
  image: string;
  comment: string;
  handleOpenPopUp: (...args: any[]) => void;
}

const GalleryDetails = ({
  isModalVisible,
  image,
  handleOpenPopUp,
  comment,
}: GalleryDetailsProps) => {
  const [, setComment] = React.useState('');

  return (
    <View>
      <PopupModal modalVisible={isModalVisible} requestClose={handleOpenPopUp}>
        <View style={{padding: 12}}>
          <TouchableOpacity style={styles.closeIcon} onPress={handleOpenPopUp}>
            <MaterialIcons name="cancel" size={24} color={primaryLight} />
          </TouchableOpacity>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Image style={styles.expandPhoto} source={{uri: image}} />
            <CommentField setComment={setComment} comment={comment} />
            {comment ? <CommentSection comment={comment} /> : null}
          </ScrollView>
        </View>
      </PopupModal>
    </View>
  );
};

export default GalleryDetails;

const styles = StyleSheet.create({
  expandPhoto: {
    width: screenWidth(95),
    height: screenHeight(70),
    alignSelf: 'center',
    borderRadius: 12,
  },
  photoAuthor: {
    fontWeight: '500',
    marginTop: 12,
  },
  closeIcon: {
    alignSelf: 'flex-end',
    marginBottom: 6,
  },
});
