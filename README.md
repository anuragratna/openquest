# OpenQuest Solutions Website

This is the official website for OpenQuest Solutions, built with React and Vite.

## Project Structure

- `src/components`: Reusable UI components (Header, Hero, Services, CaseStudies, Footer).
- `src/data`: Static data for the website (content.js).
- `src/assets`: Images and other static assets.
- `public`: Public assets served directly.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd consulting_website
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To build the application for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Customization

### Content

You can update the website content by modifying `src/data/content.js`. This file contains text for the hero section, services, case studies, and footer.

### Styling

Global styles are defined in `src/index.css` and `src/App.css`. Component-specific styles are located in their respective component directories (e.g., `src/components/Header.css`).

## Contact

For any inquiries, please contact us at:

- Email: contact@openquest.solutions
- Phone: +31 683540581
