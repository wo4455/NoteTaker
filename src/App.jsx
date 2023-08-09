import React from 'react';
import Form from './components/Form';
import Note from './components/Note';
import './App.css'

const colors = ['bg-red-400', 'bg-green-400', 'bg-blue-400', 'bg-yellow-400', 'bg-orange-400'];

const App = () => {
  const [ notesList, setNotesList ] = React.useState([]);

  const handlePin = (item) => { // set pinned to true/false
    const notesListClone = [ ...notesList ];
    const index = notesListClone.indexOf(item);
    notesListClone[index].isPinned = !notesListClone[index].isPinned;
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
          : <button className='w-1/5 mb-2 mt-20 text-gray-400 text-sm'>NO NOTES</button>
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
                key={item + index}
              />
            ))
        }
      </div>    
    </>
  )
}

export default App
