# De Taalreis - Dutch Language Tutoring Website

Professional website for Dutch language tutoring services.

## 🎯 Project Overview

This website provides:
- Modern, responsive design
- Clear service descriptions
- Transparent pricing
- Easy contact form
- Mobile-first approach
- Bilingual support (Dutch/English)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

1. **Install dependencies:**
```bash
npm install
```

2. **Run development server:**
```bash
npm run dev
```

3. **Open your browser:**
Visit [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
de-taalreis-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   └── page.tsx         # Homepage
│   ├── components/
│   │   ├── Hero.tsx         # Landing section
│   │   ├── About.tsx        # About/intro section
│   │   ├── Services.tsx     # Services offered
│   │   ├── Pricing.tsx      # Pricing information
│   │   └── Contact.tsx      # Contact form
│   └── styles/
│       └── globals.css      # Global styles with Tailwind
├── public/                  # Static assets
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── package.json            # Dependencies

```

## 🎨 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Language:** TypeScript
- **Deployment:** Vercel (recommended)

## 📝 Customization

### Update Contact Information

Edit `src/components/Contact.tsx`:
- Email address
- Phone number
- WhatsApp link
- Location/region
- Availability hours

### Update Pricing

Edit `src/components/Pricing.tsx`:
- Hourly rate
- Package discounts
- Included services

### Update Services

Edit `src/components/Services.tsx`:
- Add/remove service cards
- Update descriptions

### Update About Section

Edit `src/components/About.tsx`:
- Personal bio
- Teaching philosophy
- Key benefits

## 🌐 Domain

**Registered domain:** `de-taalreis.nl`

See `DEPLOYMENT_GUIDE.md` for step-by-step instructions on connecting your domain to Vercel.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Connect custom .nl domain
4. Deploy!

```bash
# Deploy via Vercel CLI
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Upload 'out' folder to Netlify
```

## 📧 Contact Form Setup

The contact form currently logs to console. To make it functional:

**Option 1: Email Service (Recommended)**
- Use [Formspree](https://formspree.io/)
- Use [EmailJS](https://www.emailjs.com/)

**Option 2: API Route**
- Create `/src/app/api/contact/route.ts`
- Use nodemailer or SendGrid

## 🔧 Todo

- [x] Choose and register .nl domain (✅ de-taalreis.nl)
- [ ] Deploy to Vercel
- [ ] Connect domain to Vercel
- [ ] Add real contact information
- [ ] Set up contact form backend
- [ ] Add photos/images
- [ ] Add testimonials section
- [ ] Set up Google Analytics (optional)
- [ ] Add FAQ section (optional)
- [ ] Implement booking calendar (optional)

## 📱 Features

- ✅ Fully responsive design
- ✅ Modern, clean UI
- ✅ Fast loading times
- ✅ SEO-friendly
- ✅ Accessible
- ✅ Professional appearance

## 🎯 Next Steps

1. **Development:**
   - Run `npm install`
   - Run `npm run dev`
   - Customize content

2. **Domain:**
   - Check availability
   - Register .nl domain
   - Configure DNS

3. **Deployment:**
   - Deploy to Vercel
   - Connect domain
   - Test thoroughly

4. **Launch:**
   - Update contact info
   - Test contact form
   - Share with students!

## 📄 License

This project is for personal use.

---

Built with ❤️ for teaching Dutch
