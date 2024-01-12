import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
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
      padding:{
        '50': '50px',
        '70': '70px',
        '80': '80px',
        '100': '100px',
        '120': '120px',
        '150': '150px',
        '200': '200px'
      },
      gap: {
        '35':'35px',
        '90': '90px',
        '150': '150px'
      },
      height: {
        '450': '450px'
      },
      width: {
        '350': '350px'
      },
      fontFamily: {
        font2: "var(--font-font2)",
        font2B: "var(--font-font2B)",
      },
      colors: {
        main:"#05384B",
        second:"#231F20",
        third:"#F4F1E2",
        fourth:"#04222C",
        btn:"#09ACAB",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
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
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundImage: {
        'maldives': "url('/Maldives.jpg')",
        'micronesia': "url('/Micronesia.jpg')",
        'thailand': "url('/Thailand.jpg')",
        'indonesia': "url('/Indonesia.jpg')",
        'egypt': "url('/Egypt.jpg')",
        'mexico': "url('/Mexico.jpg')",
        'galapagos': "url('/Galapagos.jpg')",
        'australia': "url('/autralia.jpg')",
        'hero': "url('/background/New-Hero.webp')",
        'cta': "url('/background/bg-cta.png')",
        'destination': "url('/background/destination-part.png')",
        'partner': "url('/svg/bg-partner.svg')",
        'raja': "url('/background/bg-dest-raja4.jpg')",
        'rajaMB': "url('/background/rajaMB.png')",
        'flores': "url('/background/bg-flores.jpg')",
        'floresMB': "url('/background/floresMB.png')",
        'banda': "url('/background/bg-banda.jpg')",
        'bandaMB': "url('/background/bandaMB.png')",
        'labuan': "url('/background/bg-labuan.jpg')",
        'labuanMB': "url('/background/bajoMB.png')",
        'destinations': "url('/background/bg-destinations.webp')",
        'heroRaja': "url('/background/bg-rajaampat-detail.jpg')",
        'heroFlores': "url('/background/bg-flores-detail.jpg')",
        'terms': "url('/background/atf-terms.jpg')",
        'policy': "url('/background/atf-policy.jpg')",
        'yacht': "url('/background/atf-yacht.jpg')",
        'yacht-raja': "url('/background/raja-card.jpg')",
        'yacht-flores': "url('/background/flores-card.jpg')",
        'yacht-banda': "url('/background/banda-card.jpg')",
        'yacht-labuan': "url('/background/labuan-card.jpg')",
        'heritage': "url('/background/atf-heritage.jpg')",
        'about': "url('/background/atf-about.jpg')",
        'atf-about': "url('/background/atg-bg-about.jpg')",
        'respon': "url('/background/atf-respon.jpg')",
        'diver': "url('/background/atf-diver.jpg')",
        'diverMB': "url('/background/atf-diver-mb.jpg')",
        'mbRaja': "url('/background/raja-card.png')",
        'mbFlores': "url('/background/flores-card.png')",
        'mbBanda': "url('/background/banda-card.png')",
        'mbBajo': "url('/background/bajo-card.png')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config