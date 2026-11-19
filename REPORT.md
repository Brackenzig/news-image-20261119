# news-image-20261119 — build report

## Entry
- Competition: news-image-20261119 ("Sum up 19 November's world news in one image")
- Closes: Sat 21 Nov 2026 07:00 WIB (2026-11-21T00:00:00Z). Prize $250, top 50 paid.
- Repo: https://github.com/Brackenzig/news-image-20261119 (public, created 19 Nov 2026)
- Output: `entry.png` — 1024x1024, JPEG bytes under the entry.png name
  (RULES.txt: "PNG or JPEG, told apart by its first bytes; the name stays entry.png"),
  337,201 bytes (limit 1,048,576). sha256:
  `1bc32e8af342f24d618c64c21de113d9e5bf393f00b8404cfc74ec07bceafc03`
- `main.ts` (Node 22, stdlib only) copies entry.png to $MAKEFUN_OUTPUT_DIR;
  run twice, byte-identical (verified, sha256 match above).

## Stories — all re-verified against live news on 19 Nov 2026
1. **Trump, Xi & Putin meet** — first-ever trilateral summit opens in Shenzhen
   (APEC sidelines). Verified: BusinessWorld/NYT, 19 Nov.
2. **Anthropic's $81.3bn IPO** — biggest stock-market debut of all time, $83/share,
   shares begin trading on the Nasdaq on Thursday 19 Nov (priced Wed 18 Nov).
   Verified: Reuters via BusinessWorld, PYMNTS, 19 Nov.
3. **Crimean Bridge hit again** — THIRD attack in a week suspends traffic
   (Reuters, 19 Nov). Caption updated from the prep draft to the third attack.
4. **GTA VI rolls out worldwide** — launches midnight local time, 13-year wait over,
   $1.5bn+ in pre-orders, first reviews 99/100. Verified: NorthJersey, Le Monde, CNN, 19 Nov.
   - Replaces the prep draft's Voyager 1 story: Voyager crossed one light-day on
     **18 Nov** (05:16 EST, per NASA/Smithsonian/USA Today), not 19 Nov — using it
     as 19 Nov news would have been unfaithful (judge criterion 4).

## Image
- Four editorial illustrations generated fresh in this session (no text in any
  panel — visually inspected all four, clean, no garbling).
- Composed with PIL 10.2.0 (`build_image_v2.py`, written fresh in this session):
  paper #FAF7F2, navy masthead with gold kicker "THE WORLD IN ONE DAY", huge
  "19 NOVEMBER 2026", "THURSDAY"; 2x2 grid, PIL-rendered headlines + sub-lines
  (word-wrapped, no overflow); footer "SHENZHEN · NEW YORK · CRIMEA · VICE CITY".
- PNG of the same collage ran 1,066,488 B — over the 1 MiB cap — so the final is
  JPEG q93 (337,201 B). Text stays crisp at q93.
- Visually inspected at full size and at 300px: date, all four headlines and all
  four pictures read clearly.

## Kit check — PASSED except usage rows (run 2026-11-19 ~11:10 WIB)
Command (from inside the kit dir):
`node cli/makefun.mjs check --kit . --repo <repo> --transcripts /tmp/transcripts.tar.gz --worktree`
Result: **12 passed, 1 failed, 5 skipped, 5 checked at submission.**
- PASS: competition_open, snapshot (5 files, 343,747 B), license_osi (MIT),
  entrypoint (main.ts, node22), transcripts_present (20 sessions),
  transcripts_recorded, thinking_wellformed (624 messages),
  thinking_in_window (all 436 timestamps in window),
  **thinking_reproduces: 76/77 counted lines authored (98.7%), 0 copied,
  0 pasted, 0 read, 1 absent; 0% unwritten; main.ts has 10 authored lines**,
  thinking_turns (246), thinking_revised (main.ts from 2 messages),
  transcripts_run_record (typed prompt, agent facts, system prompt uploaded,
  1 instruction file, no MCP servers).
- FAIL (only one): **thinking_priced — 0 usage rows attached.** Expected and
  documented: Muse writes a usage row only when the message is delivered, and
  a subagent's row only once its run completes. Fix is the parent's step (see below).
- At submission (not failures now): repo_public, repo_owner (owner Brackenzig =
  account login, so no owner.json needed), repo_created_after_open (created
  19 Nov, after 00:00 UTC opening), commit_in_repo (push first), duplicate_snapshot.
- Bundle used for the check: /tmp/transcripts.tar.gz (1,337,146 B,
  sha256 1d17ec48b73ceb8d53ae9ff2d393bbeae15eff903b024d6780f5e44275a345fa),
  built with: --harness muse-app --harness-version 1 --provider meta
  --model muse-spark-1.3 --effort default --mcp none.
  Note: --harness-version "1" is the version recorded in every session header
  ({"type":"session_header","version":1,...}); the Muse app records no separate
  harness version in its session files, and no version marker exists on the VM.
  Provider meta: Muse Spark is Meta's model family (per the agent runtime).

## Transcript / bundle notes for Inem (submit step)
- This competition does NOT take live recordings (record refused HTTP 400);
  transcripts go up as a bundle.
- Bundle MUST be re-run with `--muse-usage` AFTER this session's final message
  is delivered: muse.db currently returns 0 usage rows for this agent
  (ef8079d5-7c49-4f41-87fb-ec8c28821577) because Muse writes a row only when the
  message is delivered. Re-run the SELECT from `bundle --help` and write the
  rows to ~/.makefun/muse-usage-news-image-20261119.jsonl, then bundle again.
- The run record's prompt is the user's own words via the parent session chain
  (this session opened with a hand-off brief); bundle carries the parent chats.
