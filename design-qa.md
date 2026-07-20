**Comparison target**

- Source visual truth: `C:\Users\Faiz\Downloads\Canva Design\1.png` (the supplied Canva title-slide reference).
- Rendered implementation: `public/qa-implementation-slide-1.png`, captured from `http://localhost:3088/`.
- Combined comparison evidence: `C:\Users\Faiz\OneDrive\Desktop\ICM658\qa-comparison-evidence-16x9.png`.
- Viewport: 1280 × 720 (16:9).
- State: slide 1, desktop, lightbox closed.

**Findings**

- No actionable P0, P1, or P2 differences were found for the selected title-slide reference.
- [P3] Source-specific copy is intentionally replaced.
  Location: title-slide headline and supporting text.
  Evidence: the source is a “Customer Approach Plan”, while the implementation presents the required SiteTarik ICM658 material.
  Impact: this is an intentional content substitution, not a visual mismatch.
  Fix: none required.
- [P3] The implementation uses an available SiteTarik interface capture rather than the source laptop photograph.
  Location: right-hand hexagonal hero visual.
  Evidence: both compositions use a large rounded/hexagonal image window with a red chevron panel; the implementation image demonstrates the actual prototype.
  Impact: it improves relevance for the presentation while preserving the reference arrangement.
  Fix: none required.

**Required fidelity surfaces**

- Fonts and typography: Manrope is loaded locally for the full deck. The implementation preserves the source’s large black-and-red headline hierarchy, compact header, and small supporting type.
- Spacing and layout rhythm: both views use a white 16:9 canvas, generous left-side copy area, a right-side image crop, red chevron end-cap, and sparse geometric decoration.
- Colours and visual tokens: implementation uses white, near-black text, SiteTarik red (`#f3202a`), soft neutral greys, and subtle borders/shadows consistent with the source.
- Image quality and asset fidelity: the implementation uses sharp, local prototype captures in a matching rounded geometric crop. Decorative hexagons are purposeful layout motifs, not a substituted logo or image asset.
- Copy and content: all visible presentation copy reflects the supplied final-report-backed ICM658 structure and uses British spelling where relevant.

**Focused comparison**

No separate focused-region capture was needed: the 16:9 combined evidence shows the header, headline, image crop, right-edge geometry, decoration and spacing at legible scale.

**Primary interactions tested**

- `ArrowRight` advances from Slide 1 to Slide 2; `ArrowLeft` returns to Slide 1.
- A wheel event on the slide stage advances to Slide 3 after the intentional navigation throttle.
- The audit screenshot opens in a centred blurred-backdrop lightbox; `Escape` closes it.
- The browser console had 0 errors and 0 warnings at the tested state.

**Comparison history**

- Iteration 1: captured an implementation at a non-16:9 browser window, where expected black letterboxing made composition comparison less precise.
- Fix: recaptured the rendered deck at 1280 × 720 and updated the combined comparison evidence.
- Post-fix evidence: `C:\Users\Faiz\OneDrive\Desktop\ICM658\qa-comparison-evidence-16x9.png`.

**Implementation checklist**

1. Confirm the deck is run at a 16:9 display or browser window for the intended full-bleed presentation view.
2. Use the slide controls, arrow keys or mouse wheel to progress through the nine slides.

**Follow-up polish**

- If a higher-resolution SiteTarik hero capture becomes available, it could replace the current local screenshot without changing the layout.

final result: passed
