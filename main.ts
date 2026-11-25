// Post the Meme, Win the Feed entry (Node 22, standard library only).
//
// The entry is the X post itself: one meme picture about make.fun, aimed at
// people who build AI agents, posted from a public X account with @_myronera
// tagged in the post text and one of the entrant's make.fun play codes in it.
// POST.json names that post, and the house reads the post's likes, reposts and
// quotes from X after entries close. This program only hands the two files
// over: it copies POST.json and the meme picture, meme.png, from the
// repository root into the output directory, where the gate reads them.
// Nothing else is written, and nothing about the post is scored here.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The two files are copied in order, POST.json first, so a failure on the
// first file stops the run before the picture is copied. Both copies are
// plain file copies, so the bytes in the output match the repository exactly.
const filesToCopy = ["POST.json", "meme.png"];

mkdirSync(outputDir, { recursive: true });

for (const name of filesToCopy) {
  const source = join(botDir, name);
  const target = join(outputDir, name);
  try {
    copyFileSync(source, target);
    console.log(`Copied ${name} to ${target}`);
  } catch (err) {
    console.error(`Could not copy ${name} from ${botDir}: ${(err as Error).message}`);
    process.exit(1);
  }
}
