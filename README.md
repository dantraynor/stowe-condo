# Stowe Condo Website

A modern, responsive website for a rental condo in Stowe, Vermont. This website showcases the property, provides local information, includes a detailed guest guide, and offers booking functionality.

## Project Structure

```
stowked/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   └── script.js       # JavaScript functionality
├── images/             # Directory for property and location images
└── README.md           # This file
```

## Design Theme

The design blends "Vermont Ski Retreat" with "Modern Mountain Luxury" elements:

### Color Palette

- Primary: Rich earth tones (forest green #2C5F2D, chocolate brown #97724F, slate blue #4F6D7A)
- Secondary: Crisp whites (#FFFFFF) and deep charcoals (#333333)
- Accent: Subtle warm highlights (#D8973C)

### Typography

- Headings: Clean, modern sans-serif (Montserrat)
- Body text: Slightly warmer serif font (Merriweather)

## Features

- Responsive design that works on all devices
- Modern, clean layout with adequate white space
- Image gallery for property photos
- Interactive location information
- Detailed guest guide with tabbed interface
- Booking form with availability check
- Guest testimonials
- Contact information and social media links

## Getting Started

1. Clone this repository
2. Open `index.html` in your browser to view the website
3. Add your property images to the `images/` directory
4. Update content in `index.html` as needed

## Deployment to stowe.studio

### Hosting Setup

1. Choose a web hosting provider (Netlify, Vercel, or traditional hosting)
2. Upload all files to your hosting provider
   - For traditional hosting: Upload via FTP to the public_html directory
   - For Netlify/Vercel: Connect to your GitHub repository

### Domain Configuration

1. Log in to your domain registrar where stowe.studio is registered
2. Point your domain to your hosting provider:
   - Option 1: Update nameservers to your hosting provider's nameservers
   - Option 2: Create an A record pointing to your hosting IP address
   - Option 3: For Netlify/Vercel, follow their custom domain instructions

### SSL Configuration

1. Enable SSL certificate for https://stowe.studio
   - Most hosting providers offer free Let's Encrypt certificates
   - Follow your hosting provider's instructions for enabling SSL

### Post-Deployment

1. Test your website at https://stowe.studio
2. Verify all links, images, and functionality work correctly
3. Test on multiple devices and browsers

## Image Requirements

For optimal display, prepare the following images:

- Hero image: 1920x1080px
- Gallery images: At least 800x600px
- Property images for different sections

## Customization

To customize the website:

1. Update property details in `index.html`
2. Modify colors in `css/styles.css` if desired
3. Add your booking platform links
4. Update contact information and social media links

## Future Enhancements

Potential future enhancements include:

- Integration with a booking API
- Interactive calendar for availability
- Virtual tour functionality
- Blog section for local events and activities
- Weather widget for current conditions in Stowe

## License

This project is private and intended for the sole use of the property owner.
