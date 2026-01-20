import { JSX } from 'react';

export const highlightFirstLetters = (
  text: string,
  count: number = 2,
  className: string = 'first-letters'
): JSX.Element => {
  const firstPart = text.slice(0, count);
  const rest = text.slice(count);

  return (
    <>
      <span className={className}>{firstPart}</span>
      {rest}
    </>
  );
};
