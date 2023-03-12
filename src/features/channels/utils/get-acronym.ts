export const getAcronym = (name: string) =>
  name
    .split(' ')
    .map((word, index) => (index < 2 ? word[0] : null))
    .join('')
    .toUpperCase()
