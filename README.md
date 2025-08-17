# 🔐 Next.js + Supabase Magic Link Authentication Template

A modern, production-ready authentication system built with Next.js 15 and Supabase, featuring magic link-based email verification during signup and traditional password-based login for ongoing authentication.

## ✨ Features

- **🔗 Magic Link Verification**: Secure email verification during signup
- **📧 Email Confirmation Links**: Click-to-confirm email verification system
- **🔄 Seamless User Flow**: Sign up → Email confirmation → Protected access
- **🛡️ Route Protection**: Middleware-based authentication guards
- **📱 Responsive Design**: Mobile-first, accessible UI components
- **⚡ TypeScript**: Full type safety and IntelliSense support
- **🎨 Modern UI**: Built with Tailwind CSS and shadcn/ui components
- **🚀 Production Ready**: Optimized builds and error handling

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Supabase account and project

### 1. Clone the Repository

```bash
git clone https://github.com/sidvekariya510/serverless-next-supabase.git
cd serverless-next-supabase
git checkout magic-link-flow
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_ANON_KEY=your_supabase_anon_key
```

### 4. Supabase Configuration

#### Email Template Setup

1. Go to your **Supabase Dashboard** → **Authentication** → **Email Templates**
2. Find the **"Confirm signup"** template
3. Use the default magic link template or customize it:

```html
<h2>Confirm your signup</h2>

<p>Follow this link to confirm your user:</p>
<p><a href="{{ .ConfirmationURL }}">Confirm your mail</a></p>
```

#### Redirect URL Configuration

1. Go to **Authentication** → **Settings** → **URL Configuration**
2. Add your redirect URLs:
   - **Site URL**: `http://localhost:3000` (development)
   - **Redirect URLs**: `http://localhost:3000/auth/confirm`

### 5. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

## 🏗️ Project Structure

```
├── app/                          # Next.js 15 App Router
│   ├── auth/                     # Authentication pages
│   │   ├── login/               # Login page
│   │   ├── sign-up/             # Sign up page
│   │   ├── confirm/             # Magic link confirmation route
│   │   ├── sign-up-success/     # Success page after signup
│   │   ├── forgot-password/     # Password reset
│   │   ├── update-password/     # Password update
│   │   └── error/               # Error handling page
│   ├── protected/                # Protected routes
│   └── layout.tsx               # Root layout
├── components/                   # Reusable components
│   ├── auth/                    # Authentication components
│   ├── ui/                      # UI components (shadcn/ui)
│   └── sign-up-form.tsx        # Sign up form
├── lib/                         # Utility libraries
│   └── supabase/               # Supabase client configuration
├── middleware.ts                # Authentication middleware
└── tailwind.config.ts          # Tailwind CSS configuration
```

## 🔐 Authentication Flow

### 1. User Sign Up
```
User fills sign-up form → Magic link sent to email → Redirect to success page
```

### 2. Email Confirmation
```
User clicks magic link → Account verified → Redirected to protected area
```

### 3. Login & Protection
```
User logs in with email/password → Middleware validates → Access to protected routes
```

## 📧 Magic Link System

### How It Works
1. **User signs up** with email and password
2. **Supabase sends** a confirmation email with a magic link
3. **User clicks** the magic link in their email
4. **Account is verified** and user is redirected to protected area
5. **User can now login** with email/password for all future sessions

### Magic Link Route
The `/auth/confirm` route handles the magic link verification:
- Extracts `token_hash` and `type` from URL parameters
- Verifies the OTP using Supabase
- Redirects user to protected area on success
- Shows error page on failure

## 🛡️ Security Features

- **Route Protection**: Middleware-based authentication guards
- **Session Management**: Secure cookie handling with Supabase
- **Magic Link Security**: Time-limited, single-use confirmation links
- **Rate Limiting**: Built-in Supabase rate limiting
- **CSRF Protection**: Next.js built-in CSRF protection

## 🎨 UI Components

Built with [shadcn/ui](https://ui.shadcn.com/) components:

- **Button**: Primary, secondary, and outline variants
- **Card**: Clean, modern card layouts
- **Input**: Form inputs with validation
- **Label**: Accessible form labels
- **Badge**: Status and information badges

## 📱 Responsive Design

- **Mobile First**: Optimized for mobile devices
- **Breakpoints**: Responsive design for all screen sizes
- **Touch Friendly**: Optimized touch targets
- **Accessibility**: WCAG compliant design

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔧 Configuration

### Environment Variables

```env
# Required
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_ANON_KEY=your_supabase_anon_key

# Optional
NEXT_PUBLIC_APP_URL=your_app_url
```

### Supabase Settings

- **Email Confirmation**: Set to "Link" mode (default)
- **Redirect URLs**: Configure for your domain
- **Email Templates**: Use magic link template

## 🧪 Testing

### Development Testing

```bash
# Run development server
npm run dev

# Run build check
npm run build

# Run linting
npm run lint
```

### User Flow Testing

1. **Sign Up Flow**:
   - Create new account
   - Check email for magic link
   - Click confirmation link
   - Access protected area

2. **Login Flow**:
   - Login with verified email & password
   - Access protected routes
   - Test logout functionality

## 🐛 Troubleshooting

### Common Issues

#### Magic Link Not Received
- Check spam folder
- Verify email template configuration
- Check Supabase email settings

#### Build Errors
- Ensure all dependencies are installed
- Check TypeScript compilation
- Verify environment variables

#### Authentication Issues
- Check Supabase project configuration
- Verify middleware setup
- Check browser console for errors

### Debug Mode

Enable debug logging in your Supabase client:

```typescript
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_ANON_KEY!,
  {
    auth: {
      debug: true
    }
  }
);
```

## 📚 API Reference

### Supabase Auth Methods

- `signUp()`: Create new user account
- `verifyOtp()`: Verify magic link token
- `signInWithPassword()`: Password-based login
- `signOut()`: Logout user

### Next.js Features

- **App Router**: Modern Next.js routing
- **Server Components**: Server-side rendering
- **Middleware**: Route protection
- **API Routes**: Magic link confirmation handling

## 🔄 Magic Link vs OTP

This template uses **Magic Link** authentication:

| Feature | Magic Link | OTP |
|---------|------------|-----|
| **User Experience** | Click email link | Enter 6-digit code |
| **Security** | Time-limited link | Time-limited code |
| **Implementation** | Simpler setup | More complex |
| **Mobile Friendly** | ✅ Yes | ✅ Yes |
| **No Password Signup** | ❌ Requires password | ✅ Passwordless option |

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Supabase](https://supabase.com/) - Backend as a service
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework

## 📞 Support

If you need help or have questions:

- **Issues**: Create a GitHub issue
- **Documentation**: Check the [Supabase docs](https://supabase.com/docs)
- **Community**: Join the [Supabase Discord](https://discord.supabase.com/)

---

**Made with ❤️ By Siddharth Vekariya

**Repository**: [https://github.com/sidvekariya510/serverless-next-supabase/tree/magic-link-flow](https://github.com/sidvekariya510/serverless-next-supabase/tree/magic-link-flow)
