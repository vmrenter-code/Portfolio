Victor Renteria — Portfolio (A1)
=================================

How to view: open index.html in Google Chrome. No build step or packages are
needed. 

Pages
-----
- index.html     Home: hero, about, work experience, skills, featured projects,
                 education, certifications, contact form
- projects.html  All projects, with category filters and a comparison table

Note on prior work
------------------
I started this portfolio before the course as a React + Vite + Tailwind app
(still in the parent folder of the repository). That version needed a build
step and a local server, its HTML was an empty <div id="root"> that the
accessibility checkers could not evaluate, and Tailwind's generated CSS does
not pass the W3C CSS validator. For this assignment I rebuilt it by hand as
plain HTML, CSS and a small vanilla JavaScript file, keeping the same content
and visual identity. Changes made:
- Rewrote every section as static, semantic HTML so it opens from index.html
  and validates
- Replaced Tailwind with one commented, mobile-first stylesheet (css/style.css)
- Split the site into two pages with shared navigation
- Added a projects page with filters and an accessible comparison table
- Fixed accessibility problems in the old version: icon-only buttons with no
  labels, generic alt text ("Hero", "About"), skipped heading levels, white text
  on a light cyan button (about 3:1 contrast), and a mobile menu that had no
  keyboard or screen-reader support
- Resized the images (one was 12 MB) and switched every path to a relative one

Points I believe I have completed: 10

Basic HTML content 
-----------------------------------------------
1. Images with descriptive alt attributes (headshot, team photo, graduation
   photo, four project screenshots)
2. Headings and paragraph text in a logical h1 > h2 > h3 outline on each page
3. Links to external pages (live project demos, LinkedIn, GitHub)
4. Multiple pages (index.html, projects.html) with a shared navigation bar,
   aria-current on the active page, and a breadcrumb on the projects page
5. Semantic HTML: header, nav, main, section, article, figure/figcaption,
   footer, dl, ol
6. Custom icons from Font Awesome 6, marked aria-hidden because they are
   decorative

Basic CSS styling (all 4 options; 2 required)
---------------------------------------------
1. Padding and margins that space out content for readability, with section
   padding that grows on larger screens
2. A custom color palette defined as CSS custom properties in :root (navy
   background, cyan accent), with every text and background pair checked for
   WCAG AA contrast
3. Card, pill and table styling done by hand instead of with Bootstrap: rounded
   "chip" tags, an organic border-radius shape on the headshot, offset photo
   frames
4. Custom Google Fonts with fallbacks: Space Grotesk for headings
   ("Trebuchet MS", "Segoe UI", Arial, sans-serif) and Inter for body text
   ("Segoe UI", Roboto, Helvetica, Arial, sans-serif)

Advanced features
-----------------
1. Complex layout: a sticky navigation bar that collapses into an accessible
   menu button on screens under 900px (aria-expanded, Escape closes it), with a
   CSS Grid layout that goes from 1 to 2 to 3–4 columns
2. Contact form built with HTML forms: labelled fields, autocomplete hints,
   required validation, and a status message announced to screen readers. It
   opens the visitor's email app because the site has no back end.
3. A multi-column table that screen readers can read (projects.html), with a
   caption, column and row header cells (scope), and a scrollable, focusable,
   labelled region on narrow screens
4. Project filter buttons (aria-pressed, plus a live region that announces
   "Showing N of 5 projects")
5. Descendant and pseudo-element selectors, such as the timeline dots
   (.timeline li::before), the breadcrumb separators (.breadcrumb li + li::before)
   and the menu styles that apply only with JavaScript (.js .site-nav)
6. Scroll-reveal animations using IntersectionObserver. They are turned off
   for users with prefers-reduced-motion, and content stays visible if
   JavaScript is disabled.

Responsiveness
--------------
The CSS is mobile-first, with breakpoints at 640px, 900px and 1200px.
- Phones: one column, stacked full-width buttons, a menu button in place of
  the link bar, the decorative hero glow hidden, and tall portrait photos
  cropped to a shorter frame
- Tablets: two-column grids
- Laptops and desktops: side-by-side hero, about, education and contact
  layouts, and three- or four-column grids
The projects table scrolls inside its own container so the page never scrolls
sideways. Tested in Chrome DevTools at 375px, 390px, 768px, 1024px and 1440px.

Validation
----------
- HTML: W3C Nu validator, 0 errors and 0 warnings on both pages
  (valid-html-index.jpg, valid-html-projects.jpg)
- CSS: W3C CSS validator on css/style.css (valid-css-style.jpg)
- Accessibility: AChecker, WCAG 2.0 AA, 0 known problems and 0 likely problems
  (valid-accessibility-index.jpg, valid-accessibility-projects.jpg)
- Extra check: WAVE on index.html, 0 errors and 0 contrast errors, AIM score
  9.9/10 (valid-accessibility-index-wave.jpg)

Accessibility warnings and potential problems I left in place
-------------------------------------------------------------
AChecker: 0 known and 0 likely problems. It lists 100+ "potential problems,"
which are reminders for a person to review by hand (e.g. "alt text may not
describe the image," "link text may not be meaningful," "check that color is
not the only way to convey meaning"), not detected failures. I reviewed them:
every image has a specific, hand-written description; link text names its
destination, with hidden "(opens in a new tab)" text where needed; and color
never carries meaning alone.

WAVE: 0 errors and 6 alerts, which I kept on purpose:
- 2 "Long alternative text": the photo descriptions are a little over WAVE's
  length guideline, but each is one sentence that describes who is in the
  photo, which is more useful than a shorter, vaguer description.
- 2 "Redundant link": the LinkedIn, GitHub and email links appear in both the
  hero and the footer, so visitors can reach them from either end of the page.
- 2 "Link to PDF document": the résumé and CodePath certificate are PDFs on
  purpose. The link text says "(PDF)" so visitors know before they click.

CSS validator: any warnings about var() are expected. The validator can't check
the values of custom properties ahead of time, and I use them on purpose to
keep the color palette consistent.

Time spent: 8 hours

Online resources consulted
--------------------------
- https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_grid_layout
- https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
- https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/ (menu button pattern)
- https://www.w3.org/WAI/tutorials/tables/ (accessible table markup)
- https://webaim.org/resources/contrastchecker/
- https://fonts.google.com/ (Inter, Space Grotesk)
- https://fontawesome.com/icons (Font Awesome Free 6.5)
- https://validator.w3.org/nu/  https://jigsaw.w3.org/css-validator/
- https://achecker.achecks.ca/  https://wave.webaim.org/
- Claude (Anthropic) AI assistant, which helped convert the React version to
  static HTML/CSS

People consulted
----------------
None