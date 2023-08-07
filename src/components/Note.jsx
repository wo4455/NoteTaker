import React from 'react';
import { AiFillPushpin } from 'react-icons/ai';
import { AiOutlinePushpin } from 'react-icons/ai';

const colors = ['bg-red-400', 'bg-green-400', 'bg-blue-400', 'bg-yellow-400', 'bg-orange-400'];

const Note = ({ data, onSetPinned }) => {
    const [ isPinned, setPinned ] = React.useState(false);
    const [ bg, setBg ] = React.useState('');

    const getColor = () => {
        const randNum = Math.floor(Math.random() * 5);
        return colors[randNum];
    }

    React.useEffect(() => {
        setBg(getColor())
    }, [])

    return (
        <div className={`w-1/4 ${bg} drop-shadow-md m-5 rounded-md`}>
            <div className='w-full p-3'>
                {isPinned 
                ? 
                    <AiFillPushpin fontSize={25} className='cursor-pointer' onClick={() => setPinned(false)}/>
                : 
                    <AiOutlinePushpin fontSize={25} className='cursor-pointer opacity-50 hover:opacity-100' onClick={() => setPinned(true)}/>
                }
                <p className='p-5 leading-6 break-words mb-3'>
                    {data}
                </p>
            </div>
        </div>
    )
}

export default Note;