// Non-Breaking Space (&nbsp):
export const NBSP = "\u00A0";

/**
 * Capitalize first letter and enforce a dot at the end.
 */
export function formatSentence(str: string) {
  const trimmedStr = str.trim();

  return `${ trimmedStr.charAt(0).toUpperCase() }${ trimmedStr.slice(1) }.`.replace(/\.\.$/, ".");
}

/**
 * Split a single string with line-breaks into an array of sentences.
 */
export function parseSentences(str: string) {
  return str.split(/\n/).map(formatSentence);
}

/**
 * Calculate how much time is left since <start> ms out of <total> ms and formats that as MM:SS.
 */
export function formatTimeLeft(start: number, total: number) {
  const elapsedMs = Date.now() - start;
  const timeLeftMs = Math.max(total - elapsedMs, 0);
  const timeLeftMins = (timeLeftMs / 60000) | 0;
  const timeLeftSeconds = ((timeLeftMs % 60000) / 1000) | 0;

  return `${ `00${ timeLeftMins }`.slice(-2) }:${ `00${ timeLeftSeconds }`.slice(-2) }`;
}

/**
 * Returns a formatted tax rate with none or two decimal places.
 */
export function formatTaxRate(taxRate: number): string {
  return `${ (Math.round(taxRate * 100) / 100).toFixed(2).replace(/\.00$/, "") } %`;
}

/**
 * Remove duplicate, leading or trailing spaces:
 */
export function fullTrim(str: string): string {
  return str.replace(/\s+/g, " ").trim();
}
