# Property Listing Dashboard

**Created by: Harsh Gupta**

A modern, responsive React TypeScript application for managing and displaying property listings with advanced filtering, search capabilities, and dark mode support.

## Features

### 🏠 Property Management
- **Property Listings**: Display properties in a beautiful card layout
- **Property Details**: View comprehensive property information in a modal
- **Add Properties**: Form to add new properties with validation
- **Mock Data**: Pre-loaded with realistic property data

### 🔍 Search & Filtering
- **Real-time Search**: Search properties by name or location
- **Type Filtering**: Filter by property type (House, Apartment, Condo, Villa, Townhouse)
- **Combined Filters**: Use search and type filters together

### 🎨 User Experience
- **Dark Mode Toggle**: Switch between light and dark themes
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Modern UI**: Clean, professional interface with smooth animations
- **Google Maps Integration**: View property locations on Google Maps

### 🛠 Technical Features
- **React 18** with TypeScript for type safety
- **React Router** for navigation
- **React Context API** for state management
- **Tailwind CSS** for styling
- **Lucide React** for beautiful icons
- **Vite** for fast development and building

## Property Information Displayed

Each property card shows:
- Property name and type
- Location with map pin icon
- Price in USD format
- Description preview
- Property image
- View button to see full details

## Property Details Modal

When viewing a property, you'll see:
- Large property image
- Complete property information
- Full description
- Google Maps link (if coordinates available)
- Property type and location details

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Clone or download the project**
   ```bash
   # If you have the project files, navigate to the project directory
   cd property-listing-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` to view the application

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation and search bar
│   ├── PropertyCard.tsx # Individual property display
│   ├── PropertyFilter.tsx # Filtering controls
│   ├── PropertyForm.tsx # Add property form
│   └── PropertyModal.tsx # Property details modal
├── context/            # React Context for state management
│   └── PropertyContext.tsx
├── data/              # Mock data and API functions
│   └── mockData.ts
├── pages/             # Page components
│   └── PropertyList.tsx
├── types/             # TypeScript type definitions
│   └── index.ts
├── App.tsx            # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## Usage

### Viewing Properties
1. The main page displays all available properties
2. Use the search bar to find properties by name or location
3. Use the filter buttons to show only specific property types
4. Click "View" on any property card to see detailed information

### Adding Properties
1. Click "Add Property" in the header or main page
2. Fill out the form with property details:
   - Property name (required)
   - Property type (required)
   - Location (required)
   - Price in USD (required)
   - Description (required)
3. Click "Add Property" to save

### Dark Mode
- Click the moon/sun icon in the header to toggle dark mode
- The theme preference is maintained during your session

## Customization

### Adding New Property Types
Edit the `PropertyType` in `src/types/index.ts` and update the filter component.

### Modifying Styling
The project uses Tailwind CSS. You can customize colors, spacing, and other design tokens in `tailwind.config.js`.

### Adding More Fields
To add more property fields:
1. Update the `Property` interface in `src/types/index.ts`
2. Modify the form component in `src/components/PropertyForm.tsx`
3. Update the card and modal components to display the new fields

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **React Router** - Navigation
- **React Context API** - State management
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **Vite** - Build tool
- **ESLint** - Code linting

## Browser Support

The application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Author

**Harsh Gupta** - Creator and Developer

## License

This project is open source and available under the MIT License.
