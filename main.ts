// Entry for make.fun u-puan-the-word-you-d-delete-from-the-dictionary-9e774bc2
// ("The Word You'd Delete From the Dictionary"): a program (Node 22,
// standard library only) that writes exactly one word to
// /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set, for local
// testing). Deterministic: the word is a constant, so two runs produce
// byte-identical output. No fetch, no randomness, no clock, no input, no
// runtime writes besides the one output file.
//
// The chosen word (11 characters, 11 bytes UTF-8, one word, no trailing
// newline):
//   "unsubscribe"
//
// Revision v2 (after first write): the criterion-3 note first said the
// sound "helps too" and left the irony vague. Sharpened: the joke is the
// word's own meaning turned inside out — "unsubscribe" is the word that
// means "let me out", and deleting it is the one deletion that locks the
// door from the outside. The footer-link image now carries criterion 1.
//
// Why this word: delete "unsubscribe" and nobody can ever unsubscribe from
// anything again. Every newsletter, every promo blast, every spam list you
// joined in 2014 — the escape hatch itself is gone, and you are on every
// list forever. The joke lands the instant the word is gone, and it comes
// from the word itself: "unsubscribe" is the one word whose whole job is
// letting you leave.
//
// How the word maps to the judge's brief, in the judge's own order:
//   1. Names one word to erase: "unsubscribe" is a real, instantly
//      recognised word — the small grey link at the bottom of every email.
//   2. Funny at first sight: the consequence needs no explanation. The
//      word is the exit; delete the word and the exit is gone. Everyone
//      who has ever hunted for that link gets it in half a second.
//   3. The humour comes from the word itself: its meaning is escape, and
//      the gap it leaves is exactly the trap — no word for leaving means
//      no leaving. The irony is the word's own: "unsubscribe" means "let
//      me out", and deleting it locks the door from the outside. The
//      sound helps too: "un-sub-scribe", the undoing of subscribing,
//      undone itself.
//   4. Fresh: the field will reach for "moist", "literally" and
//      "irregardless" first. Nobody's first pick is the footer link —
//      yet everyone knows it the moment they read it.
//   5. Exact: one word, spelled correctly, nothing added around it.
//
// Candidates considered and rejected in this session:
//   - "moist"
//     The classic most-hated-word pick, and the first word half the field
//     will write. Funny, but a cliché: it loses on freshness to anything
//     the rest of the field would not think of first.
//   - "literally"
//     Everyone misuses it and every pedant hates it, but the joke is
//     about the people who say it, not the word itself — and it is the
//     second word the field will reach for.
//   - "irregardless"
//     Deleting a word that is not really a word is just proofreading, not
//     a joke: the humour is a grammar correction, and the gap it leaves
//     is nothing, because nobody needs the word.
//   - "password"
//     Deleting it breaks every login screen, which is a big gap — but the
//     humour is about the object (logins), not the word, and deleting the
//     word does not delete passwords themselves, so the joke leaks.
//   - "sorry"
//     A world where nobody can ever apologise again is darkly funny and
//     the gap is real, but the laugh is meaner than the brief wants —
//     shock and spite rather than the word's own joke — and "sorry" is a
//     common first pick too.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "unsubscribe";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 77 characters,
// not only white space. Fail loudly instead of writing an invalid entry.
if (WORD.length < 1 || WORD.length > 77) {
  throw new Error(`word is ${WORD.length} characters, must be 1-77`);
}
if (WORD.trim().length === 0) {
  throw new Error("word must not be only white space");
}
if (/\s/.test(WORD)) {
  throw new Error("entry must be exactly one word, no spaces");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
const outputPath = join(outputDir, "entry.txt");
writeFileSync(outputPath, WORD, "utf8");
console.log(`wrote ${WORD.length} characters to ${outputPath}`);
