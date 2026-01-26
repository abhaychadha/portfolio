# Free Hosting Guide – Portfolio Monorepo

This guide compares **free hosting options** for the Next.js portfolio (host app) and gives **step-by-step setup** for the recommended choice.

---

## Quick comparison

| Service | Best for | Free tier highlights | Next.js support |
|--------|----------|----------------------|------------------|
| **Vercel** | Next.js, React | 100 GB bandwidth, 100 deployments/day, serverless | Native, zero config |
| **Netlify** | Static + JAMstack | 100 GB bandwidth, 300 build min/mo | Via plugin |
| **Cloudflare Pages** | Global edge, static | **Unlimited** bandwidth, 500 builds/mo | Static / adapter |

**Recommendation:** Use **Vercel** – it’s built for Next.js, supports monorepos, and fits this project with minimal config.

---

## 1. Vercel (recommended)

### Why Vercel

- Made by the Next.js team; best integration.
- Free tier: 100 GB bandwidth, 100 builds/day, serverless.
- Git-based deploys, preview URLs, custom domains, HTTPS.
- Works with this **npm workspaces** monorepo.

### Prerequisites

- GitHub (or GitLab/Bitbucket) account.
- Portfolio repo pushed to GitHub (e.g. `https://github.com/abhaychadha/portfolio`).

### Deploy steps

1. **Sign up**
   - Go to [vercel.com](https://vercel.com) → **Sign Up** → use **GitHub**.
   - Authorize Vercel to access your repositories.

2. **Import project**
   - **Add New…** → **Project** → select **portfolio** (or your repo name).
   - Click **Import**.

3. **Configure project (monorepo)**

   Use these settings:

   | Setting | Value |
   |--------|--------|
   | **Framework Preset** | Next.js |
   | **Root Directory** | `apps/host` |
   | **Install Command** | `cd ../.. && npm install` |
   | **Build Command** | `npm run build` |
   | **Output Directory** | *(leave default)* |
   | **Node.js Version** | 18.x or 20.x |

   - **Root Directory:** Click **Edit** next to it → choose `apps/host`. This tells Vercel the Next.js app lives there.
   - **Install Command:** Install must run at **repo root** so `@portfolio/content`, `@portfolio/ui`, etc. are available. `cd ../..` from `apps/host` goes to the monorepo root, then `npm install` installs all workspaces.

4. **Deploy**
   - Click **Deploy**. Vercel will install, build, and deploy.
   - You’ll get a URL like `https://portfolio-xxx.vercel.app`.

5. **Optional**
   - **Custom domain:** Project → **Settings** → **Domains** → add your domain.
   - **Environment variables:** Add any env vars under **Settings** → **Environment Variables** if you use them later.

### If the build fails

- Confirm **Root Directory** = `apps/host` and **Install Command** = `cd ../.. && npm install`.
- Check **Build Command** is `npm run build` (the host app’s script).
- Ensure **Node.js Version** is 18 or 20.
- Inspect the build logs on Vercel for missing deps or script errors.

---

## 2. Netlify

### Setup summary

1. [Netlify](https://www.netlify.com) → **Sign up** with GitHub.
2. **Add new site** → **Import an existing project** → choose **GitHub** → select **portfolio**.
3. Configure:
   - **Base directory:** `apps/host`
   - **Build command:**  
     - Either use Netlify’s Next.js detection, or  
     - **Build command:** `cd ../.. && npm install && npm run build:host`  
     - **Publish directory:** `apps/host/.next` (Netlify’s Next.js plugin usually sets this; check their [Next.js on Netlify](https://docs.netlify.com/frameworks/next-js/overview/) docs).
4. Deploy.

Netlify’s Next.js support uses a plugin; follow their [Next.js deployment guide](https://docs.netlify.com/frameworks/next-js/) for up-to-date details.

---

## 3. Cloudflare Pages

### Setup summary

1. [Cloudflare Pages](https://pages.cloudflare.com) → **Sign up** with GitHub.
2. **Create a project** → **Connect to Git** → select **portfolio**.
3. Configure:
   - **Framework preset:** Next.js (static) or **None** if using a custom build.
   - **Build command:** e.g. `npm run build:host` (run from repo root; ensure `npm install` runs first).
   - **Build output directory:** Cloudflare’s Next.js guide defines this; often `apps/host/.vercel/output` or similar when using `@cloudflare/next-on-pages`.

Cloudflare favors **static** or **edge** Next.js. For a fully static portfolio (no API routes, no SSR), it works well. See [Deploy a Next.js site](https://developers.cloudflare.com/pages/framework-guides/nextjs/deploy-a-nextjs-site/) for the exact workflow.

---

## 4. Other options

| Service | Notes |
|--------|--------|
| **Railway** | Free tier (limits apply); good for full-stack. |
| **Render** | Free static sites + web services. |
| **GitHub Pages** | Static only. You’d need `output: 'export'` in Next.js and possibly adapt routing; not ideal for this setup. |

---

## 5. Before you deploy

1. **Git**
   - Commit and push all changes.
   - Ensure the repo is on GitHub (or your Git host).

2. **Build locally**
   - From repo root: `npm install && npm run build:host`.
   - Fix any build errors before relying on CI.

3. **Puppeteer**
   - The screenshot script uses Puppeteer and is **not** run on Vercel/Netlify. No extra config needed for deployment.

4. **Sensitive data**
   - Don’t commit secrets. Use platform **environment variables** for any API keys or config.

---

## 6. Summary

- **Best fit for this repo:** **Vercel** with **Root Directory** `apps/host` and **Install Command** `cd ../.. && npm install`.
- Use **Netlify** or **Cloudflare Pages** if you prefer them; both can host this Next.js app with the right monorepo build setup.

For more detail, see each platform’s docs (Vercel [monorepos](https://vercel.com/docs/monorepos), [Next.js](https://vercel.com/docs/frameworks/next-js); Netlify/Cloudflare links above).
