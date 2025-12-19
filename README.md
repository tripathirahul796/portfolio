# Personal Portfolio Website

A modern, responsive personal portfolio website built with React, TailwindCSS, and Framer Motion.

## Features

- **Modern Design**: Beautiful gradient backgrounds and smooth animations
- **Fully Responsive**: Works seamlessly on all devices
- **Sections Included**:
  - Hero section with social links
  - About section with highlights
  - Work Experience timeline
  - Skills with progress bars
  - Contact form
  - Resume download functionality
- **Smooth Animations**: Powered by Framer Motion
- **Easy Navigation**: Sticky navbar with smooth scrolling
- **Resume Download**: Attach your PDF resume

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v14.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download here](https://git-scm.com/)

To verify installations, run:

```bash
node --version
npm --version
git --version
```

### Installation Steps

#### 1. Clone the Repository

First, clone this repository to your local machine:

```bash
git clone https://github.com/yourusername/personal-portfolio.git
```

Or if using SSH:

```bash
git clone git@github.com:yourusername/personal-portfolio.git
```

#### 2. Navigate to Project Directory

```bash
cd personal-portfolio
```

#### 3. Install Dependencies

Install all required npm packages:

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

This will install:
- React and React DOM
- Vite (build tool)
- TailwindCSS (styling)
- Framer Motion (animations)
- Lucide React (icons)
- All other dependencies

#### 4. Start Development Server

Run the development server:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The application will start on `http://localhost:5173`

You should see output like:
```
VITE v4.x.x  ready in xxx ms

➜  Local:   http://localhost:5173/
➜  Network: use --host to expose
```

#### 5. Open in Browser

Open your browser and navigate to:
```
http://localhost:5173
```

The portfolio should now be running locally! Any changes you make to the code will automatically reload in the browser.

### Build for Production

To create an optimized production build:

```bash
npm run build
```

This will generate a `dist` folder with optimized static files.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

This will serve the production build at `http://localhost:4173`

### Troubleshooting

**Port already in use:**
```bash
# Kill the process using port 5173
# Windows:
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Mac/Linux:
lsof -ti:5173 | xargs kill -9
```

**Module not found errors:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**TailwindCSS not working:**
```bash
# Ensure PostCSS and Tailwind are properly installed
npm install -D tailwindcss postcss autoprefixer
```

## Customization

### 1. Personal Information

Update the following files with your information:

- `src/components/Hero.jsx` - Your name, title, and description
- `src/components/About.jsx` - About section content
- `src/components/Experience.jsx` - Work experience details
- `src/components/Skills.jsx` - Your skills and proficiency levels
- `src/components/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Footer details

### 2. Resume PDF

Replace `public/Rahul_SDE.pdf` with your actual resume PDF file. The download button in the navbar will automatically link to it.

### 3. Social Links

Update social media links in:
- `src/components/Hero.jsx`
- `src/components/Footer.jsx`

### 4. Colors

Customize the color scheme in `tailwind.config.js` by modifying the primary color palette.

### 5. Contact Form

The contact form is wired to support sending messages via **Formspree** (no backend required) or you can integrate with a server-side email provider if preferred.

Quick Formspree setup (recommended for now):

1. Create a free account at https://formspree.io and create a new form — note the form endpoint ID (e.g. `https://formspree.io/f/xyz123`).
2. Add the endpoint to your Vite environment: create a file named `.env.local` in the project root with:

```bash
VITE_FORMSPREE_ENDPOINT="https://formspree.io/f/your_form_id"
```

3. Restart the dev server (`npm run dev`) and submit the contact form — it will POST to Formspree and deliver messages to your registered email.

Troubleshooting if you see "form not found":
- Make sure your `VITE_FORMSPREE_ENDPOINT` contains the correct Formspree form URL (e.g. `https://formspree.io/f/xyz123`).
- Create the form in Formspree dashboard and verify the form ID is active.
- Confirm the `.env.local` file is in the project root and the dev server was **restarted** after adding the env var.
- Inspect the network tab in DevTools to see the response body and status code (the form returns helpful error messages in JSON).
- You can test with curl to check the endpoint directly:

```bash
curl -i -X POST https://formspree.io/f/your_form_id -H "Accept: application/json" -H "Content-Type: application/json" -d '{"name":"Test","email":"you@example.com","subject":"Test","message":"hello"}'
```
- If the endpoint returns 404 or "form not found", double-check the form ID and make sure you're using the `https://formspree.io/f/{id}` path (not the older `/forms/{id}` path).

Notes and production considerations:
- For production-grade security and features (spam control, logging, retries), consider a serverless endpoint + SendGrid/AWS SES as described earlier.
- Add CAPTCHA/reCAPTCHA and server-side validation to reduce spam for public sites.

## Project Structure

```
personal-portfolio/
├── public/
│   └── Rahul_SDE.pdf          # Your resume PDF
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Hero section
│   │   ├── About.jsx       # About section
│   │   ├── Experience.jsx  # Work experience
│   │   ├── Skills.jsx      # Skills section
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
```

---

## Deploying to Render with Docker (recommended)
This project includes a Dockerfile and nginx config to build and serve the Vite app as a static SPA. Render can build and run this container directly.

1. Create a new **Web Service** on Render and connect your Git repository.
2. Set the **Environment** to "Docker" so Render runs the project's `Dockerfile` during deploy.
3. Ensure build and run settings (defaults are usually fine). The Dockerfile builds the app and serves it with nginx on port 80.
4. Optional: add build environment variables in Render (for example, `VITE_FORMSPREE_ENDPOINT`), then redeploy.

Notes and tips
- The Dockerfile is multi-stage: it installs dependencies and runs `npm run build` in a Node builder stage, and then copies `dist` into an nginx image for production serving.
- An `nginx.conf` is included to enable SPA routing (fallback to `index.html`).
- You can also deploy as a static site using Render's Static Sites if you prefer not to use Docker: run `npm run build` locally and upload the `dist` output, or let Render build before deploying.

If you'd like I can also:
- Add a `render.yaml` to automate the Render service creation, or
- Configure a CI step / GitHub Action to build and push the image to a container registry before deploying.

├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
└── package.json            # Dependencies
```

## Deployment

Your portfolio can be deployed to various hosting platforms. Here are detailed instructions for the most popular options:

### Option 1: Deploy to Vercel (Recommended)

Vercel is the easiest and fastest way to deploy React applications.

#### Method A: Deploy via Vercel Dashboard (No CLI needed)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Go to [Vercel](https://vercel.com)**
   - Sign up/Login with your GitHub account

3. **Import Project**
   - Click "Add New" → "Project"
   - Select your `personal-portfolio` repository
   - Vercel will auto-detect it's a Vite project

4. **Configure Build Settings** (Usually auto-detected)
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. **Click "Deploy"**
   - Your site will be live in ~1 minute
   - You'll get a URL like: `https://your-portfolio.vercel.app`

6. **Custom Domain (Optional)**
   - Go to Project Settings → Domains
   - Add your custom domain

#### Method B: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod
```

---

### Option 2: Deploy to Netlify

Netlify offers continuous deployment and is great for static sites.

#### Method A: Deploy via Netlify Dashboard

1. **Build your project locally**
   ```bash
   npm run build
   ```

2. **Go to [Netlify](https://www.netlify.com)**
   - Sign up/Login

3. **Drag & Drop Deployment**
   - Go to "Sites"
   - Drag and drop your `dist` folder onto the deploy area
   - Your site will be live instantly

4. **Get your URL**
   - You'll receive a URL like: `https://random-name.netlify.app`
   - Can customize in Site Settings

#### Method B: Deploy via Git (Continuous Deployment)

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect Repository**
   - In Netlify, click "Add new site" → "Import an existing project"
   - Choose GitHub and select your repository

3. **Configure Build Settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click "Deploy site"

4. **Automatic Deployments**
   - Every push to `main` branch will auto-deploy

#### Method C: Deploy via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize and deploy
netlify init
netlify deploy --prod
```

---

### Option 3: Deploy to GitHub Pages

Host your portfolio directly on GitHub for free.

#### Step 1: Install gh-pages package

```bash
npm install --save-dev gh-pages
```

#### Step 2: Update package.json

Add these scripts and homepage field:

```json
{
  "homepage": "https://yourusername.github.io/personal-portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

#### Step 3: Update vite.config.js

Add base path:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/personal-portfolio/'
})
```

#### Step 4: Deploy

```bash
# Deploy to GitHub Pages
npm run deploy
```

#### Step 5: Enable GitHub Pages

1. Go to your repository on GitHub
2. Settings → Pages
3. Source: Select `gh-pages` branch
4. Save

Your site will be live at: `https://yourusername.github.io/personal-portfolio`

---

### Option 4: Deploy to Other Platforms

#### **Render**
1. Connect your GitHub repository
2. Build Command: `npm run build`
3. Publish Directory: `dist`

#### **Railway**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

#### **Firebase Hosting**
```bash
# Install Firebase CLI
npm install -g firebase-tools

# Login and initialize
firebase login
firebase init hosting

# Deploy
npm run build
firebase deploy
```

---

### Post-Deployment Checklist

After deploying, verify:

- ✅ All pages load correctly
- ✅ Images and assets are visible
- ✅ Resume PDF downloads properly
- ✅ Contact form works (if integrated)
- ✅ Social media links work
- ✅ Mobile responsiveness
- ✅ Custom domain configured (if applicable)

### Environment Variables

If you add environment variables (API keys, etc.), configure them in your hosting platform:

- **Vercel**: Project Settings → Environment Variables
- **Netlify**: Site Settings → Environment Variables
- **GitHub Pages**: Use GitHub Secrets for build-time variables

---

## License

MIT License - feel free to use this template for your own portfolio!
