# UNSEEN Website Styling Guide

## Overview
This document outlines the typography, colors, spacing, and design patterns used throughout the UNSEEN website. Use this guide to maintain consistency when creating new pages or components.

## Typography

### Font Families
- **Primary Sans**: `Inter` (weights: 400, 500, 600, 700)
- **Brand Font**: `Figtree` (weights: 400, 500, 600, 700, 800, 900)

### Font Stack
```css
font-family: 'Inter', 'system-ui', 'sans-serif'; /* Primary */
font-family: 'Figtree', 'sans-serif'; /* Brand */
```

### Typography Scale

#### Headings
- **Hero Headlines**: `text-5xl md:text-9xl` (mobile: 3rem, desktop: 8rem)
- **Section Titles**: `text-6xl md:text-7xl lg:text-9xl` (mobile: 3.75rem, desktop: 8rem)
- **Large Headings**: `text-3xl md:text-5xl lg:text-7xl` (mobile: 1.875rem, desktop: 4.5rem)
- **Medium Headings**: `text-2xl md:text-4xl lg:text-5xl` (mobile: 1.5rem, desktop: 3rem)
- **Small Headings**: `text-xl md:text-2xl` (mobile: 1.25rem, desktop: 1.5rem)

#### Body Text
- **Large Body**: `text-lg md:text-xl lg:text-2xl` (mobile: 1.125rem, desktop: 1.5rem)
- **Standard Body**: `text-base md:text-lg lg:text-xl` (mobile: 1rem, desktop: 1.125rem)
- **Small Body**: `text-sm md:text-base lg:text-lg` (mobile: 0.875rem, desktop: 1rem)
- **Caption**: `text-xs md:text-sm` (mobile: 0.75rem, desktop: 0.875rem)

#### Font Weights
- **Light**: `font-light` (300)
- **Normal**: `font-normal` (400)
- **Medium**: `font-medium` (500)
- **Semibold**: `font-semibold` (600)
- **Bold**: `font-bold` (700)
- **Extra Bold**: `font-extrabold` (800)
- **Black**: `font-black` (900)

## Colors

### Monochrome Color Palette
- **Pure Black**: `#000000` (`black`)
- **Near Black**: `#111111` (`gray-950`)
- **Very Dark Gray**: `#1F2937` (`gray-900`)
- **Dark Gray**: `#374151` (`gray-800`)
- **Medium Dark Gray**: `#4B5563` (`gray-700`)
- **Medium Gray**: `#6B7280` (`gray-600`)
- **Light Gray**: `#9CA3AF` (`gray-400`)
- **Very Light Gray**: `#D1D5DB` (`gray-300`)
- **Lightest Gray**: `#F3F4F6` (`gray-100`)
- **Pure White**: `#FFFFFF` (`white`)

### Text Colors
- **Primary Text**: `text-gray-900` (#111827)
- **Secondary Text**: `text-gray-600` (#4B5563)
- **Muted Text**: `text-gray-500` (#6B7280)
- **Light Text**: `text-gray-400` (#9CA3AF)

### Background Colors
- **Primary Background**: `bg-white` (#FFFFFF)
- **Secondary Background**: `bg-gray-50` (#F9FAFB)
- **Dark Background**: `bg-black` (#000000)

### Glassmorphism Colors
- **Glass Border**: `rgba(255, 255, 255, 0.25)` (`glass-border`)
- **Glass Background**: `rgba(255, 255, 255, 0.15)` (`glass-bg`)
- **Glass Background Strong**: `rgba(255, 255, 255, 0.25)` (`glass-bg-strong`)

### Overlay Colors
- **Light Overlay**: `bg-black/10` (10% black)
- **Medium Overlay**: `bg-black/20` (20% black)
- **Dark Overlay**: `bg-black/40` (40% black)
- **Very Dark Overlay**: `bg-black/60` (60% black)
- **Extreme Dark Overlay**: `bg-black/70` (70% black)
- **Maximum Dark Overlay**: `bg-black/80` (80% black)

### Accent Colors
- **Green Accent**: `text-green-400` (#4ADE80)
- **Blue Accent**: `text-blue-400` (#60A5FA)
- **Yellow Accent**: `text-yellow-400` (#FACC15)
- **Purple Accent**: `text-purple-400` (#A78BFA)
- **Orange Accent**: `text-orange-400` (#FB923C)
- **Red Accent**: `text-red-400` (#F87171)

## Spacing

### Section Spacing
- **Small Section**: `py-8 md:py-16` (mobile: 2rem, desktop: 4rem)
- **Medium Section**: `py-12 md:py-32` (mobile: 3rem, desktop: 8rem)
- **Large Section**: `py-16 md:py-24` (mobile: 4rem, desktop: 6rem)

### Container Spacing
- **Standard Container**: `px-4 md:px-8` (mobile: 1rem, desktop: 2rem)
- **Wide Container**: `px-4 md:px-8 lg:px-16` (mobile: 1rem, desktop: 4rem)
- **Margins**: `mx-0 md:mx-20` (mobile: 0, desktop: 5rem)

### Element Spacing
- **Small Gap**: `gap-2` (0.5rem)
- **Medium Gap**: `gap-4` (1rem)
- **Large Gap**: `gap-6` (1.5rem)
- **Extra Large Gap**: `gap-8` (2rem)
- **Vertical Spacing**: `space-y-3`, `space-y-4`, `space-y-6`, `space-y-8`

## Layout Patterns

### Grid Systems
- **2-Column Grid**: `grid grid-cols-1 md:grid-cols-2`
- **3-Column Grid**: `grid grid-cols-3`
- **4-Column Grid**: `grid grid-cols-2 md:grid-cols-4`
- **6-Column Grid**: `grid grid-cols-6`
- **10-Column Grid**: `grid grid-cols-2 md:grid-cols-4 lg:grid-cols-10`

### Flexbox Patterns
- **Center Items**: `flex items-center justify-center`
- **Space Between**: `flex items-center justify-between`
- **End Alignment**: `flex items-end`
- **Column Layout**: `flex flex-col`

### Container Widths
- **Full Width**: `max-w-full`
- **Standard Container**: `max-w-4xl`
- **Large Container**: `max-w-6xl`
- **Extra Large Container**: `max-w-7xl`

## Component Patterns

### Buttons
```css
/* Primary Button */
bg-black hover:bg-gray-800 px-6 py-2 rounded-xl text-white font-semibold

/* Secondary Button */
border border-white/40 hover:border-white/60 px-6 py-3 rounded-xl font-medium text-white backdrop-blur-sm bg-white/10

/* CTA Button */
bg-white hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold text-black
```

### Cards
```css
/* Glassmorphic Card */
bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20

/* Content Card */
bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 rounded-xl p-6
```

### Labels/Badges
```css
/* Feature Label */
inline-flex items-center gap-x-2.5 px-3 md:px-4 py-2 bg-white/10 backdrop-blur-md rounded-lg text-white text-xs md:text-sm font-medium
```

### Navigation
```css
/* Desktop Nav */
fixed top-0 left-0 right-0 z-50 bg-white border-b border-white/30

/* Mobile Menu */
hidden md:hidden mt-4 pb-4 border-t border-gray-200
```

## Image Patterns

### Responsive Images
```html
<picture>
    <source srcset="image-400.webp 400w, image-800.webp 800w, image-1200.webp 1200w" 
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 1200px" 
            type="image/webp">
    <img src="image-800.webp" alt="Description" class="w-full h-full object-cover">
</picture>
```

### Image Sizing
- **Full Width**: `w-full h-full object-cover`
- **Contained**: `w-full h-auto max-w-full`
- **Responsive**: `w-3/4 md:w-full`
- **Fixed Width**: `max-w-sm md:max-w-lg`

## Background Patterns

### Hero Sections
```css
/* Full Screen Hero */
relative min-h-screen
absolute inset-0 overflow-hidden
w-full h-full bg-cover bg-no-repeat scale-150 md:scale-100
```

### Overlay Gradients
```css
/* Bottom to Top */
bg-gradient-to-t from-black/60 via-black/25 to-transparent

/* Left to Right */
bg-gradient-to-r from-black/70 via-transparent to-black/70

/* Center Focus */
bg-gradient-to-b from-transparent via-black/20 to-black/60
```

## Interactive Elements

### Hover States
- **Text Links**: `hover:text-gray-900 transition-colors`
- **Buttons**: `hover:bg-gray-800 transition-colors`
- **Cards**: `hover:bg-gray-50 transition-colors`

### Transitions
- **Standard**: `transition-colors duration-300 ease-in-out`
- **Fast**: `transition-colors`
- **Transform**: `transition-transform duration-300 ease-in-out`

## Responsive Breakpoints

### Mobile First Approach
- **Mobile**: Default (no prefix)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large Desktop**: `xl:` (1280px+)

### Common Responsive Patterns
```css
/* Text Scaling */
text-2xl md:text-4xl lg:text-5xl

/* Spacing Scaling */
py-8 md:py-16 lg:py-24

/* Layout Changes */
flex flex-col md:flex-row
grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
```

## Accessibility

### Focus States
- **Default**: Browser default focus rings
- **Custom**: `focus:outline-none focus:ring-2 focus:ring-gray-600`

### Color Contrast
- **Primary Text**: High contrast against white backgrounds
- **Secondary Text**: Meets WCAG AA standards
- **Overlay Text**: White text on dark overlays for readability

## Performance Considerations

### Font Loading
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
```

### Image Optimization
- **WebP format** with fallbacks
- **Responsive srcset** for different screen sizes
- **Lazy loading** for images below the fold

## CSS Custom Properties

### Tailwind Config Extensions
```javascript
tailwind.config = {
    theme: {
        extend: {
            colors: {
                'glass-border': 'rgba(255, 255, 255, 0.25)',
                'glass-bg': 'rgba(255, 255, 255, 0.15)',
                'glass-bg-strong': 'rgba(255, 255, 255, 0.25)',
            },
            fontFamily: {
                'sans': ['Inter', 'system-ui', 'sans-serif'],
                'figtree': ['Figtree', 'sans-serif'],
            },
            backdropBlur: {
                'xl': '36px',
            }
        }
    }
}
```

## Usage Guidelines

1. **Typography**: Use the defined font scale for consistent hierarchy
2. **Colors**: Use only monochrome colors from the defined palette
3. **Spacing**: Use the spacing scale for consistent rhythm
4. **Responsive**: Always design mobile-first with responsive breakpoints
5. **Accessibility**: Ensure sufficient color contrast and focus states
6. **Performance**: Optimize images and use efficient CSS patterns

This styling guide ensures consistency across all UNSEEN website pages and components. 