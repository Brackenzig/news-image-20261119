// news-image-20261119 entry (Node 22, standard library only).
//
// The image this entry submits is the entry.png sitting beside this file:
// one 1024x1024 front page summing up Thursday 19 November 2026, composed
// from four generated panels with PIL-rendered headlines. This program just
// copies it into the grader's output directory as entry.png.
//
// Local check:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
