import React from 'react';
import { lens, prop, assoc, path, assocPath, view, set, over, toUpper } from 'ramda';

const Lens = () => {
  const person = {
    name: 'Randy',
    socialMedia: {
      github: 'randycoulman',
      twitter: '@randycoulman'
    }
  };

  const nameLens = lens(prop('name'), assoc('name'));
  const twitterLens = lens(path(['socialMedia', 'twitter']), assocPath(['socialMedia', 'twitter']));
  console.log(view(nameLens, person));
  console.log(set(twitterLens, '@randy', person));
  console.log(over(nameLens, toUpper, person));
  return <div></div>;
};

export default Lens;
