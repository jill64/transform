export const transform = (value, fn) =>
  value instanceof Set
    ? new Set([...value].map(fn))
    : value instanceof Map
      ? new Map([...value].map(fn))
      : Object.fromEntries(Object.entries(value).map(fn))
