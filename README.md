# Q4OS.org Website

A modern, accessible, and SEO-optimized website for Q4OS Linux distribution.

## Overview

This is the new Q4OS website featuring:
- WCAG 2.1 AA accessibility compliance
- Modern SEO standards with structured data
- Responsive Bootstrap 5 design
- Modal-based download system with donation prompts
- Comprehensive documentation section
- Clean, professional UI with Trinity desktop theming

## Features

- **Accessibility First**: Skip navigation, ARIA landmarks, semantic HTML, proper heading hierarchy
- **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, JSON-LD structured data, sitemap.xml
- **Modern Downloads**: Modal-based donation system instead of separate pages
- **Documentation Hub**: Complete guide collection for users, administrators, and developers
- **Responsive Design**: Mobile-first Bootstrap 5 implementation
- **Dynamic Copyright**: Automatically updates year via JavaScript

## Website Maintenance Guide

### How the Download System Works

The download system uses a modal-based approach instead of separate donation pages:

1. **Download Links**: All download links use `onclick="showDonationModal('download-url')"` 
2. **Modal Display**: JavaScript function in `js/javascript.js` shows the donation modal
3. **User Choice**: Users can donate via PayPal or click "Start Download" to skip
4. **Download Trigger**: `proceedToDownload()` function creates temporary link and triggers download

**Required Files for Download System:**
- `js/javascript.js` - Contains modal functions
- Bootstrap 5 JS bundle for modal functionality
- Modal HTML structure with ID `downloadDonationModal`

### Instructions on Posting New Blog Posts

1. Edit `blog.html`
2. Add new blog post entry at the top of the blog list
3. Use proper semantic HTML structure with heading hierarchy
4. Include proper date formatting
5. Update meta description if needed

### Instructions on Posting OS Updates/New Releases

1. **Update Downloads Page** (`downloads.html`):
   - Update version numbers and file sizes
   - Update SourceForge download URLs
   - Update any system requirements
   - Test modal functionality

2. **Update Homepage** (`index.html`):
   - Update version number in hero section
   - Update any feature highlights

3. **Add Release Blog Post**:
   - Create entry in `blog.html` 
   - Include changelog and download links

4. **Update Documentation** (if needed):
   - Create new setup guides in `dqa*.html` format
   - Update existing guides for version changes

### Adding New Documentation Pages

1. **Create File**: Use format `dqa###.html` (next available number)
2. **Copy Structure**: Use existing guide as template (e.g., `dqa007.html`)
3. **Update Content**:
   - Change title, meta description, and content
   - Ensure proper breadcrumb navigation (Home > Documentation > Page Title)
   - Maintain consistent styling and accessibility
4. **Link from Documents Page**: Add entry to `documents.html` in appropriate section

### File Structure and Naming

- **Main Pages**: `index.html`, `downloads.html`, `documents.html`, `partner.html`, `blog.html`
- **Documentation**: `dqa###.html` format (dqa = Documentation Q4OS Article)
- **Legacy/Special**: `downloads3.html` (legacy downloads), `dnt1.html` (legacy)
- **Assets**: `css/css.css`, `js/javascript.js`, `img/` folder

## Contributing

### Quality Standards and Rules

**IMPORTANT**: If you use AI tools or automated code generation to contribute to this site, you MUST:

1. **Verify All Changes**: Test every modification thoroughly
2. **Scope Verification**: Ensure changes match your intended improvements/fixes
3. **Accessibility Testing**: Verify WCAG compliance is maintained
4. **Cross-Browser Testing**: Test in multiple browsers
5. **Mobile Testing**: Verify responsive design works correctly

**Consequences**: Submitting multiple low-quality PRs that break functionality, accessibility, or introduce bugs will result in a ban from contributing code to this repository.

### Before Contributing

1. **Test Locally**: Always test changes in a browser
2. **Check Accessibility**: Use browser dev tools accessibility checker
3. **Validate HTML**: Ensure no HTML errors
4. **Test Modal System**: If touching download pages, verify modal functionality
5. **Check Links**: Verify all internal and external links work

### Instructions on Contributing to Q4OS Project

1. Visit the main Q4OS repositories
2. Follow Q4OS development guidelines
3. Check the Q4OS forum for development discussions
4. Respect the Debian-based development model

### Instructions on Contributing to This Website

1. **Fork the Repository**
2. **Create Feature Branch**: `git checkout -b feature/description`
3. **Make Changes**: Follow the quality standards above
4. **Test Thoroughly**: Test all functionality affected by changes
5. **Commit with Clear Messages**: Describe what you changed and why
6. **Submit Pull Request**: Include testing details and screenshots if UI changes

### Maintenance Notes

- **Copyright Year**: Automatically updates via JavaScript in footer
- **Social Links**: Mastodon, X (Twitter), GitHub - update in footer across all pages
- **Download URLs**: Use SourceForge URLs, update when new releases available
- **Documentation Structure**: Maintains breadcrumb hierarchy for SEO

### Technical Details

- **Framework**: Bootstrap 5.3.6
- **Icons**: FontAwesome (for UI elements)
- **JavaScript**: Vanilla JS for modal system and interactions
- **CSS**: Custom CSS in `css/css.css` with CSS variables for theming
- **Accessibility**: WCAG 2.1 AA compliant
- **SEO**: JSON-LD structured data, comprehensive meta tags

