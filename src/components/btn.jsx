import React, {useMemo, useState} from 'react';

const AppBtn = (btnProps) => {
    const [textBtn, setTextBtn] = useState(btnProps.state.text);

    let stateNumber = 6 ;

    const test = () => {
        stateNumber = Math.floor(Math.random()  * 5 + 1  ) + ""
    }

    return useMemo( ()=>{
    return (
        <>
            {
                <input type='button' value={btnProps.state.text +  stateNumber} onClick={ () => { test() ;  btnProps.clickHandler()}}/>
            }
        </>
    );
} , [stateNumber])

};

 export default AppBtn;