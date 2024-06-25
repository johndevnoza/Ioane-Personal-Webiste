/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        homeScreenImg: "url('/src/assets/images/test bg.jpg')",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "var(--background)",
        tabletCover: "var(--tabletCover)",
        tabletScreenBorder: "var(--tabletScreenBorder)",
        elementBgColor: "var(--elementBgColor)",
        elementBgDark: "var(--elementBgDark)",
        borderHighlight: "var(--borderHighlight)",
        navhighlight: "var(--navhighlight)",
        knobhighlight: "var(--knobhighlight)",
        borderDark: "var(--borderDark)",
        selectedColor: "var(--selectedColor)",
        selectedNav: "var(--selectedNav)",
        navBackground: "var(--navBackground)",
        textIcon: "var(--textIcon)",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "8px",
        md: "5px",
        sm: "3px",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        shine: {
          "0%": {
            transform: "translateX(-200px) rotate(-12deg) translateY(-50px)",
          },
          "8%": {
            transform: "translateX(1300%) rotate(-12deg) translateY(-50px)",
          },
          "100%": {
            transform: "translateX(1300%) rotate(-12deg) translateY(-50px)",
          },
        },
        reveal: {
          "0%, 100%": { outline: "transparent" },
          "10%": { outline: "4px solid  var(--selectedColor)" },
        },
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-30px)",
          },
          to: {
            opacity: "100%",
            transform: "translateY(0)",
          },
        },
        turnOff: {
          "100%": {
            opacity: "100",
          },
          "0%": {
            opacity: "0",
          },
        },
        turnOn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "100",
          },
        },
        welcomeAnim: {
          "0%": {
            opacity: "0",
          },
          "40%": {
            opacity: "1",
          },
          "60%": {
            opacity: "1",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        reveal: "reveal 1s ease-in",
        shine: "shine 18s ease infinite",
        slidein: "slidein 2s ease",
        turnOff: "turnOff 1s ease",
        turnOn: "turnOn 2s ease",
        welcomeAnim: "welcomeAnim 3s ease",
      },
    },
  },
};
