# Mr Ben Tea & Coffee — Coffee Shop (Assignment 1)

Site map
- index.html (Home)
- about.html (About)
- menu.html (Menu)
- gallery.html (Gallery)
- contact.html (Contact — full form)
- map.html (Map / iframe)
- policy.html (Policies)

Features
- 7 HTML pages with consistent navigation
- Semantic HTML5 elements, accessible nav
- Full contact/booking form with required inputs, fieldsets, datalist, select/optgroup, file upload, hidden input, range, meter, output
- External CSS (assets/css/styles.css) with responsive layout at 768px and CSS variables
- Images (SVGs) with alt attributes and a figure/figcaption on homepage
- Google Maps iframe on `map.html` (replace embed src with real location)

How to run locally
1. Open `src/index.html` in a browser (no server required). For local fetch of files, you can use a simple static server, e.g., Python:

```powershell
python -m http.server 8000
# then open http://localhost:8000/src/index.html
```

Credits
- Images: simple inline SVGs created for assignment
- Icons: open-source

AI usage
- Designed site structure and generated HTML/CSS/JS with assistance. Include your copy of prompts and edits in your submission.

Testing notes
- Basic client-side validation included. Form submission is demo (prevents actual network call).

Deployment
- Publish `src/` on GitHub Pages (set repo Pages to /docs or root) or Netlify by pointing to `src/` as the publish directory.
