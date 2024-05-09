import React, { useState } from 'react';
import Modal from '../../components/modal';
import Button from '../../components/button';
import Dropdown from '../../components/dropdown';

function DropdownScreen() {
    const [isOpen, setIsOpen] = useState(false);
    const handleCancel = () => setIsOpen(false);
    const data = [
        {
            key: '1',
            label: (
                <button
                    aria-current="true"
                    type="button"
                    className="w-[200px] px-4 py-2 font-medium text-left rtl:text-right text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600"
                >
                    Profile
                </button>
            ),
        },
        {
            key: '2',
            label: (
                <button
                    aria-current="true"
                    type="button"
                    className="w-full px-4 py-2 font-medium text-left rtl:text-right text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600"
                >
                    Profile
                </button>
            ),
        },
        {
            key: '3',
            label: (
                <button
                    aria-current="true"
                    type="button"
                    className="w-full px-4 py-2 font-medium text-left rtl:text-right text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600"
                >
                    Profile
                </button>
            ),
        },
        {
            key: '4',
            label: (
                <button
                    aria-current="true"
                    type="button"
                    className="w-full px-4 py-2 font-medium text-left rtl:text-right text-white bg-blue-700 border-b border-gray-200 rounded-t-lg cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600"
                >
                    Profile
                </button>
            ),
        },
    ];
    return (
        <div className="bg-white w-screen h-[400px] flex justify-center items-center gap-6">
            <Dropdown items={data} trigger="hover">
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    text={'OPEN'}
                    className="w-[200px] hover:bg-slate-100 hover:text-black"
                />
            </Dropdown>
        </div>
    );
}

export default DropdownScreen;
