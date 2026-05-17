# Outpro.India - Corporate Digital Presence Platform

## 1. Technical Documentation

### Architecture Overview
The platform is built using a modern, decoupled architecture centered around **Next.js 16**. It utilizes React Server Components (RSC) to render static content quickly and client components for interactive elements. This hybrid approach ensures the site meets the high performance metrics required (< 2.5s load time).

### Tech Stack
* **Front-End Framework:** Next.js (React.js framework)
* **Language:** TypeScript for type safety and better developer experience.
* **Styling:** Custom Vanilla CSS with CSS Variables to enforce brand consistency and dark mode aesthetics.
* **Back-End API:** Next.js Route Handlers (`/api/*`) running on Node.js.
* **Integrations:** `@next/third-parties/google` for GA4 and Google Search Console tracking.

### Database Schema (Proposed)
Currently, the `/api/contact` route simulates form submissions. When connecting to a database (e.g., PostgreSQL or MongoDB), the schema for `Contacts` will look like this:
```json
{
  "id": "UUID",
  "name": "String",
  "email": "String",
  "company": "String",
  "message": "Text",
  "createdAt": "Timestamp"
}
```

---

## 2. User Manual

### Managing Pages and Content
This application is organized using the Next.js **App Router**. 
* **Editing Home Page:** Navigate to `src/app/page.tsx` and modify the text within the HTML tags.
* **Editing Sub-Pages:** To change content on the Services or Portfolio pages, edit `src/app/services/page.tsx` and `src/app/portfolio/page.tsx` respectively. The data is currently stored in arrays at the top of these files and mapped to the UI.
* **Adding New Pages:** To add a new page (e.g., `/careers`), simply create a new folder `src/app/careers/` and add a `page.tsx` file inside it. Next.js will automatically route it.

### Managing Forms
The Contact form is located at `src/app/contact/page.tsx`. When a user submits this form, it sends a `POST` request to `src/app/api/contact/route.ts`. To integrate this with HubSpot/Zoho CRM or an email service provider, modify the API route to forward the JSON payload to the respective API.

---

## 3. Maintenance Plan

### Security Updates
* Run `npm audit` monthly to identify and resolve vulnerabilities in dependencies.
* Run `npm update` to keep Next.js and React versions current. Always test in a staging environment before pushing updates to production.

### Bug Fixes and Monitoring
* Since Google Analytics 4 is integrated, monitor the dashboard for high bounce rates on specific pages, which may indicate UI/UX bugs.
* Server-side errors in the `/api/contact` route should be logged using a logging service (like Sentry or Datadog) to ensure no leads are lost.

### Backups
* **Codebase:** The Git repository serves as the primary backup of the source code. Push commits regularly.
* **Database (Future Phase):** Implement automated daily snapshots of the database through your cloud provider (e.g., AWS RDS or MongoDB Atlas).

---

## Deployment Instructions
To deploy to Vercel (Recommended for Next.js):
1. Push this repository to GitHub/GitLab.
2. Log into Vercel and import the repository.
3. Configure domain mapping and let Vercel handle SSL automatically.
