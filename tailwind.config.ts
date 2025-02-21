/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",  // Important for React projects
        "./index.html",
    ],
    theme: {
        extend: {
            width:{
                "premium" : "100px"
            }
        }
    },
    plugins: [],
}
