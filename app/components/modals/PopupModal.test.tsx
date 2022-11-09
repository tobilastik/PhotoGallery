import {fireEvent, render} from '@testing-library/react-native';
import React from 'react';
import {View} from 'react-native';

import {PopupModal, PopupModalProps} from './PopupModal';

const mockProps: PopupModalProps = {
  requestClose: jest.fn(),
  children: <View />,
  modalVisible: false,
};

const renderComponent = () => {
  return render(<PopupModal {...mockProps} />);
};

describe('PopupModal', () => {
  afterEach(jest.clearAllMocks);
  it('renders correctly', () => {
    const {toJSON} = renderComponent();
    expect(toJSON()).toMatchSnapshot();
  });
});
