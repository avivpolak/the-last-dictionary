import React from 'react';
import { Link } from 'react-router-dom';
import LinkedParagragh from './LinkedParagragh';

export default function MultipleDefenition({word,pos,poss}) {
  return      <div className="Word">
  <h1>
      <LinkedParagragh>{word}</LinkedParagragh>
  </h1>
  <LinkedParagragh>
      There is more then one options for this word, please select
      one of the Part-Of-Speaches below.
  </LinkedParagragh>
  <br />
  {poss.map((pos) => {
      return (
          <div>
              <Link to={`/${word}/${pos}`}>
                  {word}({pos})
              </Link>
              <br />
          </div>
      );
  })}
  <br />
  <br />
  {pos}
  <br />
</div>;
}
