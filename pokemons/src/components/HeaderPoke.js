import React from 'react'

export default function HeaderBlog(props){
    const [Busca, setBusca] = React.useState('')

    const setSearch = e =>{
        setBusca(e.target.value)
        props.stateBusca({buscaPoke : Busca})
    }

    //console.log(props.stateBusca)
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