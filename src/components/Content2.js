import react from 'react';

const Content2= () => {
    const [inputVaue, setInputValue] = useState('');

    const onChange = (e) => setInputValue(e.target.value);

    return (
        <div className='content2'>
            <input type="text" value={inputVaue} onChange={onchange} /> &nbsp;
            <button onClick={() => {
                onTitleChange(inputVaue);
                setInputValue('')
                }}>변경</button>
        </div>
    );
};

export default Content2;