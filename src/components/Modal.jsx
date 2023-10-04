import React from 'react';
import { Modal as AntdModal } from 'antd';

const Modal = ({ isOpen, onClose, title}) => {
  return (
    <AntdModal title={title} visible={isOpen} onOk={onClose} onCancel={onClose}>

    </AntdModal>
  );
};

export default Modal;
