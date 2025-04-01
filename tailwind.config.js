/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"], // Adjust paths based on your setup
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")], // Add DaisyUI here
};
