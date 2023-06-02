// Define constants for score ranges and penalties
const WEAK_RANGE = [0, 20];
const RISK_RANGE = [21, 40];
const STRONG_RANGE = [41, 60];
const SAFE_RANGE = [61, 80];
const REPEAT_PENALTY = 2;
const MAX_PENALTY = 10;
const TYPE_BONUS = 5;

export default function checkPassword(password) {
  // Any password shorter than 12 characters is considered 'risk'
  if (password.length < 12) {
    return { verdict: 'risk', score: RISK_RANGE[1] };
  }

  // Base score is the length of the password
  let finalScore = password.length;

  // Character mix score
  const typesCount = {
    lower: password.match(/[a-z]/g)?.length || 0,
    upper: password.match(/[A-Z]/g)?.length || 0,
    digit: password.match(/[0-9]/g)?.length || 0,
    symbol: password.match(/[^a-zA-Z0-9]/g)?.length || 0,
  };

  // Add bonus scores for variety of character types
  const characterTypes = Object.values(typesCount).filter((count) => count > 0).length;
  if (characterTypes < 3) {
    finalScore += WEAK_RANGE[1];
  } else if (characterTypes >= 3 && typesCount.lower && typesCount.upper) {
    finalScore += STRONG_RANGE[1];
  } else {
    finalScore += characterTypes * TYPE_BONUS;
  }

  // Penalize common patterns
  const patterns = [/d{4}/, /[a-z][a-z][0-9][0-9]/, /(.)\1{2,}/, /password/i];
  let match = patterns.find((pattern) => pattern.test(password));
  if (match) {
    finalScore -= RISK_RANGE[1];
  }

  // Penalize repetitive characters
  const consecutiveChars = password.match(/(.)\1{2,}/g) || [];
  const repeatPenalty = consecutiveChars.reduce((penalty, match) => penalty + match.length - 2, 0);
  finalScore -= Math.min(repeatPenalty * REPEAT_PENALTY, MAX_PENALTY);

  // Calculate score percentage based on range
  const scoreRange = SAFE_RANGE[1] - WEAK_RANGE[0];
  const scorePercentage = Math.max(Math.min(((finalScore - WEAK_RANGE[0]) / scoreRange) * 100, SAFE_RANGE[1]), WEAK_RANGE[0]);

  // Round the score to the nearest integer
  const scoreRounded = Math.round(scorePercentage);

  // Determine verdict based on score
  let verdict;
  switch (true) {
    case scoreRounded >= SAFE_RANGE[0]:
      verdict = 'safe';
      break;
    case scoreRounded >= STRONG_RANGE[0]:
      verdict = 'strong';
      break;
    case scoreRounded >= RISK_RANGE[0]:
      verdict = 'risk';
      break;
    default:
      verdict = 'weak';
      break;
  }

  return { verdict, score: scoreRounded };
}


// Define constants for character sets
const LOWERCASE = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIGITS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{};:'\"\\|,./<>?";

export function generatePassword(length=12, addDigits=true, addSymbols=true, lowercase=true, uppercase=true) {
  // Validate the length parameter
  if (length < 12) {
    throw new Error("Password length must be at least 12");
  }

  // Build the character pool based on the criteria
  let pool = "";
  if (lowercase) {
    pool += LOWERCASE;
  }
  if (uppercase) {
    pool += UPPERCASE;
  }
  if (addDigits) {
    pool += DIGITS;
  }
  if (addSymbols) {
    pool += SYMBOLS;
  }

  // Check if the pool is empty
  if (pool.length === 0) {
    throw new Error("No character types selected");
  }

  // Generate a random password from the pool
  let password = "";
  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * pool.length);
    password += pool[index];
  }

  return password;
}
