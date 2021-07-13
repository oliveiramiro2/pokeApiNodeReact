import React from 'react'

import Globais from './Globais'

export default function HeaderBlog(props){

    const setSearch = e =>{
        Globais.urlPesquisa = e.target.value
        e.target.value !== '' ? Globais.filtroAtivo = true : Globais.filtroAtivo = false
        props.pesquisa()
    }

    return (
        <div className='header-blog'>
            <nav>
                <div className='nav-wrapper'>
                    <form>
                        <div className='input-field col'>
                            <input type='search' id='TextInput-3' name='Busca' onChange={e=>setSearch(e)}></input>
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