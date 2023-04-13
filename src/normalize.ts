export function normalize(S: number): number {
  const cutOffExtraCharacters: string = S.toFixed(3);
  const convertToNumber: number = Number(cutOffExtraCharacters.slice(0, -1));

  return convertToNumber;
}
