# Country Information

A web application built with TypeScript that allows users to explore detailed information about countries around the world. The application features a beautiful UI, search and filter functionalities, and displays information such as flags, capitals, regions, populations, and more.

## Features

- 🌎 Browse a list of all countries with their flags and names
- 🔎 Search for countries by name
- 🇺🇳 View detailed information on each country, including:
  - Flag
  - Capital
  - Region and subregion
  - Population
  - Languages
  - Currencies
  - Bordering countries
- 💡 Responsive and modern UI
- ⚡ Built with [TypeScript](https://www.typescriptlang.org/) for type safety

## Demo

> (If deployed, include a link here. Example:)
>
> [Live Demo](https://countryinformation.vercel.app/)

## Screenshots

> (Add screenshots of your app here if available)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or newer recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/DicksonPaL21/country-information.git
   cd country-information
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser and visit:**
   ```
   http://localhost:3000
   ```

## Project Structure

```
country-information/
├── public/                # Static assets served by Next.js
├── src/
│   ├── app/               # Application entry points and main routes (Next.js app directory)
│   ├── assets/            # Static assets (images, etc.) used within the app
│   ├── components/        # Reusable React components
│   ├── helpers/           # Helper functions and utility logic
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API and data fetching services
│   ├── types/             # TypeScript type definitions and interfaces
│   └── utils/             # Utility functions
├── .env                   # Environment variables
├── .eslintrc.json         # ESLint configuration
├── .gitignore             # Git ignore rules
├── .prettierrc            # Prettier configuration
├── next.config.js         # Next.js configuration
├── package.json           # Project metadata and dependencies
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.ts     # Tailwind CSS configuration (TypeScript)
├── tsconfig.json          # TypeScript compiler configuration
├── yarn.lock              # Dependency lockfile for Yarn
└── README.md              # Project documentation
```

## Technologies Used

- **Frontend:** TypeScript, React (assumed), SCSS, Tailwind CSS, Next.js
- **API:** [REST Countries API](https://restcountries.com/) (assumed)
- **Styling:** SCSS, Tailwind CSS

## Future Features

- 🗂️ Filter countries by region

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/YourFeature`
5. Open a pull request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [REST Countries API](https://restcountries.com/)
- Inspiration from frontend mentor challenges and open-source projects

---

> _Made with ❤️ by DicksonPaL21_
