import React from 'react';
type ButtonProps = {
    children?: React.ReactNode;
    text?: React.ReactNode;
    width?: number | string;
    className?: string;
    loading?: boolean;
    disabled?: boolean;
    onClick?: (data: any) => any;
};

function Button({ children, text, width, className, loading, disabled, onClick }: ButtonProps) {
    const loadingIcon = (
        <div className="flex-col gap-4 w-full flex items-center justify-center">
            <div className="w-6 h-6 border-4 text-blue-400 text-4xl animate-spin border-gray-300 flex items-center justify-center border-t-blue-400 rounded-full"></div>
        </div>
    );
    return (
        <button
            style={{ width }}
            onClick={onClick}
            disabled={disabled}
            className={`${className} transition-all duration-100 hover:text-white py-2 px-4 border rounded min-w-[100px] flex gap-2 justify-center items-center disabled:pointer-events-none disabled:bg-[var(--tw-cancel-color)] disabled:border-none disabled:text-white`}
        >
            <div className="w-max">{loading && loadingIcon}</div>
            <div className="flex-1">{children ?? text}</div>
        </button>
    );
}

export default Button;
