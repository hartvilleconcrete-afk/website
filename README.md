# Biddio Launch Website

Revolutionary video-first contractor bidding platform launching **February 23, 2026**.

## Features

- **Countdown Timer**: Dynamic countdown to the official launch date
- **Responsive Design**: Mobile-first, optimized for all devices
- **Beta Signup**: Early access form integrated with Google Apps Script
- **Modern UI**: Dark theme with accent colors and smooth animations
- **SEO Optimized**: Meta tags, Open Graph tags for social sharing

## Files

- `index.html` - Main website entry point (recommended for deployment)
- `biddiowebpagecode.html` - Identical copy of the website
- `countdown-test.html` - Standalone countdown timer test page

## Deployment

### Quick Start

1. Upload `index.html` to your web hosting
2. Ensure the Google Apps Script endpoint is configured for the beta signup form
3. Test the countdown timer functionality

### Recommended Hosting Options

- **GitHub Pages**: Free hosting with custom domain support
- **Netlify**: Automatic deployments from Git
- **Vercel**: Zero-config deployments
- **Traditional Web Hosting**: Upload via FTP/SFTP

### GitHub Pages Deployment

1. Push this repository to GitHub
2. Go to repository Settings → Pages
3. Select branch (e.g., `main`) and root folder
4. Your site will be live at `https://yourusername.github.io/repository-name`

### Custom Domain Setup

If using a custom domain (e.g., `biddio.com`):

1. Add a `CNAME` file with your domain name
2. Configure DNS records:
   - A record pointing to hosting provider
   - Or CNAME record for subdomain

## Configuration

### Countdown Date

The countdown is set to **February 23, 2026 at midnight**.

To change the launch date, edit the JavaScript in `index.html`:

```javascript
const launchDate = new Date('2026-02-23T00:00:00').getTime();
```

### Beta Signup Form

The form submits to a Google Apps Script endpoint. Current URL:
```
https://script.google.com/macros/s/AKfycby1NJ6a-ssXt9V1x5Wukoc4jwOfcZfp72Bb9_BkJtf1kAs75rQn1TZgdYaV787VrIXLxw/exec
```

To update:
1. Create a new Google Apps Script
2. Deploy as web app
3. Replace the `scriptURL` in the form submit handler

## Testing

### Local Testing

Run a local web server:

```bash
# Python 3
python3 -m http.server 8080

# Python 2
python -m SimpleHTTPServer 8080

# Node.js (with http-server)
npx http-server -p 8080
```

Then visit: `http://localhost:8080`

### Countdown Test

Open `countdown-test.html` to verify the countdown timer logic independently.

## Post-Launch

After February 23, 2026:
- Countdown automatically hides
- "🎉 Biddio is Now Live! 🎉" message displays
- Consider redirecting to the live app

## Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support  
- Mobile browsers: ✅ Optimized

## Performance

- No external dependencies except Google Fonts
- Minimal JavaScript
- Fast loading times
- Responsive images and animations

## Support

For questions or issues:
- Email: Biddiollc@gmail.com
- Contact: Richard Presutti

---

© 2026 Biddio. All rights reserved.
