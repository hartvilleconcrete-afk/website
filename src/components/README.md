# BiddioLogo Component

A React TypeScript component for displaying the Biddio logo.

## Features

- Renders the Biddio "B" logo based on the brand's SVG design
- Optional text display ("BIDDIO") next to the logo
- Customizable sizing via className prop
- TypeScript support with full type definitions
- Accessible with aria-label and title elements

## Usage

### Basic Usage (Icon Only)

```tsx
import BiddioLogo from './components/BiddioLogo';

function App() {
  return <BiddioLogo />;
}
```

### With Text

```tsx
<BiddioLogo showText={true} />
```

### Custom Sizing

```tsx
// Small
<BiddioLogo className="w-8 h-8" />

// Large
<BiddioLogo className="w-24 h-24" />

// With text and custom sizes
<BiddioLogo 
  showText={true} 
  className="w-16 h-16" 
  textClass="text-4xl" 
/>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `className` | `string` | `"w-12 h-12"` | Tailwind CSS classes for sizing the SVG logo |
| `showText` | `boolean` | `false` | Whether to display "BIDDIO" text next to the logo |
| `textClass` | `string` | `"text-2xl"` | Tailwind CSS classes for the text size |

## Development

### Install Dependencies

```bash
npm install
```

### Run Demo

```bash
npm run dev
```

Open your browser to the URL shown (typically http://localhost:5173)

### Type Check

```bash
npm run type-check
```

### Build

```bash
npm run build
```

## Design

The logo follows the Biddio brand guidelines:
- Background: `#0a0a0a` (dark)
- Letter "B": `#f5a623` (orange/gold accent)
- Font: Arial, bold, 70px
