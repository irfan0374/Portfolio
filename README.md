# Portfolio

Personal portfolio of Muhammed Irfan UV, Full Stack Developer. Next.js (App Router), TypeScript, Tailwind CSS v4, GSAP + Lenis for motion, Resend for the contact form.

## Setup

```bash
pnpm install
cp .env.example .env.local   # add RESEND_API_KEY to enable the contact form
pnpm dev                     # http://localhost:3000
```

- Content (text, projects, jobs, skills): `src/data/site.ts`
- Images: `public/images/`; CV download: `public/Muhammed_Irfan_UV_CV.docx`
- Theme colours (dark + light): `src/app/globals.css`
- Animations: `src/components/Animations.tsx`

## Deploy

Vercel, framework preset **Next.js**. Set `RESEND_API_KEY` and `CONTACT_TO_EMAIL` in the project's environment variables.
