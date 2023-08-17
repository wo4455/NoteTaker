import React from 'react';
import './App.css'
import Search from './components/Search';
import Note from './components/Note';
import ReactSwitch from 'react-switch';
import Popup from './components/Popup';

const colors = ['bg-red-400', 'bg-green-400', 'bg-blue-400', 'bg-yellow-400', 'bg-orange-400'];
const darkThemeColors = [ 'bg-[#AB00FF]', 'bg-[#33007B]', 'bg-[#8300C4]', 'bg-[#4C00A3]', 'bg-[#31004A]'];

const Subtitle = ({ data, otherStyles }) => {
  return (
    <p className={`mb-2 text-gray-400 text-sm ${otherStyles}`}>{data}</p>
  )
};

const App = () => {
  const [ notesList, setNotesList ] = React.useState([]);
  const [ isDark, setDark ] = React.useState(false); // theme
  const [ popup, setPopup ] = React.useState(false); // popup

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

  const getColor = (i = notesList.length, darkTheme = isDark) => {
    const index = darkTheme ? i % darkThemeColors.length : i % colors.length;
    return darkTheme ? darkThemeColors[index] : colors[index];
  };

  const handleChangeTheme = () => {
    const notesListClone = [ ...notesList ];
    for (let i = 0; i < notesListClone.length; i++) {
      notesListClone[i].bgColor = getColor(i, !isDark);
    }
    setNotesList(notesListClone);
    setDark(!isDark);
  };

  return (
    <div className={
      isDark ? 'bg-[#292929] py-10' : 'py-10'
      }>
      <Search isDark={isDark} />
      
      <div className='w-full flex justify-between'>
        <Subtitle otherStyles={'w-1/5 mt-20'} data={'PINNED'} />
        
        <div className='w-1/5'>
          { notesList.length > 0 
            ? <button className='mb-2 mt-20 text-gray-400 text-sm hover:opacity-80' onClick={() => setNotesList([])}>CLEAR ALL</button>
            : <Subtitle otherStyles={'mt-20'} data={'NO NOTES'} />
          }
        </div>
        
      </div>
      
      <div className={`w-full h-screen ${isDark && 'bg-[#292929]'}`}>
        <div className={`w-full pb-5 flex flex-wrap justify-center items-start ${isDark && 'bg-[#292929]'}`}>
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
                  isDark={isDark}
                  key={item + index}
                />
              ))
          }
        </div>    
        <div className='fixed bottom-0 right-0 p-5'>
          <Subtitle data={'Change Theme'} />
          <ReactSwitch 
          onChange={handleChangeTheme}
          checked={isDark}
          checkedIcon={false}
          uncheckedIcon={false}
          />
        </div>
      </div>
      <Popup activate isDark={isDark} 
      onSubmit={
        (title, inputText) => {
          setNotesList([
            ...notesList,
            {
              title: title,
              data: inputText,
              order: notesList.length,
              bgColor: getColor(),
              isPinned: false,
            },
          ]);
        }
      }
      />
    </div>
  )
}

export default App
