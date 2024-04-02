import React from 'react'


const Pesquisar = ({ pesquisar, setPesquisar }) => {
    return (
        <div className='pesquisar'>
            <h1>Pesquisar</h1>
            <input type="text"  
                value={pesquisar}
                onChange={(e) => setPesquisar(e.target.value)}
                placeholder="Digite sua busca" />
        </div>
    )
}

export default Pesquisar
