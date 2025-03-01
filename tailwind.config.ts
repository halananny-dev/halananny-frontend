module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
        gray: {
          1: "#DDDDDD",
          5: "#E2E2E2",
          10: "#DADADA",
          20: "#C3C3C3",
          "30": "#8EA6B9",
          40: "#CFCFCF",
          "50": "#EEFFFE",
          60: "#F7F7F7",
          70: "#C2C2C2",
          "80": "#E2E3E5",
          "100": "#F1F1F1",
          150: "#B2B2B2",
          "200": "#E3E3E3",
          "300": "#8EA6B8",
          "ea":"#EAEAEA",
          "400": "#A6B1B7",
          "500": "#8A97A1",
          600: "#858A9B",
          650: "#F6FFFF",
          700: "#E0E0E0",
          750: "#FBFBFB",
          "800": "#F8F8F8",
          850: "#9C9C9C",
          "900": "#385469",
          950: "#E8E8E8",
          990: "#AEBDC9",
        },
        red: {
          500: "#F05E5E",
        },
        teal: {
          100: "#F1FFF6",
          200: "#F1FFFE",
          400: "#CAFFEA",
          "300": "#E8F8F7",
          "500": "#64CDC7",
        },
        yellow: {
          "500": "#FABB3B",
          600:"#FFAC46"
        },
        green: {
          10: "#F4FFF9",
          100: "#DAFFF4",
          300: "#00BD87",
          400: "#14D27F",
          500: "#16BB52",
          600: "#2DC690",
          700: "#01C248",
          800: "#00BD55",
          900: "#33D592",
        },
        purple: {
          500: "#6973FF",
        },
      },
      borderRadius: {
        "18": "18px",
        "26": "26px",
        md: "14px",
      },
      maxWidth: {
        max: "1320px",
        800: "800px",
        540: "540px",
        390: "390px",
      },
      spacing: {
        4.5: "18px",
        18: "72px",
      },
      fontSize: {
        "10": "10px",
        28: "28px",
        "40": "40px",
      },
      dropShadow: {
        md: "0px 4px 4px rgba(0,0,0,0.25)",
        sidebar: "-1px -3px 30px rgba(0,0,0,0.08)",
        assistant: "0px 15px 32px #C1C5FF",
        filter: "0px 12px 38px rgba(0,0,0,0.04)",
        avatar: "0px 5px 13px rgba(0,0,0,0.12)",
        btn: "0px 4px 8px #97F1D6C9",
      },
      boxShadow: {
        navbar: "0 4px 12px 0 rgba(0,0,0,0.06)",
        lg: "0 12px 44px 0 rgba(0, 0, 0, 0.1)",
      },
      backgroundImage: {
        hero: "url('/hero.svg')",
        register: "url('/register.svg')",
        "nanny-register": "url('/nanny-register.svg')",
        mask: 'url("/mask.svg")',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
