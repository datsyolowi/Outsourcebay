# OutsourceBay

OutsourceBay is a modern offshore operations platform that helps businesses scale through managed remote teams, structured workflows, AI-enhanced operational systems, and scalable execution support.

The website is designed to present OutsourceBay’s services, operational process, offshore solutions, and lead-generation workflow through a clean, modern, and enterprise-focused user experience.

---

## What the Website Is For

OutsourceBay helps companies:

- Build scalable offshore teams
- Streamline business operations
- Improve workflow efficiency
- Reduce operational overhead
- Implement AI-assisted systems
- Manage customer support and back-office operations
- Scale execution with structured operational processes
- Improve operational coverage and business support workflows

The platform combines offshore staffing, accountability systems, workflow optimization, and modern operational support infrastructure.

---

## Current Website Features

### Core Features

- Modern responsive landing page
- Premium dark-themed UI
- Smooth animations and transitions
- Scroll reveal effects
- Responsive mobile experience
- Modular reusable component structure
- Enterprise-style layout and spacing system

### Business & Conversion Features

- Calendly booking integration
- Contact inquiry form
- Email inquiry delivery using Resend API
- Conversion-focused CTA sections
- Mobile sticky booking CTA
- Services showcase
- Operational workflow sections
- Testimonials and trust-building sections
- Platform/logo showcase section

### Technical Features

- API route for contact submissions
- Production deployment on Vercel
- Environment variable configuration
- Responsive layouts for desktop and mobile
- Optimized reusable sections and components

---

## How The Website Works

### Inquiry Workflow

1. User visits the OutsourceBay landing page
2. User can:
   - Submit inquiry form
   - Book a strategy/discovery call
3. Contact form sends inquiry through the backend API
4. Resend API delivers inquiry email directly to business inbox
5. Calendly integration allows direct scheduling for consultation calls

---

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Resend API
- Calendly
- Vercel

---

## Project Structure

```bash
src
│
├── app
│   ├── api
│   │   └── contact
│   │       └── route.ts
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Reveal.tsx
│   ├── ContactForm.tsx
│   ├── CalendlyPopup.tsx
│   └── MobileCTA.tsx
│
├── sections
│   ├── Hero.tsx
│   ├── Why.tsx
│   ├── Services.tsx
│   ├── Process.tsx
│   ├── Cases.tsx
│   ├── Testimonials.tsx
│   ├── ClientProof.tsx
│   ├── Stats.tsx
│   ├── Logos.tsx
│   ├── FAQ.tsx
│   ├── Pricing.tsx
│   ├── Trusted.tsx
│   └── CTA.tsx
│
└── public
    └── logos
```

---

## Environment Variables

Create a `.env.local` file:

```env
RESEND_API_KEY=your_resend_api_key
```

---

## Running The Project

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Build production version:

```bash
npm run build
```

---

## Deployment

The project is configured for deployment on Vercel.

Production deployment includes:

- Automatic GitHub deployments
- Environment variable support
- API route hosting
- Optimized Next.js production builds

---

## Future Improvements

- CRM/database integration
- Analytics and heatmaps
- Advanced lead qualification forms
- Admin dashboard
- SEO landing pages
- CMS integration
- Case study expansion
- Performance optimization
- Custom domain and branded email infrastructure
