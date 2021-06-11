import Noteable from "./noteable.png";
import CreateNote from "./create-note.png";
import Errors from "./errors.png";
import FilledInNote from "./filled-in-note.png";
import AddedNote from "./added-note.png";
import NewNote from "./new-note.png";
import StampOfApproval from "./stamp-of-approval.png";

const Images = [
    { id: 1, image: Noteable, description: `Noteable App` },
    { id: 2, image: CreateNote, description: `Form to create a new note` },
    {
        id: 3,
        image: Errors,
        description: `Error handling if any field is left empty`,
    },
    {
        id: 4,
        image: FilledInNote,
        description: `Note creation form fully filled in`,
    },
    {
        id: 5,
        image: AddedNote,
        description: `Toastr popup to show note has been added successfully`,
    },
    {
        id: 6,
        image: NewNote,
        description: `Newly created note appearing on the board`,
    },
    {
        id: 7,
        image: StampOfApproval,
        description: `Number of stamps on note increases if stamped`,
    },
];

export default Images;
