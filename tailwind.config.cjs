const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'media',
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx}'
    ]
};