# Serverless Next.js Dashboard with Supabase Auth & ShadCN UI

This project is a modern, serverless dashboard built using the [Next.js App Router](https://nextjs.org/docs/app), [Supabase](https://supabase.com/) for authentication, and [ShadCN UI](https://ui.shadcn.com/)

---

## Features

- **Next.js App Router**: Latest routing and layout features.
- **Serverless Deployment**: Optimized for platforms like Vercel.
- **Supabase Auth**: Secure, cookie-based authentication.
- **ShadCN UI Components**: Modern, accessible UI.
- **TypeScript**: Type-safe codebase.
- **Tailwind CSS**: Utility-first styling.
- **Environment Variables**: Seamless configuration.

---

## Getting Started

### 1. Set Up Supabase

- [Create a Supabase project](https://app.supabase.com/).
- Get your project URL and ANON KEY from **Project Settings > API**.

### 2. Changed API keys to the latest

- Removed JWT based old keys and Publishable keys for safer usage.

### 3. Clone and Configure

```bash
git clone https://github.com/your-username/serverless-next-supabase.git
cd serverless-next-supabase
cp .env.example .env.local
# Add your Supabase and weather API credentials to .env.local
```

#### Example `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

### 4. Install Dependencies

```bash
npm install
# or
yarn
```

### 5. Run Locally

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to see the dashboard.

---

## Usage

- Sign up or log in using Supabase Auth.
- Data is fetched live from the supabase API and displayed with clean ShadCN UI components.

---

## Deployment

- Deploy on [Vercel](https://vercel.com/) or any serverless platform.
- Set environment variables in your deployment settings.

---


## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [ShadCN UI Docs](https://ui.shadcn.com/docs)

---

## License

MIT
