import { COLORS } from "../constants";

const RISK_RANGE = [0, 40];
const STRONG_RANGE = [41, 60];
const SAFE_RANGE = [61, 80];

export function countPasswords(passwords) {
  const counts = {
    safe: 0,
    risk: 0,
    strong: 0
  };

  passwords.forEach((password) => {
    if (password.score >= SAFE_RANGE[0] && password.score <= SAFE_RANGE[1]) {
      counts.safe++;
    } else if (
      password.score >= RISK_RANGE[0] &&
      password.score <= RISK_RANGE[1]
    ) {
      counts.risk++;
    } else if (
      password.score >= STRONG_RANGE[0] &&
      password.score <= STRONG_RANGE[1]
    ) {
      counts.strong++;
    }
  });

  const result = [
    { verdict: "safe", count: counts.safe.toString().padStart(2, "0") },
    { verdict: "risk", count: counts.risk.toString().padStart(2, "0") },
    { verdict: "strong", count: counts.strong.toString().padStart(2, "0") }
  ];

  return result;
}

export function calculateAverageScore(passwords) {
  if (!passwords || passwords.length === 0) {
    return { score: 0, color: COLORS.error };
  }

  let totalScore = 0;
  let scoreCount = 0;

  for (const password of passwords) {
    if (typeof password.score === 'number' && !isNaN(password.score)) {
      totalScore += password.score;
      scoreCount++;
    }
  }

  if (scoreCount === 0) {
    return { score: 0, color: COLORS.error };
  }

  const averageScore = totalScore / scoreCount;
  const color =
    averageScore < 50 && averageScore > 0
      ? COLORS.error
      : averageScore > 50 && averageScore < 75
      ? COLORS.orange
      : COLORS.success;

  return { score: Math.round(averageScore), color };
}