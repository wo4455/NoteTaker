import React from 'react';
import Form from './components/Form';
import Note from './components/Note';
import Switch from 'react-switch';
import './App.css'
import ReactSwitch from 'react-switch';

const colors = ['bg-red-400', 'bg-green-400', 'bg-blue-400', 'bg-yellow-400', 'bg-orange-400'];

const App = () => {
  const [ notesList, setNotesList ] = React.useState([]);

  const handlePin = (item) => { // set pinned to true/false
    const notesListClone = [ ...notesList ];
    const index = notesListClone.indexOf(item);
    notesListClone[index].isPinned = !notesListClone[index].isPinned;
    setNotesList(notesListClone);
  };

  const handleDelete = (item) => { // remove deleted note from array
    const notesListClone = [ ...notesList ];
    const index = notesListClone.indexOf(item);
    notesListClone.splice(index, 1);
    setNotesList(notesListClone);
  };

  const getColor = () => {
    const index = notesList.length % colors.length;
    return colors[index];
  };

  return (
    <>
      <Form
        onSubmitForm={
          (inputValue) => {
            setNotesList([
              ...notesList,
              {
                data: inputValue,
                order: notesList.length,
                bgColor: getColor(),
                isPinned: false,
              },
            ]);
          }
        }
      />
      
      <div className='w-full flex justify-between'>
        <p className='w-1/5 mb-2 mt-20 text-gray-400 text-sm'>PINNED</p>
        
        { notesList.length > 0 
          ? <button className='w-1/5 mb-2 mt-20 text-gray-400 text-sm hover:opacity-80' onClick={() => setNotesList([])}>CLEAR ALL</button>
          : <p className='w-1/5 mb-2 mt-20 text-gray-400 text-sm'>NO NOTES</p>
        }
      </div>
      
      <div className='w-full flex flex-wrap justify-center items-start'>
        {
          notesList
            .sort((a, b) => {
              if (a.isPinned && b.isPinned) return 0;
              if (a.isPinned) return -1;
              if (b.isPinned) return 1;
              return a.order > b.order ? 1 : -1;
            })
            .map((item, index) => (
              <Note
                note={item} 
                onPinned={() => handlePin(item)}
                onDelete={() => handleDelete(item)}
                key={item + index}
              />
            ))
        }
      </div>    
      <div className='fixed bottom-0 w-[90vw] flex justify-end items-center p-8'>
        <ReactSwitch />
      </div>
    </>
  )
}

export default App
