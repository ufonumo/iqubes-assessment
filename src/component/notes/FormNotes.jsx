import React, { useState, useEffect, useRef } from 'react';

function FormNotes(props) {
    const [input, setInput] = useState(props.edit ? props.edit.value : '');

    const inputRef = useRef(null);
  
    useEffect(() => {
      inputRef.current.focus();
    });
  
    const handleChange = e => {
      setInput(e.target.value);
    };
  
    const handleSubmit = e => {
      e.preventDefault();
  
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
      });

      setInput('');
    };

    console.log(input);
    return (
        <>
            <form onSubmit={handleSubmit}>
                {
                    props.edit ? (
                        <>
                            <input type="text"
                                 placeholder='New Note' name="notes" 
                                value={input}
                                ref={inputRef} 
                                onChange={handleChange}
                                
                             />
                            <button className='submit__btn' onClick={handleSubmit}>Update</button>
                        </>
                    )
                    : (
                        <>
                            <input type="text" 
                                placeholder='New Note' 
                                name="notes" 
                                ref={inputRef}
                                value={input}
                                onChange={handleChange} 
                            />
                            <button className='submit__btn' onClick={handleSubmit}>submit</button>
                        </>
                    )
                }
                
            </form>
        </>
    )
}

export default FormNotes
