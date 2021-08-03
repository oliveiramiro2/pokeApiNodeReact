import React from 'react'

import HeaderPoke from './HeaderPoke'
import CardsPoke from './CardsPoke'
import Pagination from './Pagination'

export default function CardsCompleto(){

    return(
        <div className='Grid'>           
            <HeaderPoke />
            <CardsPoke />
            <Pagination />       
        </div>
    )
}