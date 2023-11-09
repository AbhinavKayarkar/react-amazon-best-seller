import React from 'react';
import Image from './Image';
import Title from './Title';
import Author from './Author';

const Book = (props) => {
  return (
    <article className='book'>
      <Image src={props.src} alt={props.alt} />
      <Title title={props.title}/>
      <Author author= {props.author} />
    </article>
  );
};

export default Book;