import React from 'react';
import { AiFillPushpin } from 'react-icons/ai';
import { AiOutlinePushpin } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';

const Note = ({ note, onPinned, onDelete, isDark }) => {
    return (
        <div className={`w-1/4 ${note.bgColor} drop-shadow-md m-5 rounded-md ${note.isPinned ? 'border-solid pin-fade' : 'max-w-sm'}`}>
            <div className={'w-full p-3'}>
                <div className='flex justify-between items-start'>
                    {note.isPinned
                    ? 
                        <AiFillPushpin 
                        color={isDark ? 'white' : 'black'}
                        fontSize={25} className='cursor-pointer' onClick={onPinned}/>
                    : 
                        <AiOutlinePushpin color={isDark ? 'white' : 'black'} fontSize={25} className='cursor-pointer opacity-50 hover:opacity-100' onClick={onPinned}/>
                    }
                    <div className='overflow-clip max-w-[80%] p-2'>
                        <p className={`text-xl font-semibold whitespace-normal break-words ${isDark && 'text-white'}`}>{note.title || 'New Note'}</p>
                    </div>
                    <BsTrash fontSize={22} color={isDark ? 'white' : 'black'} className='cursor-pointer opacity-50 hover:opacity-100' onClick={onDelete}/>
                </div>
               
                <p className={`p-5 mb-3 leading-6 break-words ${isDark && 'text-[#BEBEBE]'}`}>
                    {note.data}
                </p>
            </div>
        </div>
    )
}

export default Note;