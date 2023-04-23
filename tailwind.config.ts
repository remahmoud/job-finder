import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

export default {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: "#2a68ff",
                secondary: "#f1f4f8",
                accent: "#252b36",
                shadow: "#f7f8f9",
            },
        },
    },
    plugins: [],
} satisfies Config;
