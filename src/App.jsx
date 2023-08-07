import './App.css'
import React from 'react';
import Form from './components/Form';
import Note from './components/Note';

const App = () => {
  const [ notesList, setNotesList ] = React.useState([])

  const handleClear = () => {
    setNotesList([])
  }

  return (
    <>
      <Form onSubmitForm={inputValue => setNotesList([...notesList, { data: inputValue }])}/> {/* get form data from props */}
      
      <div className='w-full flex justify-between'>
        <p className='w-1/5 mb-2 mt-20 text-gray-400 text-sm'>PINNED</p>
        <button className='w-1/5 mb-2 mt-20 text-gray-400 text-sm hover:opacity-80' onClick={handleClear}>Clear All</button>
      </div>
      
      <div className='w-full flex flex-wrap justify-center items-start'>
        {
          notesList.map((item, index) => (
            <Note data={item.data} key={item + index}/>
          ))
        }
      </div>
      
    </>
  )
}

export default App
