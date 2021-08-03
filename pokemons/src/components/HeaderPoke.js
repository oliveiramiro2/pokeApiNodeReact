import React from 'react'
import { connect } from 'react-redux'
import changePokes from '../store/action/consultaApi'

import { changeSearch } from '../store/action/pesquisaA'
import Globais from './Globais'

const VALOR_PARADA = 'parar:D'

function HeaderBlog({ changeSearch, text, changePokes, pag }){
    const [controle, setControle] = React.useState(false)
    const setSearch = e => {   
        if(e.target.value !== ""){ 
            changeSearch(e.target.value)
        }else{
            changeSearch(VALOR_PARADA)
        }
        
    }
    
    React.useEffect(() => {
        if(controle){
            changePokes(Globais.urlTodosPokes, text.text) 
        }else if(text.text === VALOR_PARADA){
            changePokes(`${Globais.urlBase}?offset=${pag*20}&limit=20`)
        }
        if(text === '' || text.text === VALOR_PARADA){                       
            setControle(false)
            Globais.filtroAtivo = controle
        }else{ 
            setControle(true)          
            Globais.filtroAtivo = controle
        }
    }, [changePokes, text, controle, setControle, pag]) 
    return (
        <div className='header-blog'>
            <nav>
                <div className='nav-wrapper'>
                    <form>
                        <div className='input-field col'>
                            <input type='search' id='TextInput-3' name='Busca' autoComplete='off' onChange={e=>setSearch(e)}></input>
                            <label className='label-icon' for='TextInput-3'>
                                <i className='material-icons'>search</i>
                            </label>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    )
}

const mapStateToProps = state => {
    return { 
        text: state.text,
        pag: state 
    }
}

export default connect(mapStateToProps, { changeSearch, changePokes })(HeaderBlog)