import './App.css'
import React from 'react';
import Form from './components/Form';
import Note from './components/Note';

function App() {
  const [ formData, setFormData ] = React.useState('');

  return (
    <>
    <Form onSubmitForm={inputValue => setFormData(inputValue)}/>
    <div className='w-96 m-auto'>
      <p className='mb-2'>PINNED</p>
    </div>
    <Note data={formData}/>
    </>
  )
}

export default App
