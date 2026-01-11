# 🧙‍♂️ MathCodeLab - Gamified Learning Portal

<div align="center">

![MathCodeLab](https://img.shields.io/badge/MathCodeLab-Gamified%20Learning-8b5cf6?style=for-the-badge)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

**Master mathematics through gamified challenges. Compete, learn, and climb the ranks!**

[Live Demo](https://mathcodelab.com) · [Documentation](#documentation) · [Report Bug](https://github.com/mathcodelab/mathcodelab/issues)

</div>

---

## ✨ Features

- 🎮 **Gamified Learning** - Earn XP, unlock achievements, and level up your math skills
- 🏆 **Chess-style Rating System** - ELO-based competitive ranking with tiers (Bronze → Grandmaster)
- 📊 **Global Leaderboards** - Compete with mathematicians worldwide
- 🎯 **Adaptive Difficulty** - Problems tailored to your skill level
- 📅 **Daily Challenges** - Fresh problems every day with bonus rewards
- 🔐 **Secure Authentication** - Google and Azure AD OAuth providers
- 🌙 **Dark Mathemagician Theme** - Beautiful, sleek dark mode UI
- ☁️ **Azure-Ready** - Optimized for Azure App Service / Container Apps deployment

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Google OAuth credentials (optional)
- Azure AD credentials (optional)

### Installation

```bash
# Clone the repository
git clone https://github.com/mathcodelab/mathcodelab.git
cd mathcodelab

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your configuration

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + Shadcn UI |
| **Database** | PostgreSQL |
| **ORM** | Prisma |
| **Authentication** | NextAuth.js |
| **Deployment** | Azure App Service / Container Apps |

## 📁 Project Structure

```
mathcodelab/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API routes
│   │   │   ├── auth/          # NextAuth endpoints
│   │   │   └── health/        # Health check endpoint
│   │   ├── auth/              # Auth pages
│   │   ├── leaderboard/       # Leaderboard page
│   │   └── page.tsx           # Homepage
│   ├── components/
│   │   ├── leaderboard/       # Leaderboard components
│   │   ├── layout/            # Layout components
│   │   ├── providers/         # Context providers
│   │   └── ui/                # Shadcn UI components
│   ├── lib/                   # Utility functions
│   └── types/                 # TypeScript types
├── prisma/
│   └── schema.prisma          # Database schema
├── .azure/                    # Azure deployment configs
├── .github/workflows/         # CI/CD pipelines
└── public/                    # Static assets
```

## 🗃️ Database Schema

### Core Models

- **User** - User profiles with roles (student, tutor, creator, admin)
- **Rating** - ELO-style rating per category
- **Problem** - Math problems with difficulty levels
- **Submission** - User problem submissions
- **Achievement** - Unlockable achievements

### Tier System

| Tier | Rating Range | Icon |
|------|-------------|------|
| Grandmaster | 2800+ | 👑 |
| Master | 2400-2799 | 🔮 |
| Diamond | 2000-2399 | 💠 |
| Platinum | 1600-1999 | 💎 |
| Gold | 1400-1599 | 🥇 |
| Silver | 1200-1399 | 🥈 |
| Bronze | < 1200 | 🥉 |

## 🔐 Authentication Setup

### Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URI: `https://your-domain.com/api/auth/callback/google`
6. Copy Client ID and Secret to `.env`

### Azure AD

1. Go to [Azure Portal](https://portal.azure.com/)
2. Navigate to Azure Active Directory → App registrations
3. Register a new application
4. Add redirect URI: `https://your-domain.com/api/auth/callback/azure-ad`
5. Create a client secret
6. Copy Client ID, Secret, and Tenant ID to `.env`

## ☁️ Azure Deployment

### Using GitHub Actions

1. Create Azure resources using the Bicep template:
   ```bash
   az deployment group create \
     --resource-group <your-rg> \
     --template-file .azure/main.bicep \
     --parameters environment=prod
   ```

2. Add secrets to GitHub repository:
   - `AZURE_CREDENTIALS` - Service principal credentials
   - `AZURE_CONTAINER_REGISTRY` - ACR name
   - `ACR_USERNAME` / `ACR_PASSWORD` - ACR credentials
   - `AZURE_APP_NAME` - App Service name
   - `NEXTAUTH_SECRET` - NextAuth secret

3. Push to main branch to trigger deployment

### Manual Docker Deployment

```bash
# Build the image
docker build -t mathcodelab .

# Run locally
docker run -p 3000:3000 --env-file .env mathcodelab

# Push to Azure Container Registry
az acr login --name <acr-name>
docker tag mathcodelab <acr-name>.azurecr.io/mathcodelab:latest
docker push <acr-name>.azurecr.io/mathcodelab:latest
```

## 🎨 Theme Customization

The Mathemagician theme can be customized in `src/app/globals.css`. Key CSS variables:

```css
:root {
  --background: 250 30% 5%;      /* Deep purple-black */
  --foreground: 250 20% 95%;     /* Light purple-white */
  --primary: 270 60% 60%;        /* Violet */
  --accent: 280 70% 50%;         /* Purple */
  /* ... */
}
```

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `DATABASE_URL` | PostgreSQL connection string | ✅ |
| `NEXTAUTH_URL` | Application URL | ✅ |
| `NEXTAUTH_SECRET` | NextAuth encryption key | ✅ |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID | ❌ |
| `GOOGLE_CLIENT_SECRET` | Google OAuth secret | ❌ |
| `AZURE_AD_CLIENT_ID` | Azure AD client ID | ❌ |
| `AZURE_AD_CLIENT_SECRET` | Azure AD secret | ❌ |
| `AZURE_AD_TENANT_ID` | Azure AD tenant ID | ❌ |

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) first.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with 💜 for Mathemagicians everywhere**

[⬆ Back to Top](#-mathcodelab---gamified-learning-portal)

</div>
