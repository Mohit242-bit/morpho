
# Roadmap: Shifting Case Study & Blog Panels to New Morphoverse Website

## Roadmap Progress

### ✅ Completed
- Refactored card data for case studies and blogs to a unified structure.
- Added `slug` field to all cards in our new files (`case-studies/page.tsx`, `Card.tsx`).
- Built a reusable Card component in `/components/Card.tsx`.
- Rendered all cards (case studies + blogs) in a grid on `/case-studies` page.
- Appended blog cards to the same array for unified display.
- Replaced static images with "img" placeholder.
- Prepared for dynamic routing by including `slug` in each card.

### 🟡 Next Steps
- [ ] Implement dynamic routing for `/case-studies/[slug]` (all cards use this route).
- [ ] Dynamically render full content for selected card in the main content section using the slug.
- [ ] Fetch card data by slug and display its details and content.
- [ ] Replace placeholder text in content sections with actual card content.
- [ ] Link cards to their dynamic pages using Next.js `<Link>`.
- [ ] Test dynamic rendering and navigation for all cards.