# UNSEEN Landing Page - Image Optimization System

## Overview

This system optimizes images for the UNSEEN landing page using WebP format with multiple resolutions for responsive design. It ensures fast loading across all devices while maintaining high quality.

## Directory Structure

```
img/
├── people/
│   ├── originals/          # High-res source images (gitignored)
│   └── *-{size}.webp       # Optimized WebP images
├── device/
│   ├── originals/
│   └── *-{size}.webp
└── scenes/
    ├── originals/
    └── *-{size}.webp
```

## Prerequisites

- **ImageMagick**: Required for image processing
  ```bash
  brew install imagemagick
  ```

## Usage

### Basic Commands

**Optimize people images:**
```bash
./scripts/optimize-images.sh people
```

**Optimize device images:**
```bash
./scripts/optimize-images.sh device
```

**Optimize scene images:**
```bash
./scripts/optimize-images.sh scenes
```

### Custom Resolutions

**Specify custom resolutions:**
```bash
./scripts/optimize-images.sh people 320,640,1200
```

**Multiple directories with custom resolutions:**
```bash
./scripts/optimize-images.sh device 400,800,1600
./scripts/optimize-images.sh scenes 600,1200,2400
```

## Default Resolutions by Category

- **People**: 320w, 480w, 640w, 960w (optimized for gallery cards)
- **Device**: 400w, 800w, 1200w (optimized for product shots)
- **Scenes**: 600w, 1200w, 1800w (optimized for lifestyle images)

## Workflow

1. **Place source images** in `img/{category}/originals/`
2. **Run optimization script** for that category
3. **Original files** are kept in `originals/` but gitignored
4. **Optimized WebP files** are generated in the category root
5. **Update HTML** to use responsive `<picture>` elements with `srcset`

## Technical Details

- **Quality setting**: 85 (good balance of size/quality)
- **Aspect ratios**: Preserved during resizing
- **Format**: WebP (70-80% size reduction vs JPEG)
- **Resize method**: `>` operator ensures images are only scaled down

## HTML Implementation

Use responsive images in your HTML:

```html
<picture>
  <source 
    srcset="img/people/nurse-320.webp 320w,
            img/people/nurse-480.webp 480w,
            img/people/nurse-640.webp 640w,
            img/people/nurse-960.webp 960w"
    sizes="(max-width: 480px) 320px,
           (max-width: 768px) 480px,
           (max-width: 1024px) 640px,
           960px"
    type="image/webp">
  <img src="img/people/nurse-640.webp" alt="Nurse using UNSEEN device">
</picture>
```

## File Naming Convention

Optimized files follow this pattern:
- `{filename}-{width}.webp`
- Example: `nurse-320.webp`, `nurse-480.webp`, etc.

## Error Handling

The script includes comprehensive error handling:
- Validates ImageMagick installation
- Checks directory existence
- Verifies source images are present
- Provides colored output for better UX

## Performance Benefits

- **WebP format**: 70-80% smaller than JPEG
- **Responsive images**: Only load the size needed
- **Multiple resolutions**: Optimized for different screen sizes
- **Quality optimization**: Maintains visual quality while reducing file size

## Maintenance

- Original high-res images are preserved in `originals/` directories
- Script can be re-run safely (overwrites existing optimized files)
- Git ignores original files to keep repository size small 