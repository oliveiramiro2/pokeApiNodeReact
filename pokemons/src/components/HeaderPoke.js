import React from 'react'
import { connect } from 'react-redux'
import changePokes from '../store/action/consultaApi'

import { changeSearch } from '../store/action/pesquisaA'
import Globais from './Globais'

function HeaderBlog({ changeSearch, text, changePokes }){
    const setSearch = e => {    
        changeSearch(e.target.value)
        if(text !== ''){
            console.log('true filtro', text)
            Globais.filtroAtivo = true
        }else if (text === ''){
            console.log('false filtro', text)
            Globais.filtroAtivo = false
        }
    }
    React.useEffect(() => {
        if(text !== '')
            console.log('entrou filtro', text)
            changePokes(Globais.urlTodosPokes, text.text)  
    }, [changePokes, text]) 
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