import React from 'react';
import { BiPlus } from 'react-icons/bi';

const Search = ({ isDark, onTrigger }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className='w-2/3 m-auto flex justify-center items-center drop-shadow-xl'>
            <form className='w-3/4 m-auto flex justify-center items-center drop-shadow-xl' onSubmit={handleSubmit}>
                <input 
                className={`w-full h-12 p-3 rounded-md min-h-18' ${isDark && 'bg-[#1F1F1F] text-white'}`}
                type="text" 
                spellCheck={false}
                placeholder='Search...' id='search-notes'/>
            </form>
            <button 
            onClick={onTrigger}
            type='submit'className={`block py-3 px-16 ml-3 drop-shadow-xl hover:opacity-90 rounded-sm ${isDark ? 'bg-[#616161]' : 'bg-blue-500'}`}>
                <BiPlus color={'white'} fontSize={25}/>
            </button>
        </div>
    )
}

export default Search;