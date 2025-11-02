# Complete Setup Guide - De Taalreis Website

## 📋 Complete Checklist

### Phase 1: Local Development ✅

- [x] Create project structure
- [x] Set up Next.js with TypeScript
- [x] Configure Tailwind CSS
- [x] Create all components (Hero, About, Services, Pricing, Contact)
- [x] Add responsive design
- [ ] Test locally

### Phase 2: Customization

- [ ] **Update Contact Information** in `src/components/Contact.tsx`:
  - Replace `contact@detaalreis.nl` with real email
  - Replace `+31 6 1234 5678` with real phone
  - Update WhatsApp link
  - Update location/region
  - Update availability hours

- [ ] **Update Pricing** in `src/components/Pricing.tsx`:
  - Confirm hourly rate (currently €35)
  - Adjust package discounts if needed
  - Update included services

- [ ] **Personalize About Section** in `src/components/About.tsx`:
  - Add personal bio/story
  - Update teaching philosophy
  - Add qualifications/experience

- [ ] **Add Photos/Images**:
  - Add logo to `public/logo.png`
  - Add hero image to `public/hero.jpg`
  - Add profile photo to `public/profile.jpg`
  - Update image references in components

### Phase 3: Domain & Hosting

- [ ] **Check Domain Availability:**
  1. Visit TransIP.nl or Mijndomein.nl
  2. Check: `detaalreis.nl`
  3. If taken, try: `de-taalreis.nl`
  4. See `DOMAIN_OPTIONS.md` for more options

- [ ] **Register Domain:**
  - Registrar: _____________
  - Domain: _____________
  - Cost: €_____ /year
  - Renewal date: _____________

- [ ] **Set Up Vercel Account:**
  1. Visit: https://vercel.com/signup
  2. Sign up with GitHub
  3. It's FREE for personal projects

### Phase 4: Deployment

- [ ] **Push to GitHub:**
  ```bash
  # If you haven't already
  git remote add origin https://github.com/YOUR_USERNAME/de-taalreis-website.git
  git push -u origin main
  ```

- [ ] **Deploy to Vercel:**
  1. Go to https://vercel.com/new
  2. Import your GitHub repository
  3. Click "Deploy"
  4. Wait ~2 minutes

- [ ] **Connect Custom Domain:**
  1. In Vercel dashboard → Settings → Domains
  2. Add your .nl domain
  3. Copy the DNS settings Vercel provides
  4. Add DNS records to your domain registrar
  5. Wait 24-48 hours for DNS propagation

### Phase 5: Contact Form Setup

Choose ONE option:

**Option A: Formspree (Easiest)**
- [ ] Visit: https://formspree.io/
- [ ] Create free account
- [ ] Get form endpoint
- [ ] Update `src/components/Contact.tsx` form action

**Option B: EmailJS**
- [ ] Visit: https://www.emailjs.com/
- [ ] Create account
- [ ] Set up email service
- [ ] Add EmailJS code to Contact component

**Option C: Custom API Route**
- [ ] Create `/src/app/api/contact/route.ts`
- [ ] Set up email service (SendGrid, etc.)
- [ ] Configure environment variables

### Phase 6: Testing

- [ ] Test on desktop (Chrome, Firefox, Safari)
- [ ] Test on mobile (iPhone, Android)
- [ ] Test contact form
- [ ] Test all navigation links
- [ ] Check page speed (PageSpeed Insights)
- [ ] Verify SEO metadata

### Phase 7: Launch

- [ ] Share website link with friends/family for feedback
- [ ] Create business cards with website URL
- [ ] Add website to social media profiles
- [ ] Create Google My Business listing (optional)
- [ ] Set up Google Analytics (optional)

## 🚀 Quick Start Commands

```bash
# Install dependencies
cd /Users/abhie/de-taalreis-website
npm install

# Run development server
npm run dev
# Open http://localhost:3000

# Build for production
npm run build

# Test production build locally
npm start
```

## 📝 Important Files to Customize

1. **`src/components/Contact.tsx`** - Contact information
2. **`src/components/Pricing.tsx`** - Rates and packages
3. **`src/components/About.tsx`** - Personal bio
4. **`src/app/layout.tsx`** - SEO metadata
5. **`next.config.js`** - Site configuration

## 🆘 Troubleshooting

### "npm: command not found"
Install Node.js from https://nodejs.org/

### Port 3000 already in use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use a different port
npm run dev -- -p 3001
```

### Build errors
```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run dev
```

## 📞 Need Help?

- Next.js docs: https://nextjs.org/docs
- Tailwind docs: https://tailwindcss.com/docs
- Vercel docs: https://vercel.com/docs
- TypeScript docs: https://www.typescriptlang.org/docs/

## 🎉 You're Ready!

The website is fully built and ready to customize. Just:
1. Install dependencies (`npm install`)
2. Run locally (`npm run dev`)
3. Customize the content
4. Deploy to Vercel
5. Connect your domain
6. Launch! 🚀

