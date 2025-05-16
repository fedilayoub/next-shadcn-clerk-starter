# Next.js SAAS Starter Template 

A modern, production-ready authentication starter template built with Next.js 15, Clerk, and shadcn/ui components. This template provides everything you need to quickly bootstrap a web application with secure authentication, beautiful UI components, and best practices built-in.

![starter](https://github.com/user-attachments/assets/ea030114-653d-4a8b-88e3-d52bb772e553)


## Overview

This starter template solves common authentication challenges and provides a solid foundation for building web applications. It includes:

- Complete authentication flows (Sign In, Sign Up, Password Reset) using custom clerk auth components
- Email verification system
- Responsive and accessible UI components
- Dark/Light mode theming
- TypeScript support
- Modern development tools

## Tech Stack

- **Framework**: Next.js 15
- **Authentication**: Clerk
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui + Radix UI primitives
- **Icons**: Lucide React
- **Theme**: next-themes for dark/light mode
- **Development**: TypeScript, ESLint

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Set up your environment variables:
   Create a `.env.local` file with your Clerk credentials:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
   CLERK_SECRET_KEY=your_secret_key
   ```

4. Run the development server:
   ```bash
   pnpm run dev
   ```

## Available Scripts

- `pnpm run dev` - Starts development server with Turbopack
- `pnpm run build` - Creates production build
- `pnpm run start` - Starts production server
- `pnpm run lint` - Runs ESLint

## Features

### Authentication
- Email/Password authentication
- Email verification flow
- Password reset functionality
- Protected routes
- Authentication state management

### UI/UX
- Responsive design for all screen sizes
- Dark/Light mode support
- Loading states and animations
- Clean and modern UI components
- Accessible components using Radix UI

### Development
- TypeScript for type safety
- ESLint configuration
- Modern development setup with Turbopack
- Organized project structure
- Ready-to-use UI components

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT license.

