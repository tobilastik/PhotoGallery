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
  const res = render(<PopupModal {...mockProps} />);

  return {...res};
};

describe('ManageGoalModal', () => {
  afterEach(jest.clearAllMocks);

  it('renders correctly', () => {
    const {toJSON} = renderComponent();
    expect(toJSON()).toMatchSnapshot();
  });
});
