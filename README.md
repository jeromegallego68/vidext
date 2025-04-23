# Todo List Application

A simple TODO application that allow you to create a task, mark as completed and remove it. 

## Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd vidext
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Set up your environment variables:
```bash
cp .env.example .env
```
Edit the `.env` file with your database connection string and other required variables.

4. Set up the database:
```bash
npx prisma generate
```

5. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check code quality
- `npm run test` - Run Jest unit tests
- `npm run test-e2e` - Run Playwright end-to-end tests
- `npm run test-all` - Run both unit and e2e tests


## Technologies Used

- [Next.js 15](https://nextjs.org/)
- [Shadcn](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [tRPC](https://trpc.io/)
- [Formik](https://formik.org/)
- [Zod](https://zod.dev/)
- [Prisma](https://www.prisma.io/)
- [Jest](https://jestjs.io/)
- [Playwright](https://playwright.dev/)
- [Testing Library](https://testing-library.com/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
