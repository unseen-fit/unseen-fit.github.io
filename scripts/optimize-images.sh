#!/bin/bash

# Single directory image optimization script for WebP conversion with configurable resolutions
# Usage: ./optimize-images.sh <directory> [resolution1,resolution2,...]
# Example: ./optimize-images.sh people 400,800,1200
# Processes images from img/<directory>/originals/ and outputs to img/<directory>/

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if ImageMagick is installed
if ! command -v magick &> /dev/null; then
    echo -e "${RED}Error: ImageMagick is not installed.${NC}"
    echo "Please install it with: brew install imagemagick"
    exit 1
fi

# Check arguments
if [ $# -eq 0 ]; then
    echo -e "${RED}Error: No directory specified${NC}"
    echo "Usage: $0 <directory> [resolution1,resolution2,...]"
    echo "Example: $0 people 400,800,1200"
    echo "Available directories:"
    ls -d img/*/ 2>/dev/null | xargs -n1 basename || echo "  No img subdirectories found"
    exit 1
fi

DIRECTORY="$1"
QUALITY=85

# Parse resolutions from second argument, or use defaults
if [ $# -ge 2 ]; then
    IFS=',' read -ra RESOLUTIONS <<< "$2"
else
    # Default resolutions - you can modify these per directory type
    case "$DIRECTORY" in
        "people")
            RESOLUTIONS=(320 480 640 960)
            ;;
        "device")
            RESOLUTIONS=(400 800 1200)
            ;;
        "scenes")
            RESOLUTIONS=(600 1200 1800)
            ;;
        *)
            RESOLUTIONS=(400 800 1200)
            ;;
    esac
fi

# Validate directory exists
if [ ! -d "img/$DIRECTORY" ]; then
    echo -e "${RED}Error: Directory img/$DIRECTORY does not exist${NC}"
    exit 1
fi

# Check if originals directory exists
ORIGINALS_DIR="img/$DIRECTORY/originals"
if [ ! -d "$ORIGINALS_DIR" ]; then
    echo -e "${RED}Error: Directory $ORIGINALS_DIR does not exist${NC}"
    echo "Please create it and move your original images there first."
    exit 1
fi

# Function to process a single image
process_image() {
    local input_file="$1"
    local output_dir="$2"
    local filename=$(basename "$input_file" | sed 's/\.[^.]*$//')
    
    echo -e "${YELLOW}  Processing: $filename${NC}"
    
    # Convert to each resolution (maintaining aspect ratio)
    for resolution in "${RESOLUTIONS[@]}"; do
        output_file="$output_dir/${filename}-${resolution}.webp"
        
        echo "    Creating ${resolution}w version..."
        magick "$input_file" \
            -resize "${resolution}>" \
            -quality $QUALITY \
            "$output_file"
    done
    
    echo -e "${GREEN}  ✓ Completed: $filename${NC}"
}

# Process the specified directory
echo -e "${YELLOW}Starting image optimization for: $DIRECTORY${NC}"
echo -e "${BLUE}Resolutions: ${RESOLUTIONS[*]}w${NC}"
echo -e "${BLUE}Quality: ${QUALITY}${NC}"
echo

OUTPUT_DIR="img/$DIRECTORY"

# Check if there are images to process
shopt -s nullglob
image_files=("$ORIGINALS_DIR"/*.{jpg,jpeg,png,JPG,JPEG,PNG})
shopt -u nullglob

if [ ${#image_files[@]} -eq 0 ]; then
    echo -e "${RED}No images found in $ORIGINALS_DIR${NC}"
    exit 1
fi

echo -e "${BLUE}📁 Processing: $ORIGINALS_DIR${NC}"

# Process all images in the originals directory
for img_file in "${image_files[@]}"; do
    process_image "$img_file" "$OUTPUT_DIR"
done

echo
echo -e "${GREEN}✅ Image optimization complete for $DIRECTORY!${NC}"
echo
echo "Generated WebP images at resolutions: ${RESOLUTIONS[*]}w"
echo "Quality setting: ${QUALITY}"
echo "Output directory: $OUTPUT_DIR" 