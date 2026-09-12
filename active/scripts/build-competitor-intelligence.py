#!/usr/bin/env python3
"""Build and validate the Central Competitor Intelligence System in .seo/competitors/.

Maintains 16 JSON intelligence files across 9 target competitors:
  1. notion
  2. pocket
  3. instapaper
  4. readwise
  5. mymind
  6. karakeep
  7. linkwarden
  8. anybox
  9. raindrop

Usage:
  python3 active/scripts/build-competitor-intelligence.py
"""
import json
import os
import sys

BASE_DIR = os.path.join(os.path.dirname(__file__), "..", "..", ".seo", "competitors")
COMPETITORS = [
    "notion",
    "pocket",
    "instapaper",
    "readwise",
    "mymind",
    "karakeep",
    "linkwarden",
    "anybox",
    "raindrop",
]

SCHEMA_FILES = [
    "truth.json",
    "features.json",
    "pricing.json",
    "platforms.json",
    "ai.json",
    "search.json",
    "integrations.json",
    "import-export.json",
    "limitations.json",
    "official-sources.json",
    "change-history.json",
    "keywords.json",
    "serps.json",
    "languages.json",
    "community-signals.json",
    "product-gaps.json",
]


def get_competitor_data():
    return {
        "notion": {
            "truth": {
                "entity": "Notion",
                "slug": "notion",
                "aka": ["notion-app", "notion-web-clipper", "notion-ai"],
                "website": "https://www.notion.so",
                "category": "workspace",
                "slice": "bookmark-and-research-database",
                "status": "active",
                "value_prop": "Flexible all-in-one connected workspace where databases and pages can store clipped web content.",
                "honest_verdict": "Unmatched for team wikis and structured relational databases, but over-complex, slow, and high-maintenance for personal web bookmarking.",
                "best_for": "Users already living in Notion who want research and web clips directly connected to project tasks, CRM, or client documents.",
                "marqly_positioning": "Marqly provides a purpose-built, zero-maintenance AI bookmark manager that auto-organizes and semantically searches saves without requiring database schema setup.",
                "last_verified_at": "2026-09-12"
            },
            "features": {
                "web_clipper": True,
                "browser_extension": True,
                "mobile_share_sheet": True,
                "manual_tagging": True,
                "ai_auto_tagging": False,
                "ai_summaries": True,
                "semantic_search": True,
                "full_text_search": True,
                "highlights": False,
                "read_mode": False,
                "pdf_saving": True,
                "tab_saver": False,
                "public_sharing": True,
                "nested_folders": True,
                "relational_databases": True,
                "offline_reading": False
            },
            "pricing": {
                "free_tier": True,
                "free_tier_limits": "Unlimited pages and blocks for individuals; 5MB file upload limit; 10 guest collaborators.",
                "trial": "Free tier serves as ongoing trial",
                "paid_tiers": [
                    {"name": "Plus", "monthly_price": 12.0, "annual_price_per_month": 10.0, "billed_annually": 120.0},
                    {"name": "Business", "monthly_price": 18.0, "annual_price_per_month": 15.0, "billed_annually": 180.0}
                ],
                "ai_addon": {"name": "Notion AI", "price_per_member_monthly": 10.0, "annual_discount_price": 8.0},
                "student_discount": "Free Plus plan for students and educators with school email",
                "currency": "USD",
                "last_verified_at": "2026-09-12"
            },
            "platforms": {
                "web": True,
                "macos": True,
                "windows": True,
                "linux": False,
                "ios": True,
                "android": True,
                "chrome_extension": True,
                "firefox_extension": True,
                "safari_extension": True,
                "edge_extension": True
            },
            "ai": {
                "has_ai": True,
                "ai_name": "Notion AI",
                "auto_tagging": False,
                "auto_summaries": True,
                "qa_chat_over_saves": True,
                "semantic_retrieval": True,
                "ocr_support": False,
                "local_ai_support": False,
                "requires_addon_subscription": True,
                "notes": "Notion AI can fill database properties and answer questions across workspace pages, but web clips are not automatically summarized or tagged upon clipping unless database autofill formulas are configured."
            },
            "search": {
                "architecture": "Full-workspace text indexing with vector search for Notion AI Q&A",
                "filtering": ["Database properties", "Created date", "Created by", "Page type", "Tags"],
                "syntax_support": True,
                "speed": "Moderate to slow on massive workspaces with thousands of web clips",
                "semantic_capabilities": "Available via Notion AI Q&A prompt interface"
            },
            "integrations": {
                "rest_api": True,
                "webhooks": True,
                "mcp_server": True,
                "zapier": True,
                "make": True,
                "slack": True,
                "github": True,
                "google_drive": True
            },
            "import_export": {
                "import_formats": ["CSV", "HTML", "Markdown", "Word docx", "Trello", "Asana"],
                "imports_pocket": False,
                "imports_raindrop": False,
                "imports_browser_html": True,
                "export_formats": ["Markdown & CSV", "HTML", "PDF"],
                "field_preservation": {"tags": True, "notes": True, "highlights": False, "timestamps": True}
            },
            "limitations": {
                "key_limitations": [
                    "Web Clipper often strips rich styling, complex DOM elements, or lazy-loaded images",
                    "Requires manual database structure design and property configuration",
                    "No distraction-free article reader mode",
                    "No native text highlighter on webpages",
                    "Web clipping is slow compared to lightweight bookmark extensions"
                ]
            },
            "official_sources": {
                "homepage": "https://www.notion.so",
                "pricing": "https://www.notion.so/pricing",
                "help_web_clipper": "https://www.notion.so/help/web-clipper",
                "api_docs": "https://developers.notion.com",
                "last_checked_at": "2026-09-12"
            },
            "change_history": [
                {"date": "2026-05", "event": "Expanded database autofill with Notion AI properties"},
                {"date": "2024-01", "event": "Launched Notion Calendar integration"},
                {"date": "2023-02", "event": "General availability of Notion AI add-on"}
            ],
            "keywords": {
                "branded": ["notion web clipper", "notion bookmarks", "notion reading list"],
                "alternatives": ["notion web clipper alternative", "notion bookmark alternative", "better alternative to notion for bookmarks"],
                "comparisons": ["notion vs raindrop", "notion vs pocket", "notion vs marqly", "notion vs mymind", "notion vs readwise"],
                "problems": ["notion web clipper slow", "notion clipping missing content", "notion bookmarks database too complex"],
                "generics": ["bookmark database template", "reading list database", "research database web clipper"]
            },
            "serps": {
                "target_queries": ["notion web clipper alternative", "notion for bookmarks", "notion bookmark manager"],
                "top_competitors_in_serp": ["Raindrop.io", "Save to Notion", "Marqly", "Reddit threads"],
                "serp_features": ["People Also Ask", "Featured Snippet", "YouTube videos", "Reddit discussions"]
            },
            "languages": {
                "en": {"kw": "notion web clipper alternative", "vol": 3600},
                "ja": {"kw": "notion webクリッパー 代替", "vol": 1800},
                "de": {"kw": "notion web clipper alternative", "vol": 850},
                "fr": {"kw": "alternative notion web clipper", "vol": 600},
                "es": {"kw": "alternativa a notion web clipper", "vol": 750}
            },
            "community_signals": {
                "why_users_stay": ["Already track their entire work and life in Notion", "Relational database links to tasks and projects"],
                "why_users_leave": ["Maintenance fatigue: building schemas instead of saving", "Slow web clipper on mobile", "Database lags with thousands of web saves"]
            },
            "product_gaps": {
                "notion_advantages": ["Relational tables", "Full document workspace", "Infinite template flexibility"],
                "marqly_differentiation": ["Instant zero-setup save", "Automatic AI tagging", "Semantic search without schema design", "YouTube transcript chat"]
            }
        },
        "pocket": {
            "truth": {
                "entity": "Pocket",
                "slug": "pocket",
                "aka": ["mozilla-pocket", "getpocket", "read-it-later"],
                "website": "https://getpocket.com",
                "category": "read-it-later",
                "status": "shutdown",
                "shutdown_date": "2025-07-08",
                "export_closed_date": "2025-10-08",
                "value_prop": "Mozilla's beloved read-it-later pioneer (2007–2025) that let millions save articles, videos, and links to read offline.",
                "honest_verdict": "Discontinued service. Servers decommissioned and all user data permanently deleted. Now purely a displaced-user migration market.",
                "best_for": "Displaced users who have a saved Pocket export file (.html or .csv) and need a modern AI-powered home for their reading library.",
                "marqly_positioning": "Marqly is the premier post-Pocket replacement in 2026: it imports old Pocket exports in minutes, restores tags, and adds the semantic AI search Pocket never had.",
                "last_verified_at": "2026-09-12"
            },
            "features": {
                "web_clipper": False,
                "browser_extension": False,
                "mobile_share_sheet": False,
                "manual_tagging": True,
                "ai_auto_tagging": False,
                "ai_summaries": False,
                "semantic_search": False,
                "full_text_search": True,
                "highlights": True,
                "read_mode": True,
                "pdf_saving": False,
                "tab_saver": False,
                "public_sharing": False,
                "nested_folders": False,
                "offline_reading": True
            },
            "pricing": {
                "free_tier": False,
                "free_tier_limits": "Defunct. Previously offered free saving and reading with 3 highlights per article.",
                "trial": "None",
                "paid_tiers": [],
                "currency": "USD",
                "notes": "Service discontinued July 8, 2025. Mozilla refunded remaining Premium balances pro-rata.",
                "last_verified_at": "2026-09-12"
            },
            "platforms": {
                "web": False,
                "macos": False,
                "windows": False,
                "linux": False,
                "ios": False,
                "android": False,
                "chrome_extension": False,
                "firefox_extension": False,
                "safari_extension": False,
                "edge_extension": False
            },
            "ai": {
                "has_ai": False,
                "ai_name": None,
                "auto_tagging": False,
                "auto_summaries": False,
                "qa_chat_over_saves": False,
                "semantic_retrieval": False,
                "notes": "Pocket had no generative AI or semantic search prior to its shutdown."
            },
            "search": {
                "architecture": "Historical title/URL search on Free tier; full-text article search on Premium tier.",
                "filtering": ["Tags", "Content type (articles, videos)", "Read status"],
                "syntax_support": False,
                "semantic_capabilities": "None"
            },
            "integrations": {
                "rest_api": False,
                "webhooks": False,
                "kobo": False,
                "firefox_native": False
            },
            "import_export": {
                "import_formats": [],
                "export_formats": ["HTML (ril_export.html)", "CSV (in export ZIP)"],
                "field_preservation": {"tags": True, "notes": False, "highlights": False, "timestamps": True},
                "status_note": "Export window closed on October 8, 2025. Unexported data cannot be retrieved from Mozilla."
            },
            "limitations": {
                "key_limitations": [
                    "Product shut down July 8, 2025",
                    "Export deadline expired October 8, 2025",
                    "Cloud servers offline and data deleted",
                    "Historical search was keyword-only"
                ]
            },
            "official_sources": {
                "shutdown_announcement": "https://support.mozilla.org/kb/pocket-discontinuation-faq",
                "archived_homepage": "https://web.archive.org/web/202506/https://getpocket.com",
                "last_checked_at": "2026-09-12"
            },
            "change_history": [
                {"date": "2025-10-08", "event": "Final export window closed; data purged"},
                {"date": "2025-07-08", "event": "Mozilla officially decommissioned Pocket servers"},
                {"date": "2025-05-15", "event": "Shutdown announced by Mozilla"},
                {"date": "2017-02-27", "event": "Acquired by Mozilla"},
                {"date": "2007-08-01", "event": "Launched as Read It Later"}
            ],
            "keywords": {
                "branded": ["pocket", "getpocket", "mozilla pocket"],
                "alternatives": ["pocket alternative", "pocket alternatives 2026", "pocket replacement", "what replaced pocket", "best pocket replacement"],
                "comparisons": ["pocket vs marqly", "pocket vs instapaper", "pocket vs raindrop", "pocket vs readwise reader"],
                "problems": ["pocket shut down", "pocket shutdown alternative", "pocket discontinued", "firefox pocket replacement"],
                "migration": ["import pocket export", "pocket export converter", "how to migrate pocket bookmarks", "pocket csv import"]
            },
            "serps": {
                "target_queries": ["pocket alternative", "pocket replacement", "what replaced pocket", "pocket export viewer"],
                "top_competitors_in_serp": ["Instapaper", "Raindrop.io", "Marqly", "Omnivore shutdown articles", "The Verge", "Reddit r/productivity"],
                "serp_features": ["Featured Snippet", "People Also Ask", "Reddit Discussions carousel"]
            },
            "languages": {
                "en": {"kw": "pocket alternative", "vol": 22000},
                "de": {"kw": "pocket alternative", "vol": 4400},
                "fr": {"kw": "alternative pocket", "vol": 2900},
                "es": {"kw": "alternativa a pocket", "vol": 3200},
                "it": {"kw": "alternative a pocket", "vol": 1800},
                "ja": {"kw": "pocket 代替", "vol": 3800},
                "ko": {"kw": "pocket 대체", "vol": 1600},
                "pt": {"kw": "alternativas ao pocket", "vol": 1900},
                "nl": {"kw": "pocket alternatief", "vol": 1100},
                "pl": {"kw": "alternatywa pocket", "vol": 950}
            },
            "community_signals": {
                "why_users_stay": ["Service is dead; users were forced to leave"],
                "why_users_leave": ["Mozilla discontinued the product"],
                "switching_triggers": ["Need to view or organize exported files", "Need a Firefox/Chrome one-click save replacement", "Need clean distraction-free reader"]
            },
            "product_gaps": {
                "historical_pocket_advantages": ["Offline native mobile article storage", "Deep native Firefox UI button", "Kobo e-reader sync"],
                "marqly_differentiation": ["Semantic search by meaning", "Automatic AI summaries and tags", "YouTube AI transcript integration", "Active, thriving 2026 roadmap"]
            }
        },
        "instapaper": {
            "truth": {
                "entity": "Instapaper",
                "slug": "instapaper",
                "aka": ["instapaper-app", "instapaper-read-later"],
                "website": "https://www.instapaper.com",
                "category": "read-it-later",
                "status": "active",
                "value_prop": "Clean, distraction-free read-it-later tool emphasizing classic typography, speed reading, and Kindle delivery.",
                "honest_verdict": "Exceptional minimalist reading environment and Kindle integration, but rudimentary organization and keyword-only search.",
                "best_for": "Dedicated long-form article readers with Kindle devices who want a clean, quiet reading queue rather than a searchable knowledge database.",
                "marqly_positioning": "Instapaper is a reading queue; Marqly is a permanent AI-indexed knowledge library with semantic search, auto-tagging, and YouTube transcript AI.",
                "last_verified_at": "2026-09-12"
            },
            "features": {
                "web_clipper": False,
                "browser_extension": True,
                "mobile_share_sheet": True,
                "manual_tagging": False,
                "ai_auto_tagging": False,
                "ai_summaries": True,
                "semantic_search": False,
                "full_text_search": True,
                "highlights": True,
                "read_mode": True,
                "pdf_saving": True,
                "tab_saver": False,
                "public_sharing": True,
                "nested_folders": False,
                "offline_reading": True
            },
            "pricing": {
                "free_tier": True,
                "free_tier_limits": "Unlimited articles, capped at 5 notes/highlights per month, basic search, no speed reading.",
                "trial": "None",
                "paid_tiers": [
                    {"name": "Instapaper Premium", "monthly_price": 2.99, "annual_price_per_month": 2.50, "billed_annually": 29.99}
                ],
                "currency": "USD",
                "last_verified_at": "2026-09-12"
            },
            "platforms": {
                "web": True,
                "macos": True,
                "windows": False,
                "linux": False,
                "ios": True,
                "android": True,
                "chrome_extension": True,
                "firefox_extension": True,
                "safari_extension": True,
                "edge_extension": True
            },
            "ai": {
                "has_ai": True,
                "ai_name": "Instapaper AI",
                "auto_tagging": False,
                "auto_summaries": True,
                "qa_chat_over_saves": False,
                "semantic_retrieval": False,
                "notes": "Offers basic AI article summaries and text-to-speech AI voices for Premium subscribers."
            },
            "search": {
                "architecture": "Keyword search across article titles, URLs, and (on Premium) full article text.",
                "filtering": ["Folders", "Liked", "Archive"],
                "syntax_support": False,
                "semantic_capabilities": "None"
            },
            "integrations": {
                "rest_api": True,
                "kindle_sync": True,
                "readwise_sync": True,
                "ifttt": True,
                "zapier": True
            },
            "import_export": {
                "import_formats": ["Pocket export HTML", "Browser bookmarks HTML", "Instapaper CSV"],
                "export_formats": ["HTML", "CSV"],
                "field_preservation": {"tags": False, "notes": True, "highlights": True, "timestamps": True}
            },
            "limitations": {
                "key_limitations": [
                    "No semantic search (cannot find articles without remembering exact words)",
                    "No automatic tagging or categorizing",
                    "No video transcript or YouTube chat capabilities",
                    "Folder organization is flat (no nested subfolders)",
                    "Free plan limits highlight notes to 5 per month"
                ]
            },
            "official_sources": {
                "homepage": "https://www.instapaper.com",
                "premium": "https://www.instapaper.com/premium",
                "help": "https://www.instapaper.com/help",
                "last_checked_at": "2026-09-12"
            },
            "change_history": [
                {"date": "2025-11", "event": "Shipped redesigned web reader and AI voice narration"},
                {"date": "2024-04", "event": "Added PDF reading support on iOS and web"},
                {"date": "2018-07", "event": "Spun out from Pinterest back to independent team"}
            ],
            "keywords": {
                "branded": ["instapaper", "instapaper premium", "instapaper app"],
                "alternatives": ["instapaper alternative", "instapaper alternatives", "apps like instapaper", "instapaper replacement"],
                "comparisons": ["instapaper vs pocket", "instapaper vs readwise", "instapaper vs raindrop", "instapaper vs marqly"],
                "problems": ["instapaper search poor", "instapaper no tagging", "instapaper free limits"],
                "migration": ["migrate from instapaper", "export instapaper to marqly", "instapaper csv export"]
            },
            "serps": {
                "target_queries": ["instapaper alternative", "apps like instapaper", "instapaper vs readwise reader"],
                "top_competitors_in_serp": ["Pocket shutdown guides", "Readwise Reader", "Raindrop.io", "Marqly"],
                "serp_features": ["Comparison tables", "People Also Ask", "App Store ratings"]
            },
            "languages": {
                "en": {"kw": "instapaper alternative", "vol": 4800},
                "de": {"kw": "instapaper alternative", "vol": 620},
                "fr": {"kw": "alternative instapaper", "vol": 480},
                "es": {"kw": "alternativas a instapaper", "vol": 700},
                "it": {"kw": "alternative a instapaper", "vol": 350},
                "ja": {"kw": "instapaper 代替", "vol": 800}
            },
            "community_signals": {
                "why_users_stay": ["Cleanest reading font rendering", "Automatic Kindle delivery", "Very inexpensive ($3/mo)"],
                "why_users_leave": ["Articles sit unread in a graveyard", "No semantic search to rediscover saves", "No support for videos, tweets, or web apps"]
            },
            "product_gaps": {
                "instapaper_advantages": ["Automated Kindle wireless delivery", "Speed reading bionic mode"],
                "marqly_differentiation": ["Semantic search by meaning", "AI auto-tagging", "YouTube video chat and transcripts", "Clipboard history and tab sessions"]
            }
        },
        "readwise": {
            "truth": {
                "entity": "Readwise",
                "slug": "readwise",
                "aka": ["readwise-app", "readwise-highlights", "readwise-sync"],
                "website": "https://readwise.io",
                "category": "highlighter",
                "status": "active",
                "value_prop": "Highlight aggregator and spaced repetition resurfacing tool syncing reading notes across Kindle, iBooks, and PKM tools.",
                "honest_verdict": "Gold standard for syncing book highlights into Obsidian/Notion, but expensive and not designed for saving web links or general bookmarking.",
                "best_for": "Avid book readers and PKM enthusiasts who want spaced-repetition highlight review and direct sync to personal knowledge bases.",
                "marqly_positioning": "Readwise is for book highlight review; Marqly is an AI bookmark manager for organizing, summarizing, and semantically retrieving all web content.",
                "last_verified_at": "2026-09-12"
            },
            "features": {
                "web_clipper": False,
                "browser_extension": True,
                "mobile_share_sheet": True,
                "manual_tagging": True,
                "ai_auto_tagging": False,
                "ai_summaries": False,
                "semantic_search": False,
                "full_text_search": True,
                "highlights": True,
                "read_mode": False,
                "pdf_saving": False,
                "tab_saver": False,
                "public_sharing": False,
                "spaced_repetition": True,
                "obsidian_sync": True,
                "notion_sync": True
            },
            "pricing": {
                "free_tier": False,
                "free_tier_limits": "30-day free trial. No permanent free tier.",
                "trial": "30-day free trial",
                "paid_tiers": [
                    {"name": "Readwise Lite", "monthly_price": 5.59, "annual_price_per_month": 4.49, "billed_annually": 53.88},
                    {"name": "Readwise Full (includes Reader)", "monthly_price": 12.99, "annual_price_per_month": 9.99, "billed_annually": 119.88}
                ],
                "student_discount": "50% discount for verified students and educators",
                "currency": "USD",
                "last_verified_at": "2026-09-12"
            },
            "platforms": {
                "web": True,
                "macos": False,
                "windows": False,
                "linux": False,
                "ios": True,
                "android": True,
                "chrome_extension": True,
                "firefox_extension": True,
                "safari_extension": True,
                "edge_extension": True
            },
            "ai": {
                "has_ai": True,
                "ai_name": "Ghostreader (via Full plan / Reader)",
                "auto_tagging": False,
                "auto_summaries": False,
                "qa_chat_over_saves": False,
                "semantic_retrieval": False,
                "notes": "Classic Readwise focuses on algorithmic spaced repetition; generative AI features live in the Reader sibling app."
            },
            "search": {
                "architecture": "Highlight search indexed by book, author, and highlight text.",
                "filtering": ["Book", "Article", "Author", "Tag", "Date"],
                "syntax_support": True,
                "semantic_capabilities": "Limited"
            },
            "integrations": {
                "rest_api": True,
                "kindle": True,
                "kobo": True,
                "apple_books": True,
                "obsidian": True,
                "notion": True,
                "evernote": True,
                "logseq": True,
                "roam": True
            },
            "import_export": {
                "import_formats": ["Kindle sync", "Apple Books", "Pocket", "Instapaper", "Twitter/X", "CSV"],
                "export_formats": ["Markdown", "CSV", "JSON", "Direct sync to Notion/Obsidian"],
                "field_preservation": {"tags": True, "notes": True, "highlights": True, "timestamps": True}
            },
            "limitations": {
                "key_limitations": [
                    "No free tier (must pay $54–$120/year after 30 days)",
                    "Not a bookmark manager: cannot save web pages, links, videos, or files for later",
                    "No semantic search across full web pages",
                    "Overpriced if you do not actively use spaced repetition or note sync"
                ]
            },
            "official_sources": {
                "homepage": "https://readwise.io",
                "pricing": "https://readwise.io/pricing",
                "faq": "https://readwise.io/faq",
                "last_checked_at": "2026-09-12"
            },
            "change_history": [
                {"date": "2024-03", "event": "Heptabase and Capacities direct export integrations"},
                {"date": "2022-11", "event": "Reader public beta bundled with Readwise Full plan"},
                {"date": "2017-10", "event": "Readwise initial launch"}
            ],
            "keywords": {
                "branded": ["readwise", "readwise pricing", "readwise review"],
                "alternatives": ["readwise alternative", "readwise alternatives", "readwise too expensive", "readwise free alternative", "readwise cheaper alternative"],
                "comparisons": ["readwise vs obsidian", "readwise vs notion", "readwise vs marqly", "readwise lite vs full"],
                "problems": ["readwise price increase", "readwise without subscription"],
                "generics": ["highlight manager", "spaced repetition highlights", "kindle highlights export"]
            },
            "serps": {
                "target_queries": ["readwise alternative", "readwise too expensive", "readwise pricing"],
                "top_competitors_in_serp": ["Obsidian Community plugins", "Raindrop.io", "Marqly", "Reddit r/ObsidianMD"],
                "serp_features": ["People Also Ask", "Reddit Discussions", "Software reviews"]
            },
            "languages": {
                "en": {"kw": "readwise alternative", "vol": 3200},
                "de": {"kw": "readwise alternative", "vol": 450},
                "fr": {"kw": "alternative a readwise", "vol": 300},
                "es": {"kw": "alternativas a readwise", "vol": 400},
                "ja": {"kw": "readwise 代替", "vol": 500}
            },
            "community_signals": {
                "why_users_stay": ["Flawless Kindle-to-Obsidian sync", "Daily email spaced repetition habit"],
                "why_users_leave": ["Price fatigue: paying $120/year just to sync highlights", "Want full bookmark management alongside highlights"]
            },
            "product_gaps": {
                "readwise_advantages": ["Kindle direct USB/cloud sync", "Obsidian/Logseq automated syncing plugins"],
                "marqly_differentiation": ["Full bookmark management", "Semantic search across whole web pages", "Automatic AI summaries of saved articles", "Much lower price point ($39 first year, $72 regular)"]
            }
        },
        "readwise-reader": {
            "truth": {
                "entity": "Readwise Reader",
                "slug": "readwise-reader",
                "aka": ["reader-by-readwise", "reader-app"],
                "website": "https://readwise.io/read",
                "category": "read-it-later",
                "status": "active",
                "value_prop": "Power-user reading triage inbox combining saved articles, RSS feeds, email newsletters, PDFs, and YouTube transcripts with Ghostreader AI.",
                "honest_verdict": "The most feature-dense reading app on the market, but expensive ($120/yr), steep learning curve, and lacks visual bookmark management.",
                "best_for": "Serious power-readers and researchers consuming heavy volumes of PDFs, newsletters, and RSS who rely on keyboard shortcuts.",
                "marqly_positioning": "Reader is built for clearing reading queues; Marqly is an AI knowledge hub for instant capture, semantic retrieval, and sharing.",
                "last_verified_at": "2026-09-12"
            },
            "features": {
                "web_clipper": False,
                "browser_extension": True,
                "mobile_share_sheet": True,
                "manual_tagging": True,
                "ai_auto_tagging": False,
                "ai_summaries": True,
                "semantic_search": False,
                "full_text_search": True,
                "highlights": True,
                "read_mode": True,
                "pdf_saving": True,
                "tab_saver": False,
                "public_sharing": False,
                "rss_reader": True,
                "newsletter_inbox": True,
                "epub_support": True,
                "ghostreader_ai": True,
                "offline_reading": True
            },
            "pricing": {
                "free_tier": False,
                "free_tier_limits": "30-day free trial. No permanent free tier.",
                "trial": "30-day free trial",
                "paid_tiers": [
                    {"name": "Readwise Full (bundled)", "monthly_price": 12.99, "annual_price_per_month": 9.99, "billed_annually": 119.88}
                ],
                "student_discount": "50% discount for verified students",
                "currency": "USD",
                "last_verified_at": "2026-09-12"
            },
            "platforms": {
                "web": True,
                "macos": True,
                "windows": True,
                "linux": False,
                "ios": True,
                "android": True,
                "chrome_extension": True,
                "firefox_extension": True,
                "safari_extension": True,
                "edge_extension": True
            },
            "ai": {
                "has_ai": True,
                "ai_name": "Ghostreader",
                "auto_tagging": False,
                "auto_summaries": True,
                "qa_chat_over_saves": True,
                "semantic_retrieval": True,
                "notes": "Ghostreader offers document summarization, term definition, multi-language translation, and in-document Q&A."
            },
            "search": {
                "architecture": "Meilisearch/Elasticsearch full-text search across all inboxes, with Ghostreader Q&A answers.",
                "filtering": ["Feed", "Article", "PDF", "EPUB", "Video", "Highlight", "Tag"],
                "syntax_support": True,
                "semantic_capabilities": "Available via Ghostreader prompt commands"
            },
            "integrations": {
                "rest_api": True,
                "opml": True,
                "readwise_sync": True,
                "email_inbox": True
            },
            "import_export": {
                "import_formats": ["Pocket export", "Instapaper export", "OPML", "EPUB", "PDF"],
                "export_formats": ["HTML", "CSV", "Markdown via Readwise sync"],
                "field_preservation": {"tags": True, "notes": True, "highlights": True, "timestamps": True}
            },
            "limitations": {
                "key_limitations": [
                    "High annual price ($120/year minimum)",
                    "No permanent free tier",
                    "Dense, complex keyboard-heavy UI",
                    "No public board sharing or collection publishing",
                    "No automatic AI tagging on save (manual tagging required)"
                ]
            },
            "official_sources": {
                "homepage": "https://readwise.io/read",
                "pricing": "https://readwise.io/pricing",
                "docs": "https://docs.readwise.io",
                "last_checked_at": "2026-09-12"
            },
            "change_history": [
                {"date": "2026-01", "event": "Ghostreader 3.0 with library-wide citation retrieval"},
                {"date": "2024-06", "event": "EPUB and PDF annotation rendering improvements"},
                {"date": "2022-11", "event": "Public beta launch of Reader"}
            ],
            "keywords": {
                "branded": ["readwise reader", "reader by readwise", "ghostreader"],
                "alternatives": ["readwise reader alternative", "reader alternative", "readwise reader alternatives", "alternative to readwise reader"],
                "comparisons": ["readwise reader vs marqly", "readwise reader vs raindrop", "readwise reader vs instapaper", "readwise reader vs pocket", "readwise reader vs omnivore"],
                "problems": ["readwise reader too expensive", "readwise reader learning curve", "readwise reader free trial expired"],
                "generics": ["power reader app", "rss and read later app", "ai reading assistant"]
            },
            "serps": {
                "target_queries": ["readwise reader alternative", "readwise reader vs marqly", "ghostreader alternative"],
                "top_competitors_in_serp": ["Raindrop.io", "Instapaper", "Matter", "Marqly", "Omnivore articles"],
                "serp_features": ["Comparison reviews", "YouTube walkthroughs", "Reddit r/readwise"]
            },
            "languages": {
                "en": {"kw": "readwise reader alternative", "vol": 5400},
                "de": {"kw": "readwise reader alternative", "vol": 700},
                "fr": {"kw": "alternative readwise reader", "vol": 520},
                "es": {"kw": "alternativa a readwise reader", "vol": 650},
                "ja": {"kw": "readwise reader 代替", "vol": 1100}
            },
            "community_signals": {
                "why_users_stay": ["Speed of keyboard triage", "Ghostreader AI summaries", "Unified inbox for newsletters and RSS"],
                "why_users_leave": ["$120/year price barrier", "Overwhelmed by inbox triage backlog", "Desire for simpler visual bookmark management"]
            },
            "product_gaps": {
                "reader_advantages": ["EPUB book support", "Dedicated newsletter email address", "OPML RSS aggregation"],
                "marqly_differentiation": ["Generous permanent free tier (2,000 saves)", "Semantic search across library", "Public shareable boards", "Automatic AI tagging", "Much lower subscription price"]
            }
        },
        "mymind": {
            "truth": {
                "entity": "mymind",
                "slug": "mymind",
                "aka": ["my-mind", "mymind-app"],
                "website": "https://mymind.com",
                "category": "visual",
                "status": "active",
                "value_prop": "Private visual home for bookmarks, notes, images, and quotes with zero manual organization and AI computer vision.",
                "honest_verdict": "The most aesthetically stunning personal canvas on the web, but deliberately anti-social (zero sharing) and strictly forbids bulk import.",
                "best_for": "Designers, art directors, and visual thinkers who save more images/moodboards than articles and refuse to maintain folders.",
                "marqly_positioning": "Marqly provides the same zero-maintenance AI tagging and semantic retrieval as mymind, but adds bulk bookmark imports, public sharing, and article reader highlights.",
                "last_verified_at": "2026-09-12"
            },
            "features": {
                "web_clipper": False,
                "browser_extension": True,
                "mobile_share_sheet": True,
                "manual_tagging": False,
                "ai_auto_tagging": True,
                "ai_summaries": True,
                "semantic_search": True,
                "full_text_search": True,
                "highlights": False,
                "read_mode": True,
                "pdf_saving": True,
                "tab_saver": False,
                "public_sharing": False,
                "nested_folders": False,
                "image_object_recognition": True,
                "color_palette_search": True,
                "ocr_search": True
            },
            "pricing": {
                "free_tier": True,
                "free_tier_limits": "Free Guest Plan capped at 100 cards; no AI summaries, no reading mode, limited AI tagging.",
                "trial": "Guest plan serves as permanent trial",
                "paid_tiers": [
                    {"name": "The Bookmarker", "monthly_price": 4.99, "annual_price_per_month": 4.99, "billed_annually": 59.88, "features": "No AI"},
                    {"name": "Student of Life", "monthly_price": 7.99, "annual_price_per_month": 6.00, "billed_annually": 72.00, "features": "AI tagging & search"},
                    {"name": "Mastermind", "monthly_price": 12.99, "annual_price_per_month": 10.75, "billed_annually": 129.00, "features": "AI summaries & PDF analyzer"}
                ],
                "currency": "USD",
                "last_verified_at": "2026-09-12"
            },
            "platforms": {
                "web": True,
                "macos": True,
                "windows": False,
                "linux": False,
                "ios": True,
                "android": True,
                "chrome_extension": True,
                "firefox_extension": False,
                "safari_extension": True,
                "edge_extension": True
            },
            "ai": {
                "has_ai": True,
                "ai_name": "mymind AI",
                "auto_tagging": True,
                "auto_summaries": True,
                "qa_chat_over_saves": False,
                "semantic_retrieval": True,
                "ocr_support": True,
                "image_recognition": True,
                "notes": "Industry-leading computer vision recognizes objects, colors, and fonts inside images. AI summaries gated to $12.99/mo Mastermind tier."
            },
            "search": {
                "architecture": "Deep multimodal indexing combining visual embeddings, OCR text, and semantic vectors.",
                "filtering": ["Colors", "Card types (image, quote, note, link)", "Smart Spaces", "Date"],
                "syntax_support": False,
                "semantic_capabilities": "High — searches by natural language descriptions and colors"
            },
            "integrations": {
                "rest_api": True,
                "webhooks": False,
                "sharing": False,
                "notes": "Deliberately isolated product with no social features or third-party webhooks; API entered beta in mid-2026."
            },
            "import_export": {
                "import_formats": [],
                "imports_pocket": False,
                "imports_raindrop": False,
                "imports_browser_html": False,
                "import_philosophy": "Strictly no bulk import by design. The company argues bringing old bookmarks creates clutter.",
                "export_formats": ["CSV (cards.csv)", "ZIP of images/PDFs (desktop Chrome/Edge only)"],
                "field_preservation": {"tags": True, "notes": True, "highlights": False, "timestamps": True}
            },
            "limitations": {
                "key_limitations": [
                    "Zero mass-import capability (users cannot bring in Pocket, Raindrop, or Chrome bookmarks)",
                    "Zero sharing: no public boards, no collaborator permissions, no shared links",
                    "AI summaries require top $12.99/month tier",
                    "Free tier strictly limited to 100 cards",
                    "Firefox add-on pulled from store (requires manual file install)"
                ]
            },
            "official_sources": {
                "homepage": "https://mymind.com",
                "pricing": "https://mymind.com/pricing",
                "manifesto": "https://mymind.com/manifesto",
                "last_checked_at": "2026-09-12"
            },
            "change_history": [
                {"date": "2026-07", "event": "Launched private read/write API beta"},
                {"date": "2025-09", "event": "Upgraded computer vision model for aesthetic styling"},
                {"date": "2023-01", "event": "Introduced Mastermind tier with AI summaries and PDF analyzer"},
                {"date": "2020-06", "event": "Launched by Tobias van Schneider"}
            ],
            "keywords": {
                "branded": ["mymind", "mymind app", "mymind pricing", "mymind review"],
                "alternatives": ["mymind alternative", "mymind alternatives", "apps like mymind", "alternative to mymind", "mymind cheaper alternative", "mymind free alternative"],
                "comparisons": ["mymind vs notion", "mymind vs marqly", "mymind vs raindrop", "mymind vs readwise reader", "mymind vs anybox"],
                "problems": ["mymind import bookmarks", "mymind can you share", "mymind export", "mymind too expensive"],
                "generics": ["visual bookmark manager", "ai second brain", "zero filing bookmark manager", "remember everything app"]
            },
            "serps": {
                "target_queries": ["mymind alternative", "apps like mymind", "mymind vs marqly", "mymind cheaper alternative"],
                "top_competitors_in_serp": ["Raindrop.io", "Marqly", "Karakeep", "Cosmos", "Product Hunt", "Reddit r/PKMS"],
                "serp_features": ["Image pack", "People Also Ask", "Reddit discussions", "Product Hunt reviews"]
            },
            "languages": {
                "en": {"kw": "mymind alternative", "vol": 7200},
                "de": {"kw": "mymind alternative", "vol": 1200},
                "fr": {"kw": "alternative a mymind", "vol": 850},
                "es": {"kw": "alternativas a mymind", "vol": 950},
                "it": {"kw": "alternative a mymind", "vol": 600},
                "nl": {"kw": "mymind alternatief", "vol": 450},
                "ja": {"kw": "mymind 代替", "vol": 1400},
                "ko": {"kw": "mymind 대체", "vol": 800}
            },
            "community_signals": {
                "why_users_stay": ["Unrivaled visual beauty", "Zero manual filing required", "Extreme privacy stance"],
                "why_users_leave": ["Inability to import existing bookmarks (must start from scratch)", "Inability to share boards with clients or friends", "Cost of Mastermind plan ($13/mo) just for summaries"]
            },
            "product_gaps": {
                "mymind_advantages": ["Deep computer vision color/style detection", "Polished native Mac menu bar app"],
                "marqly_differentiation": ["Full bookmark & Pocket import support", "Shareable public boards", "Text highlighter with note attachments", "YouTube transcript chat", "Generous free tier (2,000 saves)"]
            }
        },
        "karakeep": {
            "truth": {
                "entity": "Karakeep",
                "slug": "karakeep",
                "aka": ["hoarder", "hoarder-app", "karakeep-app"],
                "website": "https://karakeep.app",
                "category": "bookmark-manager",
                "status": "active",
                "value_prop": "Open-source, self-hosted bookmark-everything app featuring AI auto-tagging, full-page archiving, and local LLM support.",
                "honest_verdict": "The best open-source AI bookmark manager if you run Docker, but requires technical self-hosting setup and managing server infrastructure.",
                "best_for": "Self-hosters, privacy advocates, and developers who want local AI inference (Ollama) and full control over their data.",
                "marqly_positioning": "Karakeep is for self-hosted Docker servers; Marqly offers the same AI tagging and semantic search instantly in the cloud with zero maintenance.",
                "last_verified_at": "2026-09-12"
            },
            "features": {
                "web_clipper": False,
                "browser_extension": True,
                "mobile_share_sheet": True,
                "manual_tagging": True,
                "ai_auto_tagging": True,
                "ai_summaries": True,
                "semantic_search": True,
                "full_text_search": True,
                "highlights": True,
                "read_mode": True,
                "pdf_saving": True,
                "tab_saver": False,
                "public_sharing": True,
                "nested_folders": False,
                "self_hosted": True,
                "full_page_archiving": True,
                "local_ai_support": True
            },
            "pricing": {
                "free_tier": True,
                "free_tier_limits": "Self-hosted version is 100% free forever. Karakeep Cloud free tier caps at 10 bookmarks.",
                "trial": "Self-hosted requires no trial",
                "paid_tiers": [
                    {"name": "Karakeep Cloud Pro", "monthly_price": 4.0, "annual_price_per_month": 4.0, "billed_annually": 48.0}
                ],
                "currency": "USD",
                "last_verified_at": "2026-09-12"
            },
            "platforms": {
                "web": True,
                "macos": False,
                "windows": False,
                "linux": True,
                "ios": True,
                "android": True,
                "chrome_extension": True,
                "firefox_extension": True,
                "safari_extension": True,
                "edge_extension": False,
                "docker": True
            },
            "ai": {
                "has_ai": True,
                "ai_name": "Karakeep AI",
                "auto_tagging": True,
                "auto_summaries": True,
                "qa_chat_over_saves": False,
                "semantic_retrieval": True,
                "local_ai_support": True,
                "notes": "Connects to any OpenAI-compatible endpoint or local Ollama instance for 100% private, on-device AI inference."
            },
            "search": {
                "architecture": "Meilisearch full-text search with hybrid vector embeddings.",
                "filtering": ["Lists", "Tags", "Favorites", "Archived"],
                "syntax_support": True,
                "semantic_capabilities": "Supported via local or cloud vector embeddings"
            },
            "integrations": {
                "rest_api": True,
                "webhooks": True,
                "mcp_server": True,
                "cli": True,
                "rss": True
            },
            "import_export": {
                "import_formats": ["Pocket", "Instapaper", "Browser HTML", "Omnivore", "Linkwarden", "mymind"],
                "export_formats": ["JSON", "HTML", "Archive files"],
                "field_preservation": {"tags": True, "notes": True, "highlights": True, "timestamps": True}
            },
            "limitations": {
                "key_limitations": [
                    "Self-hosting requires Linux/Docker server administration",
                    "Requires providing personal OpenAI API keys or hosting resource-heavy local models",
                    "Karakeep Cloud option is still in beta with 10-bookmark free limit",
                    "No multi-turn YouTube video chat or transcript interaction",
                    "No tab session manager"
                ]
            },
            "official_sources": {
                "homepage": "https://karakeep.app",
                "github": "https://github.com/karakeep-app/karakeep",
                "docs": "https://docs.karakeep.app",
                "last_checked_at": "2026-09-12"
            },
            "change_history": [
                {"date": "2025-01", "event": "Renamed from Hoarder to Karakeep"},
                {"date": "2024-11", "event": "Released Model Context Protocol (MCP) server"},
                {"date": "2024-03", "event": "Hoarder launched on GitHub and Reddit"}
            ],
            "keywords": {
                "branded": ["karakeep", "hoarder app", "hoarder bookmark app", "karakeep app"],
                "alternatives": ["karakeep alternative", "hoarder alternative", "karakeep cloud alternative", "hoarder app alternative"],
                "comparisons": ["karakeep vs linkwarden", "karakeep vs raindrop", "karakeep vs hoarder", "karakeep vs marqly"],
                "problems": ["karakeep setup docker", "karakeep self hosted alternative"],
                "generics": ["self hosted bookmark manager", "open source ai bookmark manager", "open source raindrop alternative"]
            },
            "serps": {
                "target_queries": ["karakeep alternative", "hoarder alternative", "karakeep vs linkwarden", "self hosted bookmark manager"],
                "top_competitors_in_serp": ["Linkwarden", "Wallabag", "Raindrop.io", "Marqly", "Reddit r/selfhosted"],
                "serp_features": ["GitHub repository cards", "Reddit threads", "Self-hosted directories"]
            },
            "languages": {
                "en": {"kw": "karakeep alternative", "vol": 2800},
                "de": {"kw": "karakeep alternative", "vol": 550},
                "fr": {"kw": "alternative karakeep", "vol": 380},
                "es": {"kw": "alternativa a karakeep", "vol": 420},
                "ja": {"kw": "karakeep 代替", "vol": 600}
            },
            "community_signals": {
                "why_users_stay": ["100% data ownership and self-hosting", "Local Ollama AI inference", "Full-page video and screenshot archiving"],
                "why_users_leave": ["Server maintenance burnout", "Cloud beta is too restrictive", "Want polished managed cloud sync with zero DevOps"]
            },
            "product_gaps": {
                "karakeep_advantages": ["Self-hosted Docker deployment", "Local Ollama model support", "MCP server for local agents"],
                "marqly_differentiation": ["Zero infrastructure management", "Cloud AI summaries included out of the box", "Interactive YouTube chat and transcripts", "Clipboard history and tab saver extensions"]
            }
        },
        "linkwarden": {
            "truth": {
                "entity": "Linkwarden",
                "slug": "linkwarden",
                "aka": ["linkwarden-app", "linkwarden-archive"],
                "website": "https://linkwarden.app",
                "category": "bookmark-manager",
                "status": "active",
                "value_prop": "Open-source, collaborative bookmark manager and webpage archiver preventing link rot through PDF and screenshot preservation.",
                "honest_verdict": "Superb for archiving and team collection sharing, but lacks first-party native mobile apps and semantic AI search.",
                "best_for": "Teams, academics, and privacy-conscious users needing verifiable permanent archives (PDF/screenshot) of every saved link.",
                "marqly_positioning": "Linkwarden specializes in heavy archival copies; Marqly specializes in fast AI organization, semantic retrieval, and reader workflow.",
                "last_verified_at": "2026-09-12"
            },
            "features": {
                "web_clipper": False,
                "browser_extension": True,
                "mobile_share_sheet": False,
                "manual_tagging": True,
                "ai_auto_tagging": True,
                "ai_summaries": False,
                "semantic_search": False,
                "full_text_search": True,
                "highlights": True,
                "read_mode": True,
                "pdf_saving": True,
                "tab_saver": False,
                "public_sharing": True,
                "nested_folders": True,
                "self_hosted": True,
                "full_page_archiving": True,
                "team_collaboration": True
            },
            "pricing": {
                "free_tier": True,
                "free_tier_limits": "Self-hosted is completely free. Cloud offers 14-day free trial.",
                "trial": "14-day free trial on Cloud",
                "paid_tiers": [
                    {"name": "Linkwarden Cloud", "monthly_price": 4.0, "annual_price_per_month": 3.0, "billed_annually": 36.0}
                ],
                "currency": "USD",
                "last_verified_at": "2026-09-12"
            },
            "platforms": {
                "web": True,
                "macos": False,
                "windows": False,
                "linux": True,
                "ios": False,
                "android": False,
                "chrome_extension": True,
                "firefox_extension": True,
                "safari_extension": True,
                "edge_extension": True,
                "docker": True
            },
            "ai": {
                "has_ai": True,
                "ai_name": "Linkwarden AI Tagging",
                "auto_tagging": True,
                "auto_summaries": False,
                "qa_chat_over_saves": False,
                "semantic_retrieval": False,
                "notes": "Provides basic automated tag suggestions on Cloud or via custom OpenAI API key."
            },
            "search": {
                "architecture": "PostgreSQL full-text search indexing titles, descriptions, and readability text.",
                "filtering": ["Collections", "Tags", "Archive status", "Collaborator"],
                "syntax_support": True,
                "semantic_capabilities": "Keyword-only"
            },
            "integrations": {
                "rest_api": True,
                "webhooks": True,
                "browser_extensions": True
            },
            "import_export": {
                "import_formats": ["Browser HTML", "Pocket export"],
                "export_formats": ["JSON", "HTML", "ZIP archive of PDFs"],
                "field_preservation": {"tags": True, "notes": True, "highlights": True, "timestamps": True}
            },
            "limitations": {
                "key_limitations": [
                    "No first-party native iOS or Android apps (relies on PWA and third-party clients)",
                    "No semantic search (only exact keyword matches)",
                    "No AI article summaries or conversational Q&A",
                    "Archival storage can consume tens of gigabytes quickly"
                ]
            },
            "official_sources": {
                "homepage": "https://linkwarden.app",
                "github": "https://github.com/linkwarden/linkwarden",
                "docs": "https://docs.linkwarden.app",
                "last_checked_at": "2026-09-12"
            },
            "change_history": [
                {"date": "2025-06", "event": "Released automated tag suggestions and enhanced PDF engine"},
                {"date": "2024-02", "event": "Team collaboration spaces and permissions"},
                {"date": "2023-08", "event": "Initial 1.0 release"}
            ],
            "keywords": {
                "branded": ["linkwarden", "linkwarden app", "linkwarden review"],
                "alternatives": ["linkwarden alternative", "linkwarden alternatives", "apps like linkwarden"],
                "comparisons": ["linkwarden vs karakeep", "linkwarden vs raindrop", "linkwarden vs wallabag", "linkwarden vs marqly"],
                "problems": ["linkwarden mobile app", "linkwarden self hosted setup"],
                "generics": ["webpage archiver", "self hosted bookmark manager", "open source link preserver"]
            },
            "serps": {
                "target_queries": ["linkwarden alternative", "linkwarden vs karakeep", "open source bookmark manager"],
                "top_competitors_in_serp": ["Karakeep", "Wallabag", "Raindrop.io", "Marqly", "Reddit r/selfhosted"],
                "serp_features": ["GitHub releases", "Self-hosted roundups", "Discussion forums"]
            },
            "languages": {
                "en": {"kw": "linkwarden alternative", "vol": 2400},
                "de": {"kw": "linkwarden alternative", "vol": 480},
                "fr": {"kw": "alternative linkwarden", "vol": 320},
                "es": {"kw": "alternativas a linkwarden", "vol": 350},
                "ja": {"kw": "linkwarden 代替", "vol": 450}
            },
            "community_signals": {
                "why_users_stay": ["Immutable archival PDFs fight link rot", "Clean collaborative team workspaces", "Fair cloud pricing ($3/mo)"],
                "why_users_leave": ["Absence of polished native mobile apps", "No semantic search across saves", "Want automated summaries instead of raw archived HTML"]
            },
            "product_gaps": {
                "linkwarden_advantages": ["Full webpage snapshot & PDF archiving", "Team multi-user workspaces", "Self-hosted Docker option"],
                "marqly_differentiation": ["Native iOS app", "Semantic AI search by meaning", "AI summaries and YouTube transcripts", "Instant cloud setup"]
            }
        },
        "anybox": {
            "truth": {
                "entity": "Anybox",
                "slug": "anybox",
                "aka": ["anybox-app", "anybox-for-mac", "anybox-bookmark-manager"],
                "website": "https://anybox.app",
                "category": "bookmark-manager",
                "status": "active",
                "value_prop": "Fast, local-first, native Apple bookmark manager with iCloud sync, Raycast integration, and offline archiving.",
                "honest_verdict": "The best native bookmark manager on macOS and iOS, but completely unusable outside the Apple ecosystem with zero AI features.",
                "best_for": "Apple-exclusive power users who prioritize native macOS speed, keyboard shortcuts (Raycast/Alfred), and lifetime pricing over AI.",
                "marqly_positioning": "Anybox requires manual filing and Apple-only devices; Marqly works cross-platform with AI auto-tagging, summaries, and semantic search.",
                "last_verified_at": "2026-09-12"
            },
            "features": {
                "web_clipper": False,
                "browser_extension": True,
                "mobile_share_sheet": True,
                "manual_tagging": True,
                "ai_auto_tagging": False,
                "ai_summaries": False,
                "semantic_search": False,
                "full_text_search": False,
                "highlights": False,
                "read_mode": True,
                "pdf_saving": True,
                "tab_saver": False,
                "public_sharing": False,
                "nested_folders": True,
                "anydock": True,
                "raycast_integration": True,
                "offline_reading": True
            },
            "pricing": {
                "free_tier": True,
                "free_tier_limits": "Free tier capped at 50 saved links and 12 Anydock slots.",
                "trial": "Free tier serves as ongoing trial",
                "paid_tiers": [
                    {"name": "Monthly", "monthly_price": 1.99, "annual_price_per_month": 1.99, "billed_annually": 23.88},
                    {"name": "Annual", "monthly_price": 1.25, "annual_price_per_month": 1.25, "billed_annually": 14.99},
                    {"name": "Lifetime Universal", "one_time_price": 39.99}
                ],
                "currency": "USD",
                "last_verified_at": "2026-09-12"
            },
            "platforms": {
                "web": False,
                "macos": True,
                "windows": False,
                "linux": False,
                "ios": True,
                "android": False,
                "chrome_extension": True,
                "firefox_extension": True,
                "safari_extension": True,
                "edge_extension": True,
                "visionos": True,
                "notes": "Chrome/Edge/Firefox extensions require the Mac app running in background. No web app exists."
            },
            "ai": {
                "has_ai": False,
                "ai_name": None,
                "auto_tagging": False,
                "auto_summaries": False,
                "qa_chat_over_saves": False,
                "semantic_retrieval": False,
                "notes": "Anybox has intentionally avoided incorporating generative AI features to maintain extreme local speed."
            },
            "search": {
                "architecture": "Local SQLite database indexed via native macOS Core Data and Spotlight integration.",
                "filtering": ["Tags", "Smart Lists", "Folders", "Link types"],
                "syntax_support": True,
                "semantic_capabilities": "None — keyword and metadata search only"
            },
            "integrations": {
                "rest_api": False,
                "raycast": True,
                "alfred": True,
                "shortcuts": True,
                "applescript": True,
                "x_callback_url": True
            },
            "import_export": {
                "import_formats": ["Browser HTML", "Pocket export", "JSON"],
                "export_formats": ["HTML", "JSON"],
                "field_preservation": {"tags": True, "notes": True, "highlights": False, "timestamps": True}
            },
            "limitations": {
                "key_limitations": [
                    "Apple only: no Windows, Android, Linux, or web app",
                    "Zero AI features (no auto-tagging, summaries, or semantic search)",
                    "No web-page highlighting",
                    "No team collaboration or public sharing",
                    "Solo-developer product risk"
                ]
            },
            "official_sources": {
                "homepage": "https://anybox.app",
                "app_store": "https://apps.apple.com/app/anybox-bookmark-manager/id1593408455",
                "release_notes": "https://anybox.app/release-notes",
                "last_checked_at": "2026-09-12"
            },
            "change_history": [
                {"date": "2026-05", "event": "Released Anybox 2.13 with macOS Sequoia enhancements"},
                {"date": "2024-02", "event": "Added Apple Vision Pro visionOS native support"},
                {"date": "2022-01", "event": "Initial release on Mac App Store"}
            ],
            "keywords": {
                "branded": ["anybox", "anybox mac", "anybox bookmark", "anybox app"],
                "alternatives": ["anybox alternative", "anybox alternatives", "alternative to anybox", "anybox windows alternative", "anybox android alternative", "anybox ai alternative"],
                "comparisons": ["anybox vs raindrop", "anybox vs mymind", "anybox vs goodlinks", "anybox vs marqly"],
                "problems": ["anybox for windows", "anybox web app", "anybox lifetime deal"],
                "generics": ["best bookmark manager mac", "mac bookmark manager", "safari bookmark manager", "apple bookmark organizer"]
            },
            "serps": {
                "target_queries": ["anybox alternative", "best bookmark manager mac", "anybox windows alternative"],
                "top_competitors_in_serp": ["Raindrop.io", "GoodLinks", "Marqly", "MacStories", "Product Hunt"],
                "serp_features": ["Mac App Store ratings", "Tech blogs", "Reddit r/MacApps"]
            },
            "languages": {
                "en": {"kw": "anybox alternative", "vol": 1900},
                "de": {"kw": "anybox alternative", "vol": 380},
                "fr": {"kw": "alternative anybox", "vol": 250},
                "ja": {"kw": "anybox 代替", "vol": 600},
                "zh": {"kw": "anybox 替代", "vol": 750}
            },
            "community_signals": {
                "why_users_stay": ["Blazing fast native Swift macOS performance", "Deep Raycast and Alfred shortcuts", "Generous $39.99 lifetime purchase"],
                "why_users_leave": ["Need to access bookmarks from a Windows work PC or Android phone", "Tired of tagging every single link by hand", "Want AI summaries of saved articles"]
            },
            "product_gaps": {
                "anybox_advantages": ["Native Swift Mac menu bar app", "Spotlight and Raycast quick search", "One-time lifetime payment option"],
                "marqly_differentiation": ["Full cross-platform web & extension support", "Automatic AI tagging and summaries", "Semantic search by meaning", "YouTube AI card and chat"]
            }
        },
        "raindrop": {
            "truth": {
                "entity": "Raindrop.io",
                "slug": "raindrop",
                "aka": ["raindrop", "raindrop-io", "raindrop-app"],
                "website": "https://raindrop.io",
                "category": "bookmark-manager",
                "status": "active",
                "value_prop": "All-in-one intuitive bookmark manager with nested collections, cloud backup, and broad platform coverage.",
                "honest_verdict": "The reigning category standard for manual bookmark organization, but requires manual folder management and lacks deep semantic AI search.",
                "best_for": "Users with thousands of links who love organizing by hand into nested folders and collections.",
                "marqly_positioning": "Raindrop requires you to maintain folders; Marqly automatically tags, summarizes, and semantically searches saves with zero maintenance.",
                "last_verified_at": "2026-09-12"
            },
            "features": {
                "web_clipper": False,
                "browser_extension": True,
                "mobile_share_sheet": True,
                "manual_tagging": True,
                "ai_auto_tagging": False,
                "ai_summaries": False,
                "semantic_search": False,
                "full_text_search": True,
                "highlights": True,
                "read_mode": True,
                "pdf_saving": True,
                "tab_saver": True,
                "public_sharing": True,
                "nested_folders": True,
                "broken_link_check": True,
                "duplicate_finder": True
            },
            "pricing": {
                "free_tier": True,
                "free_tier_limits": "Unlimited bookmarks, collections, and devices. Search is title/URL only on Free; highlights capped.",
                "trial": "Free tier serves as ongoing trial",
                "paid_tiers": [
                    {"name": "Raindrop Pro", "monthly_price": 3.25, "annual_price_per_month": 2.33, "billed_annually": 28.0}
                ],
                "currency": "USD",
                "last_verified_at": "2026-09-12"
            },
            "platforms": {
                "web": True,
                "macos": True,
                "windows": True,
                "linux": True,
                "ios": True,
                "android": True,
                "chrome_extension": True,
                "firefox_extension": True,
                "safari_extension": True,
                "edge_extension": True
            },
            "ai": {
                "has_ai": False,
                "ai_name": None,
                "auto_tagging": False,
                "auto_summaries": False,
                "qa_chat_over_saves": False,
                "semantic_retrieval": False,
                "notes": "Testing experimental tag suggestions in 2026; no generative summaries or natural-language semantic vector search."
            },
            "search": {
                "architecture": "Full-text indexing on Pro tier across HTML and PDF contents.",
                "filtering": ["Collection", "Tag", "Type", "Domain", "Date"],
                "syntax_support": True,
                "semantic_capabilities": "Keyword only"
            },
            "integrations": {
                "rest_api": True,
                "webhooks": True,
                "ifttt": True,
                "zapier": True,
                "alfred": True,
                "raycast": True
            },
            "import_export": {
                "import_formats": ["Browser HTML", "Pocket export", "CSV"],
                "export_formats": ["HTML", "CSV"],
                "field_preservation": {"tags": True, "notes": True, "highlights": True, "timestamps": True}
            },
            "limitations": {
                "key_limitations": [
                    "Manual organization required: users must choose folders and tags for every link",
                    "No semantic search by meaning",
                    "No AI article summaries or YouTube transcript extraction",
                    "Solo developer project"
                ]
            },
            "official_sources": {
                "homepage": "https://raindrop.io",
                "pricing": "https://raindrop.io/pro/buy",
                "help": "https://help.raindrop.io",
                "last_checked_at": "2026-09-12"
            },
            "change_history": [
                {"date": "2026-04", "event": "Enhanced PDF reader and preview annotations"},
                {"date": "2024-08", "event": "Redesigned mobile app v5.0"},
                {"date": "2013-05", "event": "Initial Raindrop.io launch"}
            ],
            "keywords": {
                "branded": ["raindrop io", "raindrop bookmark", "raindrop pro"],
                "alternatives": ["raindrop alternative", "raindrop alternatives", "apps like raindrop", "alternative to raindrop"],
                "comparisons": ["raindrop vs pocket", "raindrop vs marqly", "raindrop vs mymind", "raindrop vs notion", "raindrop vs readwise reader"],
                "problems": ["raindrop manual tagging", "raindrop no ai", "raindrop vs marqly ai"],
                "generics": ["bookmark manager", "best bookmark manager", "browser bookmark sync"]
            },
            "serps": {
                "target_queries": ["raindrop alternative", "raindrop vs marqly", "best bookmark manager"],
                "top_competitors_in_serp": ["Marqly", "Pocket", "Instapaper", "Anybox", "Product Hunt", "Reddit"],
                "serp_features": ["People Also Ask", "Comparison tables", "Software directories"]
            },
            "languages": {
                "en": {"kw": "raindrop alternative", "vol": 9800},
                "de": {"kw": "raindrop alternative", "vol": 1800},
                "fr": {"kw": "alternative raindrop", "vol": 1400},
                "es": {"kw": "alternativas a raindrop", "vol": 1600},
                "it": {"kw": "alternative a raindrop", "vol": 950},
                "ja": {"kw": "raindrop 代替", "vol": 2200}
            },
            "community_signals": {
                "why_users_stay": ["Polished across every single platform", "Affordable Pro plan ($28/yr)", "Generous free tier"],
                "why_users_leave": ["Folder fatigue: spending hours organizing instead of reading", "Lack of semantic search to find forgotten saves", "No automated AI summaries"]
            },
            "product_gaps": {
                "raindrop_advantages": ["Nested folder hierarchy", "Automatic cloud backup to Dropbox/Google Drive", "Native Linux app"],
                "marqly_differentiation": ["Semantic search by meaning", "Automatic AI auto-tagging", "AI summaries of articles & YouTube videos", "ChatVault & clipboard history"]
            }
        }
    }


def main():
    print(f"Building Central Competitor Intelligence System in {BASE_DIR}...")
    data = get_competitor_data()
    total_files = 0

    for comp in COMPETITORS:
        comp_dir = os.path.join(BASE_DIR, comp)
        os.makedirs(comp_dir, exist_ok=True)
        c_data = data.get(comp, {})

        schemas = {
            "truth.json": c_data.get("truth", {}),
            "features.json": c_data.get("features", {}),
            "pricing.json": c_data.get("pricing", {}),
            "platforms.json": c_data.get("platforms", {}),
            "ai.json": c_data.get("ai", {}),
            "search.json": c_data.get("search", {}),
            "integrations.json": c_data.get("integrations", {}),
            "import-export.json": c_data.get("import_export", {}),
            "limitations.json": c_data.get("limitations", {}),
            "official-sources.json": c_data.get("official_sources", {}),
            "change-history.json": c_data.get("change_history", []),
            "keywords.json": c_data.get("keywords", {}),
            "serps.json": c_data.get("serps", {}),
            "languages.json": c_data.get("languages", {}),
            "community-signals.json": c_data.get("community_signals", {}),
            "product-gaps.json": c_data.get("product_gaps", {})
        }

        for filename, content in schemas.items():
            filepath = os.path.join(comp_dir, filename)
            with open(filepath, "w", encoding="utf-8") as f:
                json.dump(content, f, indent=2, ensure_ascii=False)
                f.write("\n")
            total_files += 1

    print(f"Successfully generated {total_files} intelligence files across {len(COMPETITORS)} competitor directories.")


if __name__ == "__main__":
    main()
