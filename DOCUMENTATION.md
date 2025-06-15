# Q4OS Website Maintenance Documentation

## Table of Contents
1. [Quick Start](#quick-start)
2. [Content Updates](#content-updates)
3. [Download System](#download-system)
4. [Blog Management](#blog-management)
5. [Homepage Updates](#homepage-updates)
6. [Documentation Pages](#documentation-pages)
7. [Footer Management](#footer-management)
8. [SEO and Accessibility](#seo-and-accessibility)
9. [Troubleshooting](#troubleshooting)

## Quick Start

### File Structure Overview
```
q4os-website-new/
├── index.html              # Homepage
├── downloads.html          # Current release downloads
├── downloads3.html         # Legacy release downloads  
├── documents.html          # Documentation hub
├── blog.html              # News and announcements
├── partner.html           # Partnership and support
├── dnt1.html             # Legacy donation page
├── dqa*.html             # Documentation articles (dqa001-dqa018+)
├── css/
│   └── css.css           # Main stylesheet
├── js/
│   └── javascript.js     # Modal system and interactions
├── img/                  # Images and icons
├── sitemap.xml          # SEO sitemap
├── robots.txt           # Search engine instructions
└── README.md            # Basic project info
```

### Common Tasks Quick Reference
- **New Release**: Update `downloads.html`, `index.html`, `blog.html`
- **Blog Post**: Add entry to `blog.html`
- **New Documentation**: Create `dqa###.html`, link from `documents.html`
- **Footer Issues**: Check styling consistency across all pages

## Content Updates

### 1. New Q4OS Release

#### Step 1: Update Downloads Page (`downloads.html`)
```html
<!-- Update version numbers, file sizes, and URLs -->
<li class="mb-2">■ <a href="javascript:void(0)" onclick="showDonationModal('NEW_SOURCEFORGE_URL')" class="fw-bold text-primary">Q4OS X.X Name, Plasma, live - 64bit / x64</a> ... FILE_SIZE MBytes ... <a href="dqa018.html" class="text-decoration-underline">setup guide</a></li>
```

**Required Information:**
- Version number (e.g., 5.9)
- Codename (e.g., Aquarius)
- File sizes in MBytes
- SourceForge download URLs
- ISO dates and build numbers

#### Step 2: Update Homepage (`index.html`)
```html
<!-- Update "The Latest" section -->
<a href="blog.html#newsYYMMDD">
    <h4>Q4OS X.X Codename</h4>
    <p>DD Month, YYYY</p>
</a>
```

```html
<!-- Update hero section if major release -->
<h1 class="display-4 fw-bold mb-4" style="color: white;">
    Q4OS X.X Codename
</h1>
<p class="lead mb-4" style="color: rgba(255,255,255,0.9);">
    Updated description for new release
</p>
```

#### Step 3: Update Blog (`blog.html`)
Add new blog entry at the top:
```html
<a name="newsYYMMDD" id="newsYYMMDD"></a>
<h4>Q4OS X.X Codename, stable</h4>
DD Month, YYYY
<p>
    Release announcement content...
    <br />
    <a href="downloads.html" class="btn btn-primary">Download Q4OS X.X</a>
</p>
```

#### Step 4: Update Legacy Downloads (if needed)
If the previous version becomes legacy, move it to `downloads3.html`.

### 2. Maintenance Releases

For minor updates (X.X.1, security patches):
- Update download URLs in `downloads.html`
- Add brief blog entry
- Update file sizes if changed
- No need to update homepage unless significant

## Download System

### How It Works
The download system uses Bootstrap modals to show donation prompts before downloads:

1. **User clicks download link** → `onclick="showDonationModal('url')"`
2. **JavaScript function** in `js/javascript.js` shows modal
3. **User chooses** to donate or skip
4. **Download starts** via `proceedToDownload()` function

### Modal Structure Required
Every download page needs:
```html
<!-- Modal HTML structure -->
<div class="modal fade" id="downloadDonationModal" tabindex="-1" role="dialog">
    <!-- Modal content with donation options and "Start Download" button -->
</div>
```

### Adding New Download Links
```html
<a href="javascript:void(0)" onclick="showDonationModal('FULL_DOWNLOAD_URL')" class="text-primary">
    Display Text
</a>
```

### Troubleshooting Downloads
1. **Modal doesn't appear**: Check if `js/javascript.js` is loaded
2. **Download doesn't start**: Verify URL format and `proceedToDownload()` function
3. **Bootstrap errors**: Ensure Bootstrap 5.3.6+ is loaded

## Blog Management

### Adding New Blog Posts

1. **Open `blog.html`**
2. **Add after** `<h1>The official Q4OS blog</h1>`
3. **Use this template**:

```html
<a name="newsYYMMDD" id="newsYYMMDD"></a>
<h4>Blog Post Title</h4>
DD Month, YYYY
<p>
    Blog post content here. Use <br /> for line breaks.
    <br />
    <strong>Bold text for emphasis</strong><br />
    • Bullet points<br />
    • List items<br />
    <br />
    <a href="relevant-page.html" class="btn btn-primary">Call to Action</a>
</p>
```

### Blog Post Guidelines
- **ID format**: `newsYYMMDD` (e.g., `news250327` for March 27, 2025)
- **Date format**: `DD Month, YYYY` (e.g., `27 March, 2025`)
- **Keep consistent**: Follow existing formatting
- **Add CTAs**: Include relevant download/documentation links

### Updating Homepage Links
When adding blog posts, update homepage "The Latest" section:
```html
<a href="blog.html#newsYYMMDD">
    <h4>Post Title</h4>
    <p>DD Month, YYYY</p>
</a>
```

## Homepage Updates

### "The Latest" Section
Always shows the 2 most recent releases:
```html
<div class="col-10 col-md-4 mx-auto text-left the-latest">
    <h2 class="mt-5">The Latest</h2>
    <a href="blog.html#newest">
        <h4>Most Recent Release</h4>
        <p>Date</p>
    </a>
    <a href="blog.html#second">
        <h4>Previous Release</h4>
        <p>Date</p>
    </a>
</div>
```

### External Links Section
Update when new promotional content is available:
```html
<a target="_blank" href="YOUTUBE_URL" title="Description">Link Text</a><br>
```

### Hero Section Updates
For major releases, update:
- Version number
- Description text
- Feature highlights
- Call-to-action buttons

## Documentation Pages

### Creating New Documentation

#### Step 1: Create File
Create `dqa###.html` (use next available number):
```bash
# Check highest number
ls dqa*.html | sort -V | tail -1
# Create next number (e.g., dqa019.html)
```

#### Step 2: Use Template
Copy structure from existing guide like `dqa007.html`:
- SEO meta tags
- Breadcrumb navigation
- Content structure
- Footer
- Scripts

#### Step 3: Update Content
- Change title and meta description
- Update breadcrumb page name
- Add comprehensive content
- Ensure proper heading hierarchy (h1 → h2 → h3)

#### Step 4: Link from Documents Page
Add to appropriate section in `documents.html`:
```html
<li><a href="dqa###.html">Documentation Title</a> ... category</li>
```

### Documentation Categories
- **User Manual**: Basic usage, setup, FAQ
- **Administrator Manual**: Server setup, advanced configuration
- **Developer Manual**: Application development, packaging

### Documentation Guidelines
- **Start with h1**: One h1 per page
- **Use semantic structure**: Proper heading hierarchy
- **Include examples**: Code blocks, screenshots
- **Add navigation**: Clear section breaks
- **SEO optimize**: Descriptive titles and meta descriptions

## Footer Management

### Standard Footer Structure
All pages should use this footer format:

```html
<footer class="section contact" role="contentinfo" aria-label="Site footer">
    <div class="container">
        <div class="row py-5">
            <div class="col-12 col-md-8">
                <div class="row">
                    <!-- Four columns: Q4OS, Support, Community, Shop -->
                </div>
            </div>
            <div class="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end">
                <div class="text-center text-md-end">
                    <p class="copyright text-black mb-0">
                        &copy; <span id="current-year">2024</span> Q4OS. All Rights Reserved.<br>
                        <span style="font-size: 10px;">Site theme by <a href="https://github.com/kevdoy" style="color: #3F51B5; text-decoration: underline;" target="_blank" rel="noopener">KevDoy</a></span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</footer>
```

### Footer Requirements
- **Consistent styling**: All links underlined
- **Social media**: Mastodon, X (Twitter), GitHub
- **Copyright order**: Copyright first, then KevDoy credit
- **Dynamic year**: Uses JavaScript to show current year
- **Proper spacing**: Consistent margins and padding

### Social Media Links
Current official accounts:
- **Mastodon**: `https://floss.social/@q4os`
- **X (Twitter)**: `https://x.com/q4osteam`
- **GitHub**: `https://github.com/q4os`

## SEO and Accessibility

### SEO Checklist for New Pages
- [ ] Descriptive title tag (50-60 characters)
- [ ] Meta description (150-160 characters)
- [ ] Proper heading hierarchy (h1 → h2 → h3)
- [ ] Alt text for all images
- [ ] Internal linking to related pages
- [ ] Canonical URL
- [ ] Open Graph tags
- [ ] JSON-LD structured data

### Accessibility Checklist
- [ ] Skip navigation link
- [ ] ARIA landmarks (`role="main"`, `role="navigation"`)
- [ ] Proper heading structure
- [ ] Alt text for images
- [ ] Focus management for modals
- [ ] Color contrast ratios
- [ ] Keyboard navigation support

### Meta Tags Template
```html
<!-- SEO Meta Tags -->
<title>Page Title - Q4OS</title>
<meta name="description" content="Page description">
<meta name="keywords" content="q4os, linux, debian, trinity">
<meta name="author" content="Q4OS Team">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://q4os.org/page.html">

<!-- Open Graph / Facebook -->
<meta property="og:type" content="website">
<meta property="og:url" content="https://q4os.org/page.html">
<meta property="og:title" content="Page Title">
<meta property="og:description" content="Page description">
<meta property="og:image" content="https://q4os.org/og.jpg">
<meta property="og:site_name" content="Q4OS">

<!-- Twitter -->
<meta property="twitter:card" content="summary">
<meta property="twitter:url" content="https://q4os.org/page.html">
<meta property="twitter:title" content="Page Title">
<meta property="twitter:description" content="Page description">
<meta property="twitter:image" content="https://q4os.org/og.jpg">
<meta property="twitter:site" content="@q4osteam">
```

## Troubleshooting

### Common Issues

#### Modal Not Working
1. Check if `js/javascript.js` is loaded
2. Verify Bootstrap CSS/JS are loaded
3. Check modal HTML structure exists
4. Look for JavaScript console errors

#### Footer Inconsistencies
1. Compare with `index.html` footer structure
2. Check copyright format: `&copy; <span id="current-year">2024</span> Q4OS. All Rights Reserved.`
3. Verify KevDoy credit comes after copyright
4. Ensure all links have `text-decoration: underline`

#### SEO Issues
1. Check for missing meta tags
2. Verify proper heading hierarchy
3. Ensure canonical URLs are correct
4. Test with HTML validators

#### Accessibility Problems
1. Check skip navigation links
2. Verify ARIA landmarks
3. Test keyboard navigation
4. Check color contrast ratios

### Testing Checklist
Before deploying changes:
- [ ] HTML validates without errors
- [ ] All download links work
- [ ] Modals appear and function
- [ ] Footer is consistent across pages
- [ ] Copyright year displays correctly
- [ ] Responsive design works on mobile
- [ ] Accessibility tools show no errors
- [ ] SEO meta tags are complete

### Browser Testing
Test in:
- Chrome/Chromium
- Firefox
- Safari (if available)
- Mobile browsers

### Performance Optimization
- Optimize images before uploading
- Minimize CSS/JS when possible
- Use CDN for Bootstrap and other libraries
- Compress assets for production

---

## Emergency Contacts

For urgent website issues:
- Check Q4OS forum for technical discussions
- Review GitHub repository for code issues
- Contact Q4OS development team through official channels

---

*Last updated: June 2025*
