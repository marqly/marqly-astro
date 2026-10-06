# Brief — "Can bookmark managers import each other's exports?" (linkable asset)

- **Query / intent:** informational + linkable; "pocket export not importing", "raindrop import bookmarks", "bookmark export format", "netscape bookmark html". No single top-5 result answers "will my file actually import?" with a measured test — that's the **info-gain element**: a reproducible parse of *real, hash-pinned public export files* against an importer.
- **Evidence:** `active/logs/benchmark/2026-09-26-import-fidelity/` (REAL-CORPUS.json + results/fidelity.json), parser copied verbatim from `marqly_2026_prod@985777f3`, run 2026-09-26. Every number below is from that run — nothing invented.
- **Hard truth rules (enforced by seo-check):** do NOT claim other vendors' import behaviour we didn't measure — frame competitor columns as "what the file is / what our importer did", never "Raindrop will fail". Marqly's own `<DD>` description bug was measured *pre-fix*; state it is fixed (the run compares deployed vs `fix/import-dd-attachment@4ec92bee`). No dates-preserved (Marqly discards them), no "free trial".
- **Reproducibility:** publish the corpus SHA-256 + a downloadable per-item CSV (we ship hashes + counts, not the private files themselves — the source files are third-party public dotfiles, we pin by hash and describe shape).
- **Schema:** Article/Report + dataset-style table. Author = Amro (Person), method links to /how-we-test. Visible Last updated.
- **Internal links out:** /migrate/pocket, /migrate/raindrop, /migrate/browser-bookmarks, /tools/pocket-export-converter, /tools/bookmark-file-viewer, /tools/raindrop-export-analyzer, /blog/what-is-in-your-pocket-export-file, /blog/how-to-export-migrate-pocket-data, /how-we-test.
- **External citations (official format docs):** Netscape bookmark file format, MDN bookmark HTML, Pocket/Export data help, Raindrop import/export help, Google Bookmarks sunset note — each "as of <date>, per <URL>". (I fetch/verify these before publish; mark UNKNOWN where not checked.)
- **Measured facts available now (VERIFIED from the run):**
  - Pocket `ril_export.html` (genuine 261-item public export): **0/261 parsed** (UL/LI, not Netscape DL) → importer fails safe with "no bookmarks found". ⇒ Pocket HTML is not importable by us; only `list.csv`.
  - Chrome export (43-item public test export): **43/43 parsed**, 4 folders, 0 tags (Chrome carries none).
  - Raindrop HTML (412-item public export): **412/412 parsed**, 54 boards; the deployed `<DD>`-attachment bug mis-set descriptions on **306/412 (~74%)** and dropped 39 first-of-folder — **fixed** in `fix/import-dd-attachment` (258/412 correct after).
  - Dates: parsed from ADD_DATE/created, then **discarded at insert** in Marqly (all dated items).
  - Robustness: two mislabeled/corrupt archives → 0 bookmarks + a clean validation error, no crash, no partial write.
- **Deliverable:** one EN page + a CSV in `public/research/` + a downloadable data table. Gate: `seo:check`.
