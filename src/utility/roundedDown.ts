export function roundedDown(n: number): number {
  const roundedTo = 100;

  return Math.floor(n * roundedTo) / roundedTo;
}
