# Video Ad Section - Quick Guide

## Overview

A professional video advertisement section has been added to the Biddio website, positioned between the Features section and the CTA/Beta Signup section for maximum visibility.

## Current Status

✅ **Section Added**: Ready and visible on the site  
📹 **Placeholder Active**: Shows "Video Coming Soon" with a film icon  
🎨 **Fully Styled**: Matches Biddio's brand (dark theme, golden accents)  
📱 **Responsive**: Works perfectly on mobile, tablet, and desktop  

## Visual Preview

The section appears as a prominent video placeholder with:
- **Title**: "Featured Video"
- **Subtitle**: "Learn more about Biddio and how we're revolutionizing the contractor bidding industry"
- **Placeholder**: 16:9 aspect ratio box with golden border and "Video Coming Soon" message
- **Icon**: 🎬 film icon
- **Styling**: Dark gradient background with glowing golden border

## Location

```
┌─────────────────────┐
│  Hero Section       │
├─────────────────────┤
│  Countdown Timer    │
├─────────────────────┤
│  Features (6 cards) │
├─────────────────────┤
│  ✨ VIDEO AD ✨     │  ← NEW SECTION HERE
├─────────────────────┤
│  CTA/Beta Signup    │
├─────────────────────┤
│  Footer             │
└─────────────────────┘
```

## How to Add Your Video (When Ready)

### Option 1: Using the Helper Script (Easiest)

1. Open `index.html` (or `examples/legacy-biddio.html` if you need the archived copy)
2. Scroll to the bottom, find the commented helper script
3. Uncomment the script section (remove `<!--` and `-->`)
4. Replace `YOUR_VIDEO_URL_HERE` with your video URL
5. Save and reload

**Example:**
```html
<script>
    function loadVideoAd(videoUrl) {
        const placeholder = document.getElementById('videoAdPlaceholder');
        const iframe = document.getElementById('videoAdIframe');
        
        if (videoUrl && videoUrl.length > 0) {
            iframe.src = videoUrl;
            iframe.style.display = 'block';
            placeholder.style.display = 'none';
        }
    }
    
    // Add your video URL here:
    loadVideoAd('https://www.youtube.com/embed/YOUR_VIDEO_ID');
</script>
```

### Option 2: Direct Edit (Manual)

Find this line in the HTML:
```html
<iframe 
    id="videoAdIframe"
    class="video-ad-iframe" 
    src="" 
```

Change `src=""` to `src="YOUR_VIDEO_URL"`

Then find:
```html
<div class="video-ad-placeholder" id="videoAdPlaceholder">
```

Add `style="display: none;"` to hide the placeholder:
```html
<div class="video-ad-placeholder" id="videoAdPlaceholder" style="display: none;">
```

And for the iframe, change:
```html
class="video-ad-iframe"
```

To:
```html
class="video-ad-iframe" style="display: block;"
```

## Supported Video Platforms

### YouTube
```
https://www.youtube.com/embed/VIDEO_ID
```
Example: `https://www.youtube.com/embed/dQw4w9WgXcQ`

### Vimeo
```
https://player.vimeo.com/video/VIDEO_ID
```
Example: `https://player.vimeo.com/video/123456789`

### Other Embed Services
Any iframe-compatible video service will work!

## Customization Options

### Change Title/Subtitle

Edit these lines in the HTML:
```html
<h2 class="video-ad-title">Featured Video</h2>
<p class="video-ad-subtitle">Learn more about Biddio...</p>
```

### Change Placeholder Text

Edit this section:
```html
<div class="video-ad-text">Video Coming Soon</div>
<p class="video-ad-description">This space is reserved for...</p>
```

### Adjust Size

The video section has a max-width of 900px. To change:

Find `.video-ad-container` in the CSS:
```css
.video-ad-container {
    max-width: 900px;  /* Change this value */
    margin: 0 auto;
}
```

### Change Aspect Ratio

Default is 16:9. To change, find `.video-ad-wrapper` in CSS:
```css
padding-bottom: 56.25%; /* 16:9 ratio */
```

Common ratios:
- 16:9 = 56.25%
- 4:3 = 75%
- 21:9 = 42.86%
- 1:1 = 100%

## Technical Details

**CSS Classes:**
- `.video-ad-section` - Main container
- `.video-ad-container` - Inner wrapper (max-width)
- `.video-ad-title` - Section title
- `.video-ad-subtitle` - Description
- `.video-ad-wrapper` - Video container with aspect ratio
- `.video-ad-placeholder` - Temporary placeholder
- `.video-ad-iframe` - Hidden iframe for video

**HTML IDs:**
- `#videoAdPlaceholder` - Placeholder div
- `#videoAdIframe` - Video iframe

## Responsive Behavior

- **Desktop (>768px)**: Full size, 6rem padding, large icons
- **Mobile (≤768px)**: Compact, 4rem padding, smaller icons and text
- **Hover Effect**: Lifts 5px with enhanced glow (desktop only)

## Design Specifications

- **Background**: Dark gradient (#0f0f0f to #1a1a1a)
- **Border**: 2px solid golden (#f5a623)
- **Border Radius**: 15px
- **Box Shadow**: Golden glow effect
- **Title Font**: Playfair Display, 2.5rem (1.8rem mobile)
- **Icon Size**: 5rem (3rem mobile)

## Files Modified

- ✅ `index.html` - Added video section CSS and HTML
- ✅ `examples/legacy-biddio.html` - Archived copy with the same video section

Both files have identical video section implementations.

## Need Help?

The video section is ready to use! When you have your video:
1. Get the embed URL from YouTube/Vimeo/etc.
2. Use the helper script or direct edit method above
3. Test to ensure it displays correctly

---

© 2026 Biddio. All rights reserved.
