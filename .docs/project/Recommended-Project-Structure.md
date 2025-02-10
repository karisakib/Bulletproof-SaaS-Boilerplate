my-app/
├── app/                    # 📌 This is where your routes live
│   ├── routes/
│   │   ├── _index.tsx       # `/`
│   │   ├── about.tsx        # `/about`
│   │   ├── concerts/
│   │   │   ├── _index.tsx   # `/concerts`
│   │   │   ├── $city.tsx    # `/concerts/:city`
│   │   │   ├── trending.tsx # `/concerts/trending`
│   ├── root.tsx             # Layout / Root Component
├── components/              # Reusable components
├── styles/                  # Global styles (CSS/Tailwind)
├── public/                  # Static assets
├── server/                  # Backend (if monolithic)
├── package.json             # Dependencies & scripts
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config (if using Vite)
└── index.tsx                # Entry point
