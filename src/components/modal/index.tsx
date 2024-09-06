import React from 'react';
import ReactDOM from 'react-dom';
import Modal, { ModalProps } from './modal';
function ModalTW({ ...props }: ModalProps) {
    return ReactDOM.createPortal(<Modal {...props} />, document.body);
}

export default ModalTW;
