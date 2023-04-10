const map = {
  ['(']: ')',
  ['{']: '}',
  ['[']: ']'
};

function isValid(s: string): boolean {
  if (s === '') { return true; }

  for (let openIndex = 0; openIndex < s.length; openIndex++) {

    const openSign = s[openIndex];
    const closeSign = map[s[openIndex] as '('];
    let currentOpenIndex = openIndex;

    for (let closeIndex = openIndex + 1; closeIndex < s.length; closeIndex++) {

      if (openSign === s[closeIndex]) {

        currentOpenIndex = closeIndex;
        // todo: regroup
      } else if (closeSign === s[closeIndex]) {
        // todo: split array and remove closed pair
        // if (((j - actualI + 1) % 2) !== 0 ) { return false; }
        // const group1 = s.slice(actualI + 1, j).join('');
        // const group2 = s.slice(actualI + 1, s.length).join('');
        // console.log(i, j, group1, group2);
        //
        // return isValid(group1) && (j + 1 === s.length || isValid(group2));
      }
    }
    return false;
  }
  return true;
}

console.log(isValid('(([]){})'));
// console.log(['(', ')'].join(''));

// To learn more about the language, click above in "Examples" or "What's New".
// Otherwise, get started by removing these comments and the world is your playground.
