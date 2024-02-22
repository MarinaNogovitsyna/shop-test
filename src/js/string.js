export function getCorrectValue(str) {
  const strTrim = str.trim();
  return strTrim.charAt(0).toUpperCase() + strTrim.slice(1);
}
