import React from 'react'
import { Icon } from 'react-materialize'
import Globais from './Globais'

export default function Pagination(props){
    const nextPag = () => {
        Globais.numPagBase = Globais.numPagBase+1
        Globais.urlAtual = Globais.urlBase.concat(`?offset=${Globais.numPagBase*20}&limit=20`)
        props.refreshPag()
    }

    const prevPag = () => {
        Globais.numPagBase = Globais.numPagBase-1
        Globais.urlAtual = Globais.urlBase.concat(`?offset=${Globais.numPagBase*20}&limit=20`)
        props.refreshPag()
    }

    const clickPag = (pag) => {
        Globais.numPagBase = pag
        Globais.urlAtual = Globais.urlBase.concat(`?offset=${Globais.numPagBase*20}&limit=20`)
        props.refreshPag()
    }

    return(
        <div className='paginator'>
            <div className='container-paginator'>
                {Globais.numPagBase > 0 ?
                    <div>
                        <button 
                            className='pag-anterior' 
                            onClick={prevPag}> 
                            <Icon>chevron_left</Icon>
                        </button>
                    </div>
                :
                    <div>
                        <button 
                            className='pag-anterior' 
                        > 
                            <Icon>chevron_left</Icon>
                        </button>
                    </div>
                }
                <div>
                    <ul>
                        {(Globais.numPagBase-1) > 0 ?
                            <li className='lista-pag'>
                                <button 
                                    className='paginacao-num'
                                    onClick={()=>clickPag(Globais.numPagBase-2)} 
                                >
                                    {Globais.numPagBase-1}
                                </button>
                            </li>
                        :
                            <li>

                            </li>
                        }
                        {(Globais.numPagBase) > 0 ?
                            <li className='lista-pag'>
                                <button 
                                    className='paginacao-num'
                                    onClick={()=>clickPag(Globais.numPagBase-1)} 
                                >
                                    {Globais.numPagBase}
                                </button>
                            </li>
                        :
                            <li>

                            </li>
                        }
                        <li className='lista-pag active'>
                            <button 
                                className='paginacao-num'
                                onClick={()=>clickPag(Globais.numPagBase)} 
                            >
                            {Globais.numPagBase+1}
                            </button>
                        </li>
                        <li className='lista-pag'>
                            <button 
                                className='paginacao-num'
                                onClick={()=>clickPag(Globais.numPagBase+1)} 
                            >
                            {Globais.numPagBase+2}
                            </button>
                        </li>
                        <li className='lista-pag'>
                            <button 
                                className='paginacao-num'
                                onClick={()=>clickPag(Globais.numPagBase+2)} 
                            >
                                {Globais.numPagBase+3}
                            </button>
                        </li>
                    </ul>
                </div>
                <div>
                    <button 
                        className='pag-proxima' 
                        onClick={nextPag}> 
                        <Icon>chevron_right</Icon> 
                    </button>
                </div>
            </div>
        </div>  
    )
    
}