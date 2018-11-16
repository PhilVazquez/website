import React from 'react';
import {graphql} from 'gatsby';

export const queryFragment = graphql`
  fragment PublicationDetail on PublicationsJson {
    title {
      en
      fr
    }
    content {
      en
      fr
    }
    draft
  }
`;

export default function PublicationDetail({data}) {
  console.log(data);

  return (
    <div>
      <h1>Publication: {data.title.fr || data.title.en}</h1>
      {data.draft && <p><em>This is a draft.</em></p>}
      <p>
        <strong>EN title</strong>: {data.title && data.title.en}
      </p>
      <p>
        <strong>FR title</strong>: {data.title && data.title.fr}
      </p>
      <hr />
    </div>
  );
}
