# CSS Structure

This directory contains the componentized CSS structure for the weather app.

## File Organization

### Base Styles
- `base.css` - Global styles, CSS variables, and layout styles that apply to the entire app

### Component-Specific Styles
- `WeatherDisplay.css` - Styles for the main weather display component
- `SearchBar.css` - Styles for the search input and button
- `PopularCities.css` - Styles for the popular cities buttons
- `WeatherDetails.css` - Styles for the weather details panel
- `LoadingSpinner.css` - Styles for the loading state
- `ErrorMessage.css` - Styles for error messages

### Utility Files
- `index.css` - Imports all component styles (for easy importing if needed)

## CSS Variables

All CSS variables are defined in `base.css` and include:
- Glassmorphism theme colors
- Text colors
- Accent colors
- Border styles
- Shadow effects
- Blur effects
- Gradient definitions

## Usage

Each component imports its own CSS file:
```jsx
import '../styles/ComponentName.css'
```

The main App component imports the base styles:
```jsx
import './styles/base.css'
```

## Benefits

1. **Modularity** - Each component has its own styles
2. **Maintainability** - Easier to find and modify component-specific styles
3. **Reusability** - Components can be moved or reused with their styles
4. **Performance** - Only load styles for components that are used
5. **Organization** - Clear separation of concerns

## Responsive Design

Each component includes its own responsive design rules using media queries:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (480px - 767px)
- Small mobile (< 480px)
