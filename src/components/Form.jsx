import React from 'react';
import { BiPlus } from 'react-icons/bi';

const Form = ({ onSubmitForm }) => {
    const [inputText, setInputText] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitForm(inputText); // pass input value through props
    }

    // make enter key not submit form
    const handleKeyDown = (e) => {
        if (e.keyCode == 13) {
            e.preventDefault();
        }
    }

    return (
        <div className='w-full flex jusitfy-center items-center border-solid drop-shadow-xl'>
            <form className='w-full flex justify-center' onSubmit={handleSubmit}>
                <input className='w-2/3 p-5 rounded-md'
                    type="text" onChange={(e) => setInputText(e.target.value)} placeholder='Take a note...' id='take-note'onKeyDown={handleKeyDown}/>
                <button type='submit' className='flex justify-center items-center flex-row p-5 ml-3 bg-blue-400 drop-shadow-xl hover:opacity-90 rounded-md'
                >
                    <BiPlus color='white' fontSize={25}/>
                </button>
            </form>
        </div>
    )
}

export default Form;