# Mercado Querido Premium v13

Final polish version:

- Clean hero bottom padding using matched image pixels, not a mismatched CSS block.
- Food tile cropped so no white strip appears on the left edge.
- Keep your existing `.env.local` when replacing files.

Run:

```bash
npm install
npm run dev
```


## v16 note
Category tiles are restored to natural, uniform rendering. The Alimentos regionales tile is repaired at the asset edge rather than cropped, so text and badge alignment remain consistent across all three tiles.


## v17 note
Patched the remaining top-left light seam on the Alimentos regionales tile while preserving the card's rounded corner.


## v18 note
Further cleaned the top seam on the Alimentos tile, especially the top-left corner and the remaining pale line along the top edge.
