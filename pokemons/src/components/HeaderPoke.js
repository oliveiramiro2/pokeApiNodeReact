import React from 'react'
import { connect } from 'react-redux'

import { changeSearch } from '../store/action/pesquisaA'

function HeaderBlog({ changeSearch }){
    const setSearch = e => {    
        changeSearch(e.target.value)
    }
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
    return { text: state.text }
}

export default connect(mapStateToProps, { changeSearch })(HeaderBlog)