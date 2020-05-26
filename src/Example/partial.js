import React from 'react';
import { __, curry, filter, map, pipe } from 'ramda';

const Partial = () => {
  const books = [
    {title:"The Ballad of Songbirds and Snakes",year:2020},
    {title:"Born a Crime: Stories from a South African Childhood",year:2019},
    {title:"The Ride of a Lifetime: Lessons Learned from 15 Years as CEO of the Walt Disney Company",year:2019},
    {title:"Open Book: A Memoir",year:2019},
    {title:"Johnny Carson ",year:2013},
  ]
  // const publishedInYear = (book, year) => book.year === year;
  // const titlesForYear = (books, year) => {
  //   const selected = filter((book) => publishedInYear(book, year), books);
  //   return map((book) => book.title, selected);
  // };
  // console.log(titlesForYear(books,2019))
  /* *************************  */
  // High order functions
  // const publishedInYear = (year) => (book) => book.year === year;
  // const titlesForYear = (books, year) => {
  //   const selected = filter(publishedInYear(year), books);
  //   return map((book) => book.title, selected);
  // };
  // console.log(titlesForYear(books,2019))
  /* ********** Curriying ***************  */
  // const publishedInYear = curry((year, book) => book.year === year);
  //
  // const titlesForYear = (books, year) => {
  //   const selected = filter(publishedInYear(year), books);
  //   return map((book) => book.title, selected);
  // };
  // console.log(titlesForYear(books,2019))
  /* ********** Placeholder ***************  */
  // const threeArgs = curry((a, b, c) => {
  //   return a + b + c;
  // });
  //
  // const middleArgumentLater = threeArgs('value for a ', __, ' value for c');
  // console.log(middleArgumentLater("b"));
  /* ********** Placeholder ***************  */
  // const publishedInYear = curry((book, year) => book.year === year)
  //
  // const titlesForYear = (books, year) => {
  //   const selected = filter(publishedInYear(__, year), books)
  //
  //   return map(book => book.title, selected)
  // }
  // console.log(titlesForYear(books,2019))
  /* ********** Pipeline ***************  */
  // const publishedInYear = curry((year, book) => book.year === year)
  //
  // const titlesForYear = (books, year) =>
  //     pipe(
  //         filter(publishedInYear(year)),
  //         map(book => book.title)
  //     )(books)
  // const titlesForYear2 = (year, books) =>
  //     pipe(
  //         filter(publishedInYear(year)),
  //         map(book => book.title)
  //     )(books)
  // console.log(titlesForYear(books,2019))
  // console.log(titlesForYear2(2019,books))
  return null;
};

export default Partial;
