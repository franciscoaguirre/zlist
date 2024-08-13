export const toKebabCase = (previous: string): string => {
  return previous
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
