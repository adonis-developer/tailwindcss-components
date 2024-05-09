import React, { useMemo } from 'react';
import CloseIcon from '../icons/closeIcon';
import Button from '../button';
import { PlacementEnum } from '../types';

type ModalProps = {
    children: React.ReactNode;
    width?: number | string;
    header?: React.ReactNode;
    footer?: React.ReactNode;
    closeIcon?: React.ReactNode;
    modalPadding?: string;
    close?: boolean;
    onOK?: () => any;
    onCancel?: () => any;
    maskCloseable?: boolean;
    okText?: React.ReactNode;
    cancelText?: React.ReactNode;
    isOpen?: boolean;
    placement?: PlacementEnum;
};

function Modal({
    children,
    width,
    header,
    footer,
    closeIcon,
    modalPadding,
    close = true,
    onOK,
    onCancel,
    maskCloseable = true,
    okText = 'OK',
    cancelText = 'Cancel',
    isOpen = false,
    placement = 'center',
}: ModalProps) {
    const modalPlacement: any = {
        center: 'modal-center',
        'top-right': 'modal-top-right',
        'top-left': 'modal-top-left',
        'bottom-left': 'modal-bottom-left',
        'bottom-right': 'modal-bottom-right',
        'center-right': 'modal-center-right',
        'center-left': 'modal-center-left',
        'center-top': 'modal-center-top',
        'center-bottom': 'modal-center-bottom',
    };
    const closePlacement: any = {
        center: 'close-center',
        'top-right': 'close-top-right',
        'top-left': 'close-top-left',
        'bottom-left': 'close-bottom-left',
        'bottom-right': 'close-bottom-right',
        'center-right': 'close-center-right',
        'center-left': 'close-center-left',
        'center-top': 'close-center-top',
        'center-bottom': 'close-center-bottom',
    };

    const closeIconModal = useMemo(() => {
        if (close && closeIcon) {
            return (
                <button
                    onClick={onCancel}
                    className={`absolute transition-all top-2 right-2 p-2 rounded-[3px] hover:bg-[var(--tw-color-bg-text-hover)] cursor-pointer`}
                >
                    {closeIcon}
                </button>
            );
        }
        if (!close) {
            return;
        }
        return (
            <button
                onClick={onCancel}
                className={`absolute transition-all top-2 right-2 p-2 rounded-[3px] hover:bg-[var(--tw-color-bg-text-hover)] cursor-pointer`}
            >
                <CloseIcon />
            </button>
        );
    }, [close, closeIcon, onCancel]);

    const headerModal = useMemo(() => {
        if (!header && header !== undefined) {
            return <div className={`header-modal relative ${modalPadding}`}>{closeIconModal}</div>;
        }
        return (
            <div className={`header-modal relative ${modalPadding}`}>
                {header ?? (
                    <div className="text-[var(--tw-font-size-base)] font-[var(--tw-font-weight-strong)]">
                        Title Modal
                    </div>
                )}
                {closeIconModal}
            </div>
        );
    }, [header, modalPadding, closeIconModal]);

    const footerModal = useMemo(() => {
        if (!footer && footer !== undefined) {
            return false;
        }

        return (
            <div className={`footer-modal ${modalPadding}`}>
                {footer ?? (
                    <div className="flex justify-end items-center gap-4 pt-4 border-t">
                        <Button
                            text={cancelText}
                            onClick={onCancel}
                            className="bg-transparent hover:bg-[var(--tw-cancel-color)] text-[var(--tw-cancel-color)] font-semibold hover:text-white border border-[var(--tw-cancel-color)]"
                        />
                        <Button
                            text={okText}
                            onClick={onOK}
                            loading
                            className="bg-[var(--tw-ok-color)] hover:bg-[var(--tw-ok-color)] border-[var(--tw-ok-color)] text-white font-bold"
                        />
                        <Button
                            text={okText}
                            onClick={onOK}
                            disabled
                            className="bg-[var(--tw-ok-color)] hover:bg-[var(--tw-ok-color)] border-[var(--tw-ok-color)] text-white font-bold"
                        />
                    </div>
                )}
            </div>
        );
    }, [footer, modalPadding, cancelText, okText, onOK, onCancel]);

    return (
        <section>
            <div
                data-tw-modal-overlay
                onClick={maskCloseable ? onCancel : () => ({})}
                className={`${isOpen ? 'open-modal' : 'close-modal'} w-screen h-screen z-[1000] duration-100 bg-black top-0 bottom-0 left-0 right-0 transition-all origin-center `}
            ></div>
            <div
                data-tw-modal-content
                style={{ width }}
                className={`${isOpen ? modalPlacement[placement] : closePlacement[placement]} absolute z-[1001] rounded-lg bg-white duration-150 transition-all origin-center `}
            >
                {headerModal}
                <div className={`${modalPadding} content-modal m-h-[50px] `}>{children}</div>
                {footerModal}
            </div>
        </section>
    );
}

export default Modal;
