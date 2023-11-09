import React from 'react';
import Book from '../component/Book';
import '../container/BookList.css'

const BookList = () => {

  // Array of Objects
  const bookLists = [
    {
      src: "../assets/images/gita.jpg",
      title: "Gita",
      author: 'Iskcon',
      id: 1
    },
    {
      src: "../assets/images/autobiography-of-yogi.jpg",
      title: "Autobiography of Yogi",
      author: 'Paramahansa Yogananda',
      id: 2
    },
    {
      src: "../assets/images/becoming.jpg",
      title: "Becoming",
      author: 'Michelle Obama',
      id: 3
    },
    {
      src: "../assets/images/never-lie.jpg",
      title: "Never Lie",
      author: 'Freida McFadden',
      id: 4
    },
    {
      src: "../assets/images/sudha-murthy.jpg",
      title: "Here, There and Everywhere",
      author: 'Sudha Murthy',
      id: 5
    },
    {
      src: "../assets/images/do-it-today.jpg",
      title: 'Do it Today',
      author: 'Darius Foroux',
      id: 6
    },
    {
      src: "../assets/images/elon-musk.jpg",
      title: 'Elon Musk',
      author: 'Walter Issacson',
      id: 7
    },
    {
      src: "../assets/images/midnight-furies.jpg",
      title: 'MidNight Furies',
      author: 'Nisid Hajari',
      id: 8
    }
  ]
  //console.log(bookLists);
  return (
    <section className='bookList'>
      {bookLists.map((book) => {
        return (
          <Book key={book.id} src={book.src} title={book.title} author={book.author} alt={book.title} />
        )
      })}
    </section>
  )
};

export default BookList;