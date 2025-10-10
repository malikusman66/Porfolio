# Portfolio Website

## Overview

This is a modern, animated portfolio website built with React, TypeScript, and Express. The application features a single-page design showcasing a developer's work, skills, and contact information with smooth animations and a dark theme aesthetic. The site includes sections for hero/landing, projects showcase, skills display, and a contact form with backend message handling.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Technology Stack:** React 18 with TypeScript, using Vite as the build tool and development server.

**UI Framework:** The application uses shadcn/ui components (Radix UI primitives) with Tailwind CSS for styling. The design system follows a "new-york" style variant with a dark theme featuring cyan primary colors, purple secondary colors, and pink accent colors.

**Routing:** Client-side routing is implemented using Wouter, a minimal routing library. The application has a simple two-route structure:
- `/` - Home page with all portfolio sections
- `*` - 404 Not Found page

**State Management:** Uses React Query (@tanstack/react-query) for server state management and async operations. No global state management library is used; component state is managed locally with React hooks.

**Animation System:** Framer Motion is used throughout for animations and transitions. Key animation patterns include:
- Scroll-triggered reveals using intersection observer
- Page transition effects
- Hover and interaction animations
- Custom animation variants defined in `lib/animations.ts`

**Component Structure:**
- Page components in `client/src/pages/`
- Reusable UI components in `client/src/components/ui/` (shadcn/ui)
- Feature components in `client/src/components/` (navigation, hero, projects, skills, contact, footer)
- Custom hooks in `client/src/hooks/`

### Backend Architecture

**Server Framework:** Express.js with TypeScript running in ESM module mode.

**Development Setup:** The backend uses Vite middleware in development mode for hot module replacement and seamless frontend integration. In production, it serves static files from the built frontend.

**API Structure:** RESTful API endpoints:
- `POST /api/contact` - Submit contact form messages
- `GET /api/contact-messages` - Retrieve all contact messages (admin endpoint)

**Request Handling:** 
- JSON body parsing with raw body capture for webhook verification
- Request logging middleware that logs API calls with duration and response preview
- Error handling with Zod validation for request bodies

**Storage Layer:** The application uses an abstraction pattern with an `IStorage` interface. Currently implements `MemStorage` (in-memory storage) for contact messages and users. This abstraction allows for easy migration to a database implementation.

### Data Storage Solutions

**Current Implementation:** In-memory storage using JavaScript Maps for development/demo purposes. Data includes:
- Contact messages (id, name, email, subject, message, createdAt)
- Users (id, username, password)

**Database Schema:** Drizzle ORM is configured with PostgreSQL schema definitions in `shared/schema.ts`:
- `users` table with id, username, password
- `contact_messages` table with id, name, email, subject, message, createdAt timestamp

**ORM Configuration:** Drizzle Kit is set up to use PostgreSQL dialect with migrations in `./migrations` directory. The schema uses Drizzle-Zod for automatic schema validation.

**Note:** While the schema is defined for PostgreSQL, the actual database connection is not currently implemented. The `DATABASE_URL` environment variable is required by the configuration but the application runs with in-memory storage.

### External Dependencies

**UI Libraries:**
- Radix UI - Unstyled, accessible component primitives (accordion, dialog, dropdown, select, toast, etc.)
- Tailwind CSS - Utility-first CSS framework
- shadcn/ui - Pre-built component system using Radix UI + Tailwind
- Framer Motion - Animation library for React
- Embla Carousel - Carousel/slider functionality

**Form Handling:**
- React Hook Form - Form state management and validation
- Zod - Schema validation
- @hookform/resolvers - Zod resolver for React Hook Form

**Data Fetching:**
- @tanstack/react-query - Server state management
- Native Fetch API for HTTP requests

**Database & ORM:**
- Drizzle ORM - TypeScript ORM for SQL databases
- @neondatabase/serverless - Neon database driver (configured but not actively used)
- drizzle-zod - Zod schema generation from Drizzle schemas

**Development Tools:**
- Vite - Build tool and dev server
- TypeScript - Type safety
- ESBuild - Production bundling for server code
- TSX - TypeScript execution for development

**Fonts:**
- Google Fonts: Inter (primary sans-serif), Roboto (secondary), JetBrains Mono (monospace)

**Replit Integration:**
- @replit/vite-plugin-runtime-error-modal - Error overlay for development
- @replit/vite-plugin-cartographer - Development tooling
- @replit/vite-plugin-dev-banner - Development mode indicator