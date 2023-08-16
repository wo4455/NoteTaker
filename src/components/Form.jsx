import React from 'react';
import { BiPlus } from 'react-icons/bi';

const Form = ({ onSubmitForm, isDark }) => {
    const [inputText, setInputText] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitForm(inputText); // pass input value through props
    }

    // make enter key not submit form
    const handleKeyDown = (e) => {
        if (e.keyCode == 13) {
            e.preventDefault();
            e.target.value += '\n'
        }
    }

    return (
        <div className='w-full flex jusitfy-center items-center drop-shadow-xl'>
            <form className='w-full flex justify-center' onSubmit={handleSubmit}>
                <textarea className={
                    isDark
                    ? 'w-2/3 p-5 rounded-md min-h-18 bg-[#1F1F1F] text-white'
                    : 'w-2/3 p-5 rounded-md min-h-18'
                    } 
                type="text" 
                onChange={(e) => setInputText(e.target.value)} placeholder='Take a note...' id='take-note'onKeyDown={handleKeyDown}/>
                <button type='submit' className={
                    isDark
                    ? 'flex justify-center items-center flex-row p-5 ml-3 drop-shadow-xl hover:opacity-90 rounded-md bg-[#616161]'
                    : 'flex justify-center items-center flex-row p-5 ml-3 drop-shadow-xl hover:opacity-90 rounded-md bg-blue-500'
                    }>
                    <BiPlus color={'white'} fontSize={25}/>
                </button>
            </form>
        </div>
    )
}

export default Form;