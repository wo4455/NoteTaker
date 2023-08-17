import React from 'react';
import { BiPlus } from 'react-icons/bi';

const Search = ({ isDark }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form className='w-2/3 m-auto flex justify-center items-center drop-shadow-xl' onSubmit={handleSubmit}>
            <textarea 
            className={`w-2/3 h-12 p-3 rounded-md min-h-18' ${isDark && 'bg-[#1F1F1F] text-white'}`}
            type="text" 
            spellCheck={false}
            placeholder='Search...' id='search-notes'/>
            <button type='submit'className={`block py-3 px-10 ml-3 drop-shadow-xl hover:opacity-90 rounded-sm ${isDark ? 'bg-[#616161]' : 'bg-blue-500'}`}>
                <BiPlus color={'white'} fontSize={25}/>
            </button>
        </form>
        
    )
}

export default Search;