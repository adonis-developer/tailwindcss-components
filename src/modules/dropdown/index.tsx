import React, { useState } from 'react';
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
                    className="w-[500px] px-4 py-2 font-medium  text-left rtl:text-right text-white bg-blue-700 border-b border-gray-200 my-1 cursor-pointer focus:outline-none dark:bg-gray-800 dark:border-gray-600"
                >
                    Profile
                </button>
            ),
        },
        {
            key: '3',
            label: (
                <button
                    type="button"
                    className="relative inline-flex items-center w-full px-4 py-2 text-sm font-medium border-b border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-500 dark:focus:text-white"
                >
                    <svg
                        className="w-3 h-3 me-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                    >
                        <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7.75 4H19M7.75 4a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 4h2.25m13.5 6H19m-2.25 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 10h11.25m-4.5 6H19M7.75 16a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0M1 16h2.25"
                        />
                    </svg>
                    Settings
                </button>
            ),
        },
    ];
    return (
        <div className="bg-white w-screen h-[400px] flex justify-center items-center gap-6">
            <Dropdown items={[...data, ...data]} trigger="hover" placement="top-left">
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    text={'hover bottom-left'}
                    className="w-[400px] hover:bg-slate-100 hover:text-black"
                />
            </Dropdown>

            <Dropdown items={[...data, ...data]} trigger="hover" placement="top-center">
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    text={'hover bottom-center'}
                    className="w-[400px] hover:bg-slate-100 hover:text-black"
                />
            </Dropdown>

            <Dropdown items={[...data, ...data]} trigger="hover" placement="top-right">
                <Button
                    onClick={() => setIsOpen(!isOpen)}
                    text={'hover bottom-right'}
                    className="w-[400px] hover:bg-slate-100 hover:text-black"
                />
            </Dropdown>
        </div>
    );
}

export default DropdownScreen;
