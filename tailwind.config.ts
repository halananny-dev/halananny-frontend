
export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
    	extend: {
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			},
    			gray: {
    				'30': '#8EA6B9',
    				'50': '#EEFFFE',
    				'80': '#E2E3E5',
    				'100': '#F1F1F1',
    				'200': '#E3E3E3',
    				'300': '#8EA6B8',
    				'400': '#A6B1B7',
    				'500': '#8A97A1',
    				'800': '#F8F8F8',
    				'900': '#385469'
    			},
    			teal: {
    				'300': '#E8F8F7',
    				'500': '#64CDC7'
    			},
    			yellow: {
    				'500': '#FABB3B'
    			}
    		},
    		borderRadius: {
    			'18': '18px',
    			'26': '26px',
    			md: '14px'
    		},
    		maxWidth: {
    			max: '1320px'
    		},
    		fontSize: {
    			'10': '10px',
    			'40': '40px'
    		},
    		dropShadow: {
    			md: '0 4px 4px 0 rgba(0,0,0,0.25)'
    		},
    		boxShadow: {
    			navbar: '0 4px 12px 0 rgba(0,0,0,0.06)'
    		},
    		backgroundImage: {
    			hero: "url('/hero.svg')"
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
};