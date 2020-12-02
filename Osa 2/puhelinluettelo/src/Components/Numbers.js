import React from 'react'

const Numbers =  ({names, numbers, search}) => {

    if(search !== ''){
        if(names.toLowerCase().includes(search)){
            return(
            <div>
                {names} {numbers}
            </div>
            );
        }
        else{
            return(
                ''
            )
        }
    }
    else {
        return(
        <div>
            {names} {numbers}
        </div>
    )}
}


export default Numbers