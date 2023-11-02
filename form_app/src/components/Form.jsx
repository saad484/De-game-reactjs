import React, { useState } from 'react'

function Form() {

    const[nom, setNom] = useState('saad')
    const handleSubmit=()=>{
            alert("nom = "+nom);
    }

  return (
    <div>
        <h2>Formulaire d'inscription</h2>
        <form onSubmit={handleSubmit}>
            <p>
                <label htmlFor="">Nom</label>
                <input type="text" placeholder='Entre Nom' value={nom} onChange={(e)=>setNom(e.target.value)} />
            </p>
            <button type='submit'>s'inscrire</button>
        </form>
    </div>
  )
}

export default Form