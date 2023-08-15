import React from 'react';
import { AiFillPushpin } from 'react-icons/ai';
import { AiOutlinePushpin } from 'react-icons/ai';
import { BsTrash } from 'react-icons/bs';

const Note = ({ note, onPinned, onDelete }) => {
    return (
        <div className={`w-1/4 ${note.bgColor} drop-shadow-md m-5 rounded-md`}>
            <div className='w-full p-3'>
                <div className='flex justify-between items-center'>
                    {note.isPinned
                    ? 
                        <AiFillPushpin fontSize={25} className='cursor-pointer' onClick={onPinned}/>
                    : 
                        <AiOutlinePushpin fontSize={25} className='cursor-pointer opacity-50 hover:opacity-100' onClick={onPinned}/>
                    }
                    <BsTrash fontSize={22} className='cursor-pointer opacity-50 hover:opacity-100' onClick={onDelete}/>
                </div>
                <p className='p-5 leading-6 break-words mb-3'>
                    {note.data}
                </p>
            </div>
        </div>
    )
}

export default Note;