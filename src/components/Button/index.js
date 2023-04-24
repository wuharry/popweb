import './style.css';
import React, { useState, useEffect } from 'react';
const Buttons = ({ data, color }) => {
    const [buttonstyle, setbuttonstyle] = useState('buttomframe')
    useEffect(() => {
        if (color == 'white') {
            setbuttonstyle('buttomframe')
        } else {
            setbuttonstyle('buttomframe-blcak')
        }
        // else{
        //     setbuttonstyle('buttomframe-orign')
        // }
    }, [color])
    return (<>
        <button className={buttonstyle}>
            <div >
                {data}
            </div>
        </button >
    </>)
}

export default Buttons