import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
  	extend: {
  		colors: {
  			border: "hsl(var(--border))",
  			input: "hsl(var(--input))",
  			ring: "hsl(var(--ring))",
  			background: "hsl(var(--background))",
  			foreground: "hsl(var(--foreground))",
  			primary: {
  				DEFAULT: "#426A56",
  				foreground: "#ffffff",
  			},
  			secondary: {
  				DEFAULT: "#4a7d66",
  				foreground: "#ffffff",
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
  				DEFAULT: "#64ffda",
  				foreground: "#1f2937",
  			},
  			slate: {
  				DEFAULT: "#64748b",
  				dark: "#334155",
  				darker: "#1f2937",
  			},
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: "var(--radius)",
  			md: "calc(var(--radius) - 2px)",
  			sm: "calc(var(--radius) - 4px)",
  		},
  		backgroundImage: {
  			"gradient-main": `linear-gradient(to bottom right, rgb(31 41 55 / 0.95), rgb(55 65 81 / 0.95))`,
  			"gradient-section": `linear-gradient(to bottom right, rgb(31 41 55 / 0.98), rgb(55 65 81 / 0.98))`,
  		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
  safelist: [
    'bg-primary',
    'text-primary',
    'opacity-0',
    'opacity-1',
    'scale-90',
    'scale-100',
    'translate-y-0',
    'translate-y-20',
    'bg-gradient-to-r',
    'from-emerald-500',
    'to-teal-500',
    'text-transparent',
    'bg-clip-text',
    // Animation classes
    'animate-bounce',
    'duration-300',
    'duration-1000',
    'duration-2000',
    'ease-out',
    'transition-all',
    'transition-opacity',
    'transition-transform',
  ],
};
export default config;
