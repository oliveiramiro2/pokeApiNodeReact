import React from 'react'
import { Icon } from 'react-materialize'
import { connect } from 'react-redux'

import { changePage } from './../store/action/paginacaoA'
import changePokes from './../store/action/consultaApi'
import Globais from './Globais'

function Pagination({ changePage, changePokes, text }){
    const [control, setControl] = React.useState(0)

    React.useEffect(() => {
        if(text === ''){
            changePokes(`${Globais.urlBase}?offset=${control*20}&limit=20`)
        }
    }, [changePokes, control, text])
        
    const nextPag = () => {        
        setControl(control+1)
        changePage(control)
    }

    const prevPag = () => {
        setControl(control-1)
        changePage(control)
    }

    const clickPag = (pagina) => {
        setControl(pagina)
        changePage(control)
    }

    return(
        <div className='paginator'>
            <div className='container-paginator'>
                {control > 0 ?
                    <div>
                        <button 
                            className='pag-anterior' 
                            onClick={prevPag}> 
                            <Icon>chevron_left</Icon>
                        </button>
                    </div>
                :
                    <>
                    </>
                }
                <div>
                    <ul>
                        {(control-1) > 0 ?
                            <li className='lista-pag'>
                                <button 
                                    className='paginacao-num'
                                    onClick={()=>clickPag(control-2)} 
                                >
                                    {control-1}
                                </button>
                            </li>
                        :
                            <>

                            </ >
                        }
                        {(control) > 0 ?
                            <li className='lista-pag'>
                                <button 
                                    className='paginacao-num'
                                    onClick={()=>clickPag(control-1)} 
                                >
                                    {control}
                                </button>
                            </li>
                        :
                            <>
                            </>
                        }
                        <li className='lista-pag active'>
                            <button 
                                className='paginacao-num'
                                onClick={()=>clickPag(control)} 
                            >
                            {control+1}
                            </button>
                        </li>
                        <li className='lista-pag'>
                            <button 
                                className='paginacao-num'
                                onClick={()=>clickPag(control+1)} 
                            >
                            {control+2}
                            </button>
                        </li>
                        <li className='lista-pag'>
                            <button 
                                className='paginacao-num'
                                onClick={()=>clickPag(control+2)} 
                            >
                                {control+3}
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

const mapStateToProps = state => {
    return { 
        pag: state,
        text: state.text
    }
}

export default connect(mapStateToProps, { changePage, changePokes })(Pagination)