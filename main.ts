import { mkdirSync, writeFileSync } from "node:fs";

// The Tired Dark Lord — a 100-word villain monologue.
// The tiredness lives in the rhythm, the pauses and the small
// deflections (the stairs, the cold tea, the stolen notes), never
// in a plain statement that he is weary. He is still a villain:
// two hundred years into a curse, with one verse left to finish.
const MONOLOGUE =
  "Ah. You again — dawn, as always. You lot never knock at a decent hour. " +
  "Yes, the stairs. Four hundred of them, and I counted each one when I " +
  "still minded. The curse is nearly done, by the way. Two hundred years of " +
  "it, and all that's left is the last verse, which I keep forgetting — the " +
  "ravens took my notes to line their nest. So. Kneel, if you must. Or sit. " +
  "The chair is warm, the tea is cold, and hero, the one thing I mean " +
  "to conquer is this staircase, one step at a time, without stopping.";

// Self-check against the gate before writing: the entry must be
// 1-600 characters, not only whitespace, and near 100 words.
const words = MONOLOGUE.trim().split(/\s+/);
if (MONOLOGUE.length < 1 || MONOLOGUE.length > 600 || MONOLOGUE.trim().length === 0) {
  throw new Error(`entry must be 1-600 characters, got ${MONOLOGUE.length}`);
}
if (words.length < 90 || words.length > 110) {
  throw new Error(`entry must be near 100 words, got ${words.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", MONOLOGUE, "utf8");
