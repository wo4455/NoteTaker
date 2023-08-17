import React from 'react';

const Button = ({ data, otherStyles, onClick }) => {
    return (
        <button 
        onClick={onClick}
        className={`btn p-1 px-4 font-semibold cursor-pointer hover:opacity-90 ${otherStyles}`}>{data}
        </button>
    )
};

const Popup = ({ activate, isDark, onSubmit }) => {
const [ textCount, setTextCount ] = React.useState(0);
const [ title, setTitle ] = React.useState('');
const [ inputText, setInputText ] = React.useState('');

const handleInput = (e) => {
    setTextCount(e.target.value.length);
    setInputText(e.target.value);
}

return (activate) ? (
    <div className='flex flex-col items-center justify-start w-2/3 m-auto'>
        <div className={`heading text-center font-bold text-2xl m-5 ${isDark ? 'text-[#9BA3AF]' : 'text-gray-800'}`}>{title || 'New Note'}</div>
        <div className={`editor ${isDark ? 'bg-[#616161] text-white' : 'border border-gray-300'} mx-auto w-10/12 flex flex-col text-gray-800 p-4 shadow-lg rounded-md max-w-2xl`}>
            <input 
            onChange={(e) => setTitle(e.target.value)}
            className={`title ${isDark ? 'bg-[#1F1F1F] border-none' : 'bg-gray-100'} border border-gray-300 p-2 mb-4 outline-none rounded-sm`} spellCheck="false" placeholder="Title" type="text"></input>
            <textarea 
            onChange={handleInput}
            maxLength={700}
            className={`description ${isDark ? 'bg-[#1F1F1F] border-none' : 'bg-gray-100'} sec p-3 h-60 border border-gray-300 outline-none`} spellCheck="false" placeholder="Take a note..."></textarea>

            <div className='flex flex-col'>
                <div className="flex text-gray-500 m-2">
                    <div className="count ml-auto text-gray-400 text-xs font-semibold">{textCount}/700</div>
                </div>
                
                <div className="buttons flex">
                    <Button data={'Cancel'} otherStyles={`border-gray-300 ${isDark ? 'text-gray-200' : 'text-gray-500'} ml-auto`}/>
                    <Button data={'Post'} otherStyles={`text-gray-200 ml-2 ${isDark ? 'bg-[#8300C4]' : 'bg-indigo-500'} border-none`} onClick={() => onSubmit(title, inputText)}/>
                </div>
            </div>
        </div>
    </div> 
) : ""; 
}

export default Popup