/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
        extend: {
            colors: {
                primary: '#09072B',
                accent: '#C91480',
                surface: '#F6F6FF',
                secondary: '#87D9C8'
            },
            boxShadow: {
                '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.8)',
            }
        }
    },
    plugins: []
};
