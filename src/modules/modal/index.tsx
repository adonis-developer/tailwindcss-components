import React, { useState } from 'react';
import Button from '../../components/button';
import ModalTW from '../../components/modal';
function ModalScreen() {
    const [isOpen, setIsOpen] = useState(false);
    const handleCancel = () => setIsOpen(false);
    return (
        <div className="">
            <Button onClick={() => setIsOpen(!isOpen)} text={'OPEN'} />
            <ModalTW
                placement="center"
                modalPadding="p-4"
                width={500}
                isOpen={isOpen}
                onCancel={handleCancel}
                close={true}
                cancelText={'Hủy yêu cần'}
                okText={'Chấp nhận'}
                maskCloseable={true}
                closeIcon={
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M9.16998 14.83L14.83 9.17004"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                        <path
                            d="M14.83 14.83L9.16998 9.17004"
                            stroke="#292D32"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        />
                    </svg>
                }
            >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores a odit repellendus nemo modi
                repellat aspernatur temporibus voluptatum deleniti veritatis fuga iste, atque reprehenderit enim aut,
                eveniet expedita nesciunt adipisci!
            </ModalTW>
        </div>
    );
}

export default ModalScreen;
