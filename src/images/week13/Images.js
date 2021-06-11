import GetBooksEmpty from "./get-books-empty.png";
import AddFirstBook from "./add-first-book.png";
import AddSecondBook from "./add-second-book.png";
import GetBooksFull from "./get-books-full.png";
import GetBookById from "./get-book-by-id.png";
import UpdateBook from "./update-book.png";
import GetBooksAfterUpdate from "./get-books-after-update.png";
import DeleteBook from "./delete-book.png";
import GetBooksAfterDelete from "./get-books-after-delete.png";

const Images = [
    {
        id: 1,
        image: GetBooksEmpty,
        description: `GET Request to empty booklist API`,
    },
    {
        id: 2,
        image: AddFirstBook,
        description: `Add first book to booklist API`,
    },
    {
        id: 3,
        image: AddSecondBook,
        description: `Add second book to booklist API`,
    },
    {
        id: 4,
        image: GetBooksFull,
        description: `GET Request to full booklist API`,
    },
    {
        id: 5,
        image: GetBookById,
        description: `GET Request to specific book id`,
    },
    {
        id: 6,
        image: UpdateBook,
        description: `PUT Request to update specific book`,
    },
    {
        id: 7,
        image: GetBooksAfterUpdate,
        description: `GET Request to booklist API after update`,
    },
    {
        id: 8,
        image: DeleteBook,
        description: `DELETE Request to delete specific book`,
    },
    {
        id: 9,
        image: GetBooksAfterDelete,
        description: `GET Request to booklist API after deletion`,
    },
];

export default Images;
