import React, { useMemo, useRef } from 'react';
import { PlacementEnumDropdown } from '../types';

export type DropdownProps = {
    children: React.ReactNode;
    items: DropdownItemData[];
    trigger?: 'click' | 'hover';
    placement?: PlacementEnumDropdown;
    arrow?: boolean;
};

export type DropdownItemData = {
    label: React.ReactNode;
    key: string;
};

function Dropdown({ children, items, arrow = true, trigger = 'hover', placement = 'bottom-center' }: DropdownProps) {
    const dropdownListRef = useRef<HTMLDivElement | null>(null);
    const handleToggle = () => {
        console.log('click');

        if (trigger !== 'click') return;
        dropdownListRef.current?.classList.toggle('open-by-click');
    };

    const handleBlur = (e: any) => {
        if (trigger !== 'click') return;
        const isClickedWithinTarget = dropdownListRef.current?.contains(e.relatedTarget);
        if (isClickedWithinTarget) {
            return;
        } else {
            dropdownListRef.current?.classList.remove('open-by-click');
        }
    };

    return (
        <div className={`tw-dropdown relative placement-${placement}`} onBlur={handleBlur}>
            <div className="tw-dropdown__select w-max relative" onClick={handleToggle}>
                {children}
            </div>
            <div
                ref={dropdownListRef}
                className={`tw-dropdown__list animation  transition-all ease-linear duration-150   placement-${placement} trigger-${trigger} arrow-${arrow}`}
            >
                {items.map((item: DropdownItemData, index: number) => {
                    return (
                        <div
                            key={item.key}
                            className=" cursor-pointer rounded-sm transition-all ease-linear  duration-300"
                        >
                            {item.label}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Dropdown;
