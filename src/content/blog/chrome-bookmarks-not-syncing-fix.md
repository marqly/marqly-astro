---
title: "Chrome Bookmarks Not Syncing? 8 Fixes That Actually Work (2026)"
seoTitle: "Chrome Bookmarks Not Syncing? 8 Real Fixes (2026) — Marqly"
description: "Chrome bookmarks not syncing? Work through 8 fixes in order — paused sync, account mismatches, sync settings, chrome://sync-internals, and a full sync reset."
pubDate: 2026-08-02
updatedDate: 2026-10-06
ogImage: "https://www.marqly.com/og/chrome-bookmarks-not-syncing-fix.png"
category: "Guides"
targetKeyword: "chrome bookmarks not syncing"
tags:
  - "chrome bookmarks not syncing"
  - "chrome sync"
  - "bookmark sync fix"
  - "chrome sync internals"
  - "bookmark backup"
ctaUrl: "https://app.marqly.com"
ctaLabel: "Get started free"
faqs:
  - q: "Why did Chrome suddenly stop syncing my bookmarks?"
    a: "Check whether the affected devices still use the same Google Account and Chrome profile, whether Bookmarks is enabled under sync settings, and whether Chrome needs an update or sign-in. Export an HTML backup before changing broader sync settings."
  - q: "How do I force Chrome to sync bookmarks right now?"
    a: "Chrome does not provide a documented force-sync button. Confirm the same account and profile, enable Bookmarks in sync settings, update and restart Chrome, then create a clearly named test bookmark and check whether it reaches the other device."
  - q: "What is chrome://sync-internals and how do I read it?"
    a: "It is Chrome's built-in diagnostics page. Use it as a read-only check: confirm the expected account, look for a current sync error, and see whether the Bookmarks data type is present. Copy any error text before seeking support."
  - q: "Will resetting Chrome sync delete my bookmarks?"
    a: "Do not assume an old reset guide matches the current Chrome behavior. Export and open an HTML backup first, identify which device has the authoritative library, and follow current Google support instructions before signing out, resetting, deleting, or importing data."
  - q: "why are my chrome bookmarks not syncing"
    a: "Usually the two devices are using different Google accounts or Chrome profiles, bookmark sync is disabled on one device, or one browser is waiting for an update or sign-in. Export an HTML backup first, then verify the same account and sync settings on every device."
  - q: "how to sync your bookmarks in chrome"
    a: "Sign in to Chrome with the same Google Account on each device, open Chrome's sync settings, and make sure Bookmarks is included. Create a clearly named test bookmark, wait briefly, and check the other device before changing broader sync settings."
---

**When Chrome bookmarks are not syncing, export an HTML backup, confirm every device uses the same Google Account and Chrome profile, verify Bookmarks is included in sync, then update and restart Chrome.** Create one clearly named test bookmark to identify which device is failing. Avoid resetting or deleting data until that backup opens correctly.

Google's [sync documentation](https://support.google.com/chrome/answer/165139?hl=en) says synced information is available on devices signed into the same account. That makes account, profile, and per-data-type settings the first checks.

## Pick the next check from the symptom

| Symptom | Check first | Why |
| --- | --- | --- |
| No bookmarks appear on a new device | Google Account and Chrome profile | A different profile has a different bookmark set |
| Some data syncs, but bookmarks do not | “Manage what you sync” | Bookmarks may be excluded while other types sync |
| One computer is stale | Chrome update, restart, then a test bookmark | Isolates the device that is not sending or receiving |
| Bookmarks vanished | Stop changing sync settings; verify the HTML backup | Prevents a bad state from spreading while you assess copies |
| Work or school profile has no sync controls | Ask the administrator | Managed-browser policy can control available settings |

## Fix 1: export a bookmark backup first

On desktop Chrome, open **Bookmarks and lists → Bookmark manager → More → Export bookmarks**. Chrome writes an HTML file. Google's [official import and export guide](https://support.google.com/chrome/answer/96816?hl=en) documents the current menu path.

Open the exported file in a browser and spot-check several folders and recent links. Store it somewhere outside the Chrome profile. If recovery becomes necessary, this file is the clearest known-good copy.

You can also inspect it with the [Bookmark File Viewer](/tools/bookmark-file-viewer) or look for repeated URLs with the [Duplicate Bookmark Finder](/tools/duplicate-bookmark-finder) before importing anywhere.

## Fix 2: confirm the same Google Account

On every device, select the profile icon and compare the Google Account email. If the emails differ, decide which library is authoritative before signing out or importing anything.

## Fix 3: confirm the same Chrome profile

On desktop, compare the Chrome profile name as well as the email. A work profile and a personal profile remain separate even on the same computer, and a link opened from another application can land in a different profile window.

Google's [Chrome profile guide](https://support.google.com/chrome/answer/17559054?hl=en) explains that bookmarks and other saved information belong to the selected profile. If the emails or profiles differ, decide which library is authoritative before signing out or importing anything.

## Fix 4: confirm bookmark sync is enabled

Open Chrome settings and find **You and Google → Sync and Google services → Manage what you sync**. If you use customized sync, make sure **Bookmarks** is enabled on every device.

## Fix 5: test each direction with one bookmark

Create a bookmark named with the device and current time, such as `SYNC TEST — LAPTOP — 14:30`. Wait briefly and check another device. Repeat in the other direction. This shows whether the problem affects sending, receiving, or both without risking the library.

## Fix 6: update and restart each Chrome installation

On desktop, open **Help → About Google Chrome** and install any available update, then restart. Update Chrome from the app store on phones and tablets. Retest with a new bookmark after each device restarts.

Do one device at a time and keep notes about which test bookmark appears where. Changing every setting on every device at once makes the result harder to interpret.

## Fix 7: inspect diagnostics without changing data

Advanced users can open `chrome://sync-internals` on the affected desktop profile. Use it as a read-only diagnostic: confirm the signed-in account, look for a current sync error, and check whether the Bookmarks data type is present. Copy the relevant error text before seeking support.

Do not use an old guide's “reset sync” sequence as a routine fix. Chrome's screens and data behavior change over time, and a broad reset is unnecessary when the problem is one account, profile, device, or disabled data type.

## Fix 8: if bookmarks disappeared, pause and compare copies

Keep Chrome open only as needed to inspect the current state. Check another device without forcing a new sync, verify the HTML export, and identify which copy contains the most complete library. If you have more than one HTML export, compare dates and folders before importing.

For a clean restore into Chrome, follow Google's import steps. For a cross-browser library, the same standard HTML file can be used with the [browser-bookmark migration guide](/migrate/browser-bookmarks). Marqly preserves titles, URLs, and folder structure where the file provides them, but original save dates are not preserved and Pro is required for automatic tags. The [Chrome-to-Marqly import guide](/blog/how-to-import-chrome-bookmarks-to-ai) covers that path.

## Prevent the next sync surprise

Keep periodic HTML exports even after sync works. Sync keeps devices aligned; an export gives you a separate restore point. For a larger library, combine that backup habit with a cleanup routine from the [bookmark organization guide](/blog/how-to-organize-bookmarks) and decide whether browser-only storage still fits your needs.

If you move to Marqly, import the browser HTML rather than recreating links manually. Free stores up to 100 bookmarks with keyword search; Pro adds unlimited bookmarks, semantic search, summaries, and automatic tagging. There is no free trial, so use the free plan to assess the manual workflow first.

## Sources checked October 6, 2026

- [Google: get bookmarks and more on all devices](https://support.google.com/chrome/answer/165139?hl=en)
- [Google: import and export Chrome bookmarks](https://support.google.com/chrome/answer/96816?hl=en)
- [Google: create and personalize Chrome profiles](https://support.google.com/chrome/answer/17559054?hl=en)
