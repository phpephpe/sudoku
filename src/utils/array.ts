export function distinct<T>(arr: Array<T>) {
  return Array.from(new Set(arr));
}

export function except<T>(src: Array<T>, arr: Array<T>) {
  return src.filter((val) => !arr.includes(val));
}
