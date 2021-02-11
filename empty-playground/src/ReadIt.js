import React, {useState} from 'react';

// Read out a from

const ReadAForm = () => {
    const [myInputText, setMyInputText] = useState('');
    const [myInputNumber, setMyInputNumber] = useState('');

    const [myRadiobox, setMyRadiobox] = useState('');
    const [myCheckbox, setMyCheckbox] = useState('');

    const [mySelection, setMySelection] = useState('');
    const [myTextarea, setMyTextarea] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Text: ${myInputText}`);
        console.log(`Number: ${myInputNumber}`);
        console.log(`Selection: ${setMySelection}`);
        console.log(`Textarea: ${setMyTextarea}`);
    }

    return (
        <div className="split">
            <div className="splitBox">

                <form onSubmit={handleSubmit}>

                    <label className="group">
                        <span>Input Text:</span><br/>
                        <input type="text" name="text" value={myInputText} onChange={e => setMyInputText(e.target.value)} required />
                    </label>
<br/>
<br/>
                    <label className="group">
                        <span>Input Number:</span><br/>
                        <input type="number" name="number" value={myInputNumber} onChange={e => setMyInputNumber(e.target.value)} required />
                    </label>
<br/>
<br/>
                    <div className="group">
                        <input type="checkbox" id="checkboxItem01" name="checkbox" checked={myCheckbox} onChange={e => e !== undefined && setMyCheckbox(e.target.value)} />
                        <label>Checkbox item 01</label>
                    </div>
                    <div className="group">
                        <input type="checkbox" id="checkboxItem02" name="checkbox" checked={myCheckbox} onChange={e =>  e !== undefined && setMyCheckbox(e.target.value)} />
                        <label>Checkbox item 02</label>
                    </div>
                    <div className="group">
                        <input type="checkbox" id="checkboxItem03" name="checkbox" checked={myCheckbox} onChange={e =>  e !== undefined && setMyCheckbox(e.target.value)} />
                        <label>Checkbox item 03</label>
                    </div>
<br/>
<br/>
                    <div className="group">
                        <input type="radio" id="radioboxItem01" name="radiobox" />
                        <label>Radiobox item 01</label>
                    </div>
                    <div className="group">
                        <input type="radio" id="radioboxItem02" name="radiobox" />
                        <label>Radiobox item 02</label>
                    </div>
                    <div className="group">
                        <input type="radio" id="radioboxItem03" name="radiobox" />
                        <label>Radiobox item 03</label>
                    </div>
<br/>
<br/>
                    <select value={mySelection} onChange={e => setMySelection(e.target.value)} required>
                        <option value="selectItem01">Select item 01</option>
                        <option value="selectItem02">Select item 02</option>
                        <option value="selectItem03">Select item 03</option>
                    </select>
<br/>
<br/>
                    <label className="group">
                        <span>Textarea</span><br/>
                        <textarea value={myTextarea} onChange={e => setMyTextarea(e.target.value)} required />
                    </label>
<br/>
<br/>
                    <input type="submit" value="Submit" />

                </form>
            </div>
            


            <div className="splitBox">
                <p>{myInputText}</p>
                <p>{myInputNumber}</p>
                <p>{myRadiobox}</p>
                <p>{myCheckbox}</p>
                <p>{mySelection}</p>
                <p>{myTextarea}</p>
            </div>
        </div>
    )
}

const ReadIt = () => {
    return (
        <ReadAForm/>
    )
}

export default ReadIt;