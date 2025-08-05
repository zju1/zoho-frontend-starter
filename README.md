# React TypeScript Vite Starter Kit

A modern, production-ready React TypeScript starter kit built with Vite, featuring state management, routing, authentication, internationalization, and UI components.

## 🚀 Features

- **⚡ Vite** - Lightning fast build tool and development server
- **⚛️ React 19** - Latest React with concurrent features
- **📘 TypeScript** - Full type safety
- **🎨 Tailwind CSS v4** - Modern utility-first CSS framework with CSS variables
- **🗂️ Redux Toolkit** - Predictable state management with RTK Query
- **🔄 Redux Persist** - Persist and rehydrate Redux store
- **🌐 React Router v7** - Client-side routing
- **🌍 i18next** - Internationalization framework
- **📋 React Hook Form** - Performant forms with easy validation
- **🎯 Radix UI** - Unstyled, accessible UI primitives
- **🎪 CVA** - Class variance authority for component variants
- **🔧 ESLint** - Code linting with TypeScript support
- **📱 PWA Ready** - Progressive Web App capabilities

## 📁 Project Structure

```
src/
├── app/                    # Application core
│   ├── App.tsx            # Root App component
│   ├── router/            # React Router configuration
│   └── store/             # Redux store configuration
│       ├── apis/          # RTK Query API slices
│       ├── slices/        # Redux slices
│       └── store.config.ts
├── components/            # Reusable components
│   ├── layout/           # Layout components
│   ├── shared/           # Shared business components
│   └── ui/               # Base UI components
├── config/               # Configuration files
├── lib/                  # Utility libraries
├── styles/               # Global styles
└── i18n.ts              # Internationalization setup
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm/yarn/pnpm

### Installation

1. Clone the repository:

```bash
git clone https://github.com/zju1/zoho-frontend-starter
cd zoho-frontend-started
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.development .env.local
```

4. Start development server:

```bash
npm run dev
```

The application will be available at `http://localhost:4500`

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_PORT=4500
```

### Path Aliases

The project uses TypeScript path mapping with `@` alias:

```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

## 🏗️ Architecture

### State Management

- **Redux Toolkit** for global state management
- **RTK Query** for server state and caching
- **Redux Persist** for state persistence

```typescript
// Example API slice
export const authApi = createApi({
  baseQuery: baseQueryWithReauth,
  reducerPath: "authApi",
  endpoints: (builder) => ({
    getMe: builder.query({
      query: () => ({ url: "/auth/me" }),
    }),
  }),
});
```

### Authentication

Built-in authentication system with:

- JWT token management
- Automatic token refresh
- Protected routes
- Persistent login state

### Internationalization

Configured with i18next:

- Translation files in `public/locales/`
- Language detection and persistence
- Ready for multiple languages

### UI Components

- **Shadcn/ui** compatible component system
- **Tailwind CSS** for styling
- **Radix UI** for accessibility
- **CVA** for variant management

```typescript
// Example component usage
import { Button } from "@/components/ui/button";

<Button variant="destructive" size="lg">
  Delete Item
</Button>;
```

## 🎨 Styling

### Tailwind CSS v4

The project uses the latest Tailwind CSS with:

- CSS variables for theming
- Dark mode support
- Custom design tokens
- Responsive design utilities

### Theme Configuration

Colors and spacing are defined in [`src/styles/global.css`](src/styles/global.css):

```css
:root {
  --radius: 0.625rem;
  --background: oklch(1 0 0);
  --foreground: oklch(0.145 0 0);
  --color-brand-main: #fddd2e;
}
```

## 🔐 Type Safety

Full TypeScript configuration with:

- Strict mode enabled
- Path mapping
- Import/export validation
- Component prop typing

### Environment Variables Typing

Environment variables are typed in [`src/vite-env.d.ts`](src/vite-env.d.ts):

```typescript
interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  readonly VITE_APP_PORT: number;
}
```

## 📦 Building for Production

```bash
npm run build
```

This will:

1. Type-check the entire codebase
2. Build optimized bundles
3. Generate static assets in `dist/`

## 🔍 Code Quality

### ESLint Configuration

- TypeScript ESLint rules
- React Hooks rules
- React Refresh support
- Customizable rule sets

### Recommended Extensions

For VS Code development:

- TypeScript
- ESLint
- Tailwind CSS IntelliSense
- Auto Rename Tag

## 🚀 Deployment

The built application (`dist/` folder) can be deployed to any static hosting service:

- **Vercel**: Zero-configuration deployment
- **Netlify**: Drag and drop deployment
- **GitHub Pages**: Free static hosting
- **AWS S3 + CloudFront**: Scalable hosting

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**Built with ❤️ using modern React ecosystem**
