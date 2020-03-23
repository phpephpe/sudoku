export function getRandomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function range(count: number, start: number = 0) {
  return Array(count)
    .fill(null)
    .map((v, i) => i + start);
}
