# 🔐 Next.js + Supabase OTP Authentication Template

A modern, production-ready authentication system built with Next.js 15 and Supabase, featuring OTP-based email verification instead of traditional confirmation links.

## ✨ Features

- **🔐 OTP-Based Authentication**: 6-digit numeric codes sent via email
- **📧 Custom Email Templates**: Beautiful, branded email templates
- **🔄 Seamless User Flow**: Sign up → OTP verification → Protected access
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
git clone https://github.com/sidvekariya510/serverless-next-supabase/tree/otp-flow
cd next-supabase-otp-template
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
3. Replace the default template with this OTP template:

```html
<h2>Verify your email</h2>

<p>Your verification code is:</p>

<div style="
  background-color: #f3f4f6;
  border: 2px solid #e5e7eb;
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  font-family: monospace;
  font-size: 32px;
  font-weight: bold;
  letter-spacing: 8px;
  color: #1f2937;
  margin: 20px 0;
">
  {{ .Token }}
</div>

<p style="color: #6b7280; font-size: 14px;">
  This code will expire in 10 minutes. If you didn't request this code, please ignore this email.
</p>

<p style="color: #6b7280; font-size: 14px;">
  Enter this code in your app to complete the verification process.
</p>
```


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
│   │   ├── verify-otp/          # OTP verification page
│   │   ├── forgot-password/     # Password reset
│   │   └── update-password/     # Password update
│   ├── protected/                # Protected routes
│   └── layout.tsx               # Root layout
├── components/                   # Reusable components
│   ├── auth/                    # Authentication components
│   ├── ui/                      # UI components (shadcn/ui)
│   └── verify-otp-form.tsx     # OTP verification form
├── lib/                         # Utility libraries
│   └── supabase/               # Supabase client configuration
├── middleware.ts                # Authentication middleware
└── tailwind.config.ts          # Tailwind CSS configuration
```

## 🔐 Authentication Flow

### 1. User Sign Up
```
User fills sign-up form → OTP sent to email → Redirect to verification page
```

### 2. Email Verification
```
User receives 6-digit OTP → Enters code → Account verified → Access granted
```

### 3. Login & Protection
```
User logs in → Middleware validates → Access to protected routes
```

## 📧 Email Templates

### OTP Email Template
The template uses `{{ .Token }}` variable which Supabase automatically replaces with a 6-digit OTP code.

### Customization
- **Colors**: Modify the CSS in the template
- **Branding**: Add your logo and company information
- **Language**: Translate the text to your preferred language

## 🛡️ Security Features

- **Route Protection**: Middleware-based authentication guards
- **Session Management**: Secure cookie handling with Supabase
- **OTP Expiration**: Codes expire after 10 minutes
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

- **Email Confirmation**: Set to "OTP" mode
- **Redirect URLs**: Configure for your domain
- **Email Templates**: Use the provided OTP template

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
   - Check email for OTP
   - Verify with OTP code
   - Access protected area

2. **Login Flow**:
   - Login with verified account
   - Access protected routes
   - Test logout functionality

## 🐛 Troubleshooting

### Common Issues

#### OTP Not Received
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

- `signUp()`: Send OTP to email
- `verifyOtp()`: Verify OTP code
- `signInWithPassword()`: Password-based login
- `signOut()`: Logout user

### Next.js Features

- **App Router**: Modern Next.js routing
- **Server Components**: Server-side rendering
- **Middleware**: Route protection
- **Suspense**: Loading boundaries

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

**Made with ❤️ By Siddharth Vekariya**
