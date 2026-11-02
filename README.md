# CV Application

A React app for building a CV/résumé. Fill in your personal details, education and work experience on the left, and the CV updates on the right. Built as part of [The Odin Project](https://www.theodinproject.com/lessons/node-path-react-new-cv-application) React course.

**Live demo:** https://ruby-cv-app.vercel.app/

## Features

- **Personal details**: name, email, phone and address, saved straight to the CV preview
- **Education**: add multiple entries (school, title of study, dates of study)
- **Work experience**: add multiple entries (company, position, responsibilities, start and end dates)
- **Edit entries**: click Edit on any education or work entry to load it back into its form, change it, and save it over the original
- **Live CV preview** in a two-column layout

## Project Structure

```
src/
├── components/
│   ├── form/          # Input forms for each section
│   ├── Education.jsx
│   ├── PersonalDetails.jsx
│   └── WorkExperience.jsx
├── data/              # Initial example CV data
├── hooks/
│   └── useFormData.js # Shared form state + change handling
├── styles/            # Global, layout, forms panel and CV preview CSS
├── utils/
│   └── upsertById.js  # Add-or-update an entry in a list by id
├── App.jsx            # Holds CV state and editing state
└── main.jsx
```

## What I Learned

- **Lifting state up**: all CV data lives in `App` and is passed down through props, with changes sent back up through callbacks
- **Resetting component state with `key`**: `useState` only reads its initial value on the first render, so each form is keyed by the entry being edited to make React remount it with fresh data
- **Immutable updates**: adding or replacing entries without mutating state
- **Custom hooks**: pulling shared form logic out of three components into `useFormData`

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- Deployed on [Vercel](https://vercel.com/)

## Getting Started

```bash
git clone git@github.com:RubyFalcon/CV-APP.git
cd CV-APP
npm install
npm run dev
```

## Possible Improvements

- Edit/submit toggle for the personal details section
- Delete button for entries
- Labels and a textarea for better accessibility
- Persist data with `localStorage`