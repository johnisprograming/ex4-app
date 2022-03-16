import React, { useState } from 'react';

const Content2 = ({ onTitleChange }) => {
    const [inputVaue, setInputValue] = useState('');

    const onChange = (e) => setInputValue(e.target.value);

    return (
        <div className='content2'>
            <input type="text" value={inputVaue} onChange={onChange} /> &nbsp;
            <button onClick={() => {
                onTitleChange(inputVaue);
                setInputValue('')
            }}>변경</button>
        </div>
    );
};

export default Content2;