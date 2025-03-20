#!/bin/bash

# Stowe Condo Website Deployment Script
# This script helps prepare and deploy the website to a hosting provider

echo "===== Stowe Condo Website Deployment ====="
echo "Preparing files for deployment to stowe.studio"

# Create deployment directory
DEPLOY_DIR="./deploy"
mkdir -p $DEPLOY_DIR

# Copy all necessary files
echo "Copying files to deployment directory..."
cp -R index.html css js images robots.txt sitemap.xml .htaccess $DEPLOY_DIR

# Optimize images (if imagemagick is installed)
if command -v convert &> /dev/null; then
    echo "Optimizing images..."
    find $DEPLOY_DIR/images -type f -name "*.jpg" -exec convert {} -strip -quality 85% {} \;
    find $DEPLOY_DIR/images -type f -name "*.png" -exec convert {} -strip {} \;
else
    echo "ImageMagick not found. Skipping image optimization."
    echo "Consider installing ImageMagick for image optimization."
fi

# Minify CSS (if minify is installed)
if command -v minify &> /dev/null; then
    echo "Minifying CSS..."
    for file in $DEPLOY_DIR/css/*.css; do
        minify -o "$file.min" "$file"
        mv "$file.min" "$file"
    done
else
    echo "Minify tool not found. Skipping CSS minification."
    echo "Consider installing minify for CSS optimization."
fi

# Minify JavaScript (if minify is installed)
if command -v minify &> /dev/null; then
    echo "Minifying JavaScript..."
    for file in $DEPLOY_DIR/js/*.js; do
        minify -o "$file.min" "$file"
        mv "$file.min" "$file"
    done
else
    echo "Minify tool not found. Skipping JavaScript minification."
fi

# Create zip file for easy upload
echo "Creating deployment zip file..."
cd $DEPLOY_DIR
zip -r ../stowe-studio-deploy.zip ./*
cd ..

echo ""
echo "===== Deployment Package Ready ====="
echo "Deployment package created at: stowe-studio-deploy.zip"
echo ""
echo "Next steps:"
echo "1. Upload the contents of the 'deploy' directory to your hosting provider"
echo "2. Alternatively, upload the stowe-studio-deploy.zip file and extract on your server"
echo "3. Ensure your domain (stowe.studio) is pointing to your hosting provider"
echo "4. Set up SSL certificate for secure HTTPS access"
echo ""
echo "For detailed deployment instructions, refer to the README.md file"
echo "====================================="
