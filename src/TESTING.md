# Testing Report (draft)

Pages tested locally: index.html, about.html, menu.html, gallery.html, blog.html, post-1.html, contact.html, map.html, policy.html

Manual checks performed:
- Navigation works across pages (internal links) — OK
- Contact form validation: required fields and patterns trigger friendly alerts — OK
- Range/meter/output sync — OK
- Skip-link present and keyboard-focusable — OK

Automated / recommended checks to run before submission:
- W3C HTML validator for each page: https://validator.w3.org/
- Lighthouse accessibility and performance audit (in Chrome DevTools)
- Color contrast tool (e.g., WebAIM Contrast Checker)

Known issues / notes:
- Images are placeholder SVGs. Replace with optimized JPG/WebP for production.
- Map iframe uses example embed; replace with your actual Google Maps embed code.
- Form currently uses Netlify form attributes; you must deploy to Netlify or configure a server to capture submissions.
