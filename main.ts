// One-Sentence Absurd Invention Pitch entry for make.fun
// "u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a".
// Writes exactly one sentence to /output/entry.txt: a pitch for a
// ridiculous invention that fixes a tiny everyday annoyance.
// Fully offline and deterministic: no network, no clock, no randomness,
// no environment reads. The pitch is a fixed string literal below.
// Why this pitch: tangled earphones are the classic tiny annoyance, and
// the fix is silly yet weirdly plausible — the knots hold tiny couples
// therapy sessions overnight, so by morning they have reconciled and
// come apart on their own, ready to listen again. The laugh comes from
// the invention itself (therapy for knots), not from a joke bolted on
// at the end, and the sentence names the annoyance, the invention and
// its mechanism in one clean line, well inside the 220-character gate.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  "My earphones untangle themselves overnight by holding tiny couples therapy sessions for their knots, so each morning they wake up reconciled, single, and ready to listen.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
