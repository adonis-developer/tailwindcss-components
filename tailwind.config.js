/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,tsx}'],
    theme: {
        extend: {
            boxShadow: {
                'custom-1': 'rgba(17, 17, 26, 0.1) 0px 0px 16px',
                'custom-2': 'rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px',
                'custom-3': 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
                'custom-4': 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px',
                'custom-5': 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
                'custom-6': 'rgba(17, 17, 26, 0.05) -1px -1px 2px;',
            },
        },
    },
    plugins: [],
};
