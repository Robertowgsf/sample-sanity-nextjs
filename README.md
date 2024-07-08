# Sample Sanity
## Dependencies
- Node 20

## Getting Started
1. Create a sanity project https://www.sanity.io/manage?new-project
2. Inside sanity studio, go to API tab and create a token with developer permission
3. Create an .env.local file with the following variables:
    - SANITY_API_READ_TOKEN="example" (The token you just created)
    - NEXT_PUBLIC_SANITY_PROJECT_ID="example" (Can be found in sanity studio)
    - NEXT_PUBLIC_SANITY_DATASET="production"
4. Import sample dataset ```npx sanity dataset import production.tar.gz production ```
5. Install the dependencies ```npm install```
6. Run the local development server ```npm run dev```
7. Open http://localhost:3333
8. Open http://localhost:3333/studio

## Projet Structure
    .
    ├── app                  # Application routes and pages (https://nextjs.org/docs/app)
    ├── components           # React components
    ├── public               # Public assets
    ├── sanity               # Sanity related configuration (https://www.sanity.io/docs)
    └── styles               # SCSS styles
