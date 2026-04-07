# GitHub Setup Guide

## ✅ Repository Status

This guide is for pushing and maintaining the current **workspace monorepo** on GitHub.

Current architecture includes:
- `apps/host` (Next.js host shell)
- `apps/remote-about`, `apps/remote-projects` (Module Federation remotes)
- shared packages under `packages/*`:
  - `@portfolio/ui` (shared components + typography + button + pill + line)
  - `@portfolio/content` (content config + centralized asset mapping)
  - `@portfolio/feature-flags` (app/component toggles)
  - `@portfolio/types`, `@portfolio/utils`

---

## 📤 Push to GitHub

### Option 1: Create Repository via GitHub Website (Recommended)

1. **Go to GitHub**: https://github.com/new

2. **Create a new repository**:
   - Repository name: `portfolio` (or your preferred name)
   - Description: `Modern portfolio application with micro-frontend architecture, theme switching, and content management`
   - Visibility: Choose Public or Private
   - ⚠️ **DO NOT** initialize with README, .gitignore, or license (we already have these)

3. **After creating the repository**, GitHub will show you commands. Use these instead:

```bash
# Add the remote (replace YOUR_USERNAME with your GitHub username)
cd /Users/a0c14ys/Documents/Portfolio
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Rename branch to main (if not already)
git branch -M main

# Push to GitHub
git push -u origin main
```

---

### Option 2: Create Repository via GitHub CLI

If you have GitHub CLI installed:

```bash
# Install GitHub CLI if needed: brew install gh

# Login to GitHub
gh auth login

# Create repository and push
cd /Users/a0c14ys/Documents/Portfolio
gh repo create portfolio --public --source=. --remote=origin --push
```

---

## 🔐 Authentication

You may need to authenticate. GitHub no longer accepts passwords for HTTPS, so use one of these:

### Option A: Personal Access Token (HTTPS)

1. Create a token: https://github.com/settings/tokens
2. Select scopes: `repo` (full control)
3. Copy the token
4. When prompted for password, paste the token

### Option B: SSH (Recommended)

1. **Generate SSH key** (if you don't have one):
```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519
```

2. **Add SSH key to GitHub**:
   - Copy your public key: `cat ~/.ssh/id_ed25519.pub`
   - Go to: https://github.com/settings/keys
   - Click "New SSH key"
   - Paste and save

3. **Use SSH URL** instead:
```bash
git remote set-url origin git@github.com:YOUR_USERNAME/portfolio.git
git push -u origin main
```

---

## 📋 Quick Commands Summary

```bash
# Navigate to project
cd /Users/a0c14ys/Documents/Portfolio

# Check current status
git status

# View commit history
git log --oneline

# Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Or use SSH
git remote add origin git@github.com:YOUR_USERNAME/portfolio.git

# Push to GitHub
git push -u origin main
```

---

## 🚀 After Pushing

Once pushed, your repository will be available at:
`https://github.com/YOUR_USERNAME/portfolio`

### Recommended Next Steps:

1. **Update README** if needed
2. **Add topics/tags** on GitHub for discoverability:
   - `portfolio`
   - `nextjs`
   - `react`
   - `monorepo`
   - `micro-frontend`
   - `module-federation`
   - `typescript`
   - `tailwindcss`

3. **Set up GitHub Pages** (if you want to host):
   - Go to Settings → Pages
   - Select source branch: `main`
   - Select folder: `/docs` or root

4. **Enable GitHub Actions** for CI/CD (optional):
   - Create `.github/workflows/ci.yml`
   - Add tests and build workflows

---

## 📁 What's Included

Your repository includes:

### Applications:
- ✅ `apps/host` - Main Next.js application
- ✅ `apps/remote-about` - About micro-frontend
- ✅ `apps/remote-projects` - Projects micro-frontend

### Packages:
- ✅ `packages/ui` - Shared UI primitives/components (typography, button, pill, line)
- ✅ `packages/content` - Centralized content configuration and asset registry
- ✅ `packages/feature-flags` - App + component feature flags
- ✅ `packages/types` - Shared TypeScript types
- ✅ `packages/utils` - Shared utilities

### Documentation:
- ✅ Comprehensive README files
- ✅ Architecture documentation
- ✅ Setup and deployment guides

### Configuration:
- ✅ npm workspace monorepo (`apps/*`, `packages/*`)
- ✅ Next.js host transpilation for workspace packages
- ✅ TypeScript, ESLint, Jest setup
- ✅ Theme and feature-flag provider wiring in host
- ✅ Centralized content + static asset ownership in `@portfolio/content`

---

## 🔒 Security Notes

The `.gitignore` file is configured to exclude:
- ✅ `node_modules/`
- ✅ `.env` files
- ✅ Build artifacts
- ✅ IDE files
- ✅ Log files

**Make sure** no sensitive data is committed:
- API keys
- Passwords
- Private tokens
- Database credentials

---

## ✅ Verification

After pushing, verify everything is correct:

1. **Check repository on GitHub** - All files should be visible
2. **Clone in a new location** to test:
```bash
cd /tmp
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio
npm install
npm run dev:host
```

---

**Ready to push?** Follow Option 1 or Option 2 above! 🚀
