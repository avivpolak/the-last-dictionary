import React from 'react';
import { Link } from 'react-router-dom';
import LinkedParagragh from '../../HelperComponents/LinkedParagragh';

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
  {poss.map((pos,i) => {
      return (
          <div key={i}>
              <Link to={`/word/${word}/${pos}`}>
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
