# Specification

## Summary
**Goal:** Make the post-“Yes” reveal (when `answered === true`) feel noticeably cuter/softer while keeping the existing meme image and reveal text exactly the same.

**Planned changes:**
- Restyle the reveal view container/layout with a softer “cute” treatment (pastel card/background, rounded corners, gentle shadows, decorative accents) without changing the app flow.
- Add new static decorative image assets under `frontend/public/assets/generated` and render them via direct `/assets/generated/...` paths in the reveal layout without obscuring the meme image or text.
- Add at least one additional subtle, cute animation for the decorations (e.g., gentle float/bob or sparkle drift) while preserving the existing fade/scale-in feel and avoiding distracting motion or layout shift.

**User-visible outcome:** After clicking “Yes! 💕”, users see the same meme image, “Good choice ❤️” heading, and the same romantic message, but presented in a softer/cuter styled reveal with decorative visuals and gentle animations.
