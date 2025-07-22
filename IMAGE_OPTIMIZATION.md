# UNSEEN Landing Page - Image Optimization Quick Reference

## Quick Commands

```bash
# Optimize all image categories
./scripts/optimize-images.sh people
./scripts/optimize-images.sh device  
./scripts/optimize-images.sh scenes

# Custom resolutions
./scripts/optimize-images.sh people 320,640,1200
```

## Directory Structure

```
img/
├── people/          # Gallery images (320w, 480w, 640w, 960w)
├── device/          # Product shots (400w, 800w, 1200w)  
└── scenes/          # Lifestyle images (600w, 1200w, 1800w)
    ├── originals/   # High-res source images (gitignored)
    └── *-{size}.webp # Optimized WebP images
```

## Workflow

1. **Add images** to `img/{category}/originals/`
2. **Run script** for that category
3. **Use in HTML** with responsive `<picture>` elements

## HTML Example

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

## Benefits

- **70-80% smaller** than JPEG
- **Responsive loading** - only loads needed size
- **WebP format** - modern browser support
- **Quality optimized** - 85% quality setting

## Prerequisites

```bash
brew install imagemagick
```

For detailed documentation, see `scripts/README.md` 