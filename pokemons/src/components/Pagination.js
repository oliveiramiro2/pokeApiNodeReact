import React from 'react'
import { Icon } from 'react-materialize'

export default function Pagination(props){

    return(
        <div className='paginator'>
            <button 
                className='pag-anterior' 
                onClick={() => props.prevPag()}> 
                <Icon>chevron_left</Icon>
            </button>
            <button 
                className='pag-proxima' 
                onClick={() => props.nextPag()}> 
                <Icon>chevron_right</Icon> 
            </button>
        </div>  
    )
    
}