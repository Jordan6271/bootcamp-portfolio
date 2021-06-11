import WhatToDo from "./what-to-do.png";
import AddItem from "./add-item.png";
import ViewAllItemList from "./view-all-item-list.png";
import MarkAsCompleted from "./mark-as-completed.png";
import ViewToBeCompletedList from "./view-to-be-completed-list.png";
import ViewCompletedList from "./view-completed-list.png";

const Images = [
    { id: 1, image: WhatToDo, description: `What To Do App` },
    { id: 2, image: AddItem, description: `Added an item to the list` },
    {
        id: 3,
        image: ViewAllItemList,
        description: `View the list of all items with many items added`,
    },
    {
        id: 4,
        image: MarkAsCompleted,
        description: `Mark every item with an odd id number as completed`,
    },
    {
        id: 5,
        image: ViewToBeCompletedList,
        description: `View all items in the 'To Be Completed' list`,
    },
    {
        id: 6,
        image: ViewCompletedList,
        description: `View all items in the 'Completed' list`,
    },
];

export default Images;
