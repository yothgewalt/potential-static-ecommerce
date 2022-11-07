/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        screens: {
            '0px': '0px',
            '120px': '120px',
            '280px': '280px',
            '360px': '360px',
            '375px': '375px',
            '390px': '390px',
            '414px': '414px',
            '412px': '412px',
            '540px': '540px',
            '640px': '640px',
            '768px': '768px',
            '820px': '820px',
            '912px': '912px',
            '1024px': '1024px',
            '1280px': '1280px',
            '1536px': '1536px'
        },
        fontFamily: {
            seeds: ['Seed Sans'],
        },
    },
    plugins: [],
}
