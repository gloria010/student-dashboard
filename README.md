# Student Dashboard

Frontend Intern Challenge: Next-Gen Learning Dashboard

## Overview

This project is a futuristic student learning dashboard built using Next.js App Router, Supabase, Tailwind CSS, Framer Motion, and Lucide React.

The dashboard displays student learning information in a Bento Grid layout with a dark-themed user interface. Course information is fetched from Supabase and displayed dynamically.

## Tech Stack

* Next.js (App Router)
* TypeScript
* Tailwind CSS
* Supabase
* Framer Motion
* Lucide React
* Vercel

## Architecture Choices

The application is organized into reusable components:

* Sidebar
* Hero Tile
* Course Cards
* Activity Tile

The layout follows a Bento Grid design to create a modern dashboard experience.

## Server and Client Component Split

Server Components:

* Data fetching from Supabase
* Page-level rendering

Client Components:

* Sidebar interactions
* Hover animations
* Progress bar animations
* Framer Motion effects

This approach keeps data fetching efficient while maintaining smooth user interactions.

## Supabase Integration

Course data is stored in a Supabase PostgreSQL database.

Table structure:

* id (uuid)
* title (text)
* progress (integer)
* icon_name (text)
* created_at (timestamp)

Data is fetched dynamically and rendered in the dashboard.

## Loading and Error Handling

* Loading states are implemented for data fetching.
* Graceful error handling is used when database requests fail.

## Animations

Framer Motion is used for:

* Card hover animations
* Sidebar navigation interactions
* Progress bar animations
* Smooth transitions

Animations use transform-based effects to avoid layout shifts and improve performance.

## Responsive Design

Desktop:

* Full sidebar
* Bento Grid layout

Tablet:

* Compact sidebar
* Two-column grid

Mobile:

* Bottom navigation
* Single-column layout

## Challenges Faced

* Dynamic Lucide icon rendering from database values
* TypeScript type safety for icons
* Vercel deployment configuration
* Supabase environment variable setup

## Environment Variables

Create a `.env.local` file:

NEXT_PUBLIC_SUPABASE_URL=your_supabase_url

NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_publishable_key

A sample file is provided in `.env.example`.

## Running Locally

Install dependencies:

npm install

Run the development server:

npm run dev

Build for production:

npm run build

## Deployment

The application is deployed on Vercel.

Live URL:
student-dashboard-flax-sigma.vercel.app
