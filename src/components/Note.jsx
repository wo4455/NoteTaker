import React from 'react';

const colors = ['bg-red-400', 'bg-green-400', 'bg-blue-400', 'bg-yellow-400', 'bg-orange-400'];

const Note = ({ data, onSetPinned }) => {
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
            <p className='p-8 leading-6'>
                {data}
            </p>
        </div>
    )
}

export default Note;