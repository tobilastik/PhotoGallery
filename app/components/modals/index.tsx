import React, {ReactElement} from 'react';
import {View, Modal, SafeAreaView} from 'react-native';
import styles from './style';
import {useDimensions} from '../../constants/dimensions';

type PopupModalProps = {
  requestClose: () => void;
  children: ReactElement;
  modalVisible: boolean;
};

const PopupModal = ({
  children,
  requestClose,
  modalVisible,
}: PopupModalProps) => {
  return (
    <Modal visible={modalVisible} transparent onRequestClose={requestClose}>
      <View style={styles.container}>
        <SafeAreaView style={{flexShrink: 1, flex: 1, marginTop: 10}}>
          {children}
        </SafeAreaView>
      </View>
    </Modal>
  );
};

export default PopupModal;
