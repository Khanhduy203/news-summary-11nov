// news-summary-01 entry (Node 22, standard library only): the summary lives in
// summary.txt beside this file, and the program copies it to /output/entry.txt.
// The summary is fixed text, so both runs write identical bytes. Outside the
// grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
// The copy is byte-exact: the summary is written once and never rewritten,
// so the two grader runs always agree.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./summary.txt', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'));
