import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Form() {

    const [nom, setNom] = useState('');
    const [pass, setPassword] = useState('');
    const [dateNaissance, setDateNaissance] = useState('');
    const [ville, setVille] = useState('');
    const [genre, setGenre] = useState('');
    const [loisir, setLoisir] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("nom = " + nom + " pass = " + pass + " DatedeNaissance =  " + dateNaissance + " ville = " + ville + " Genre = " + genre+" Loisir = "+loisir.join(','));
    }

    const handleLoisir=(e)=>{
        if (!loisir.includes(e.target.value)) 
            setLoisir([...loisir, e.target.value]) 
        else 
            setLoisir([...loisir.filter(item=>item!==e.target.value)])
    }

    return (
        <div className="container">
            <h2>Formulaire d'inscription</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="">Nom</label>
                    <input type="text" className="form-control" placeholder='Entre Nom' value={nom} onChange={(e) => setNom(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Mot de passe</label>
                    <input type="password" className="form-control" placeholder='Entre Password' value={pass} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">Date de Naissance</label>
                    <input type="date" className="form-control" value={dateNaissance} onChange={(e) => setDateNaissance(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="">ville</label>
                    <select className="form-control" name="" id="" value={ville} onChange={(e) => setVille(e.target.value)}>
                        <option>choisir une ville</option>
                        <option value="Agadir">Agadir</option>
                        <option value="Casablanca">Casablanca</option>
                        <option value="Rabat">Rabat</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="">Genre</label>
                    <div>
                        <input type="radio" name="genre" value="Masculine" onClick={(e) => setGenre(e.target.value)} />Masculine
                        <input type="radio" name="genre" id="" value="Feminin" onClick={(e) => setGenre(e.target.value)} />Feminin
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="">Loisirs</label>
                    <div>
                        <input type="checkbox" name="loisir" value="Sport" onChange={(e)=>handleLoisir(e)}/>Sport
                        <input type="checkbox" name="loisir" value="Lecture" onChange={(e)=>handleLoisir(e)}/>Lecture
                        <input type="checkbox" name="loisir" value="Musique" onChange={(e)=>handleLoisir(e)}/>Musique
                    </div>
                </div>
                <button type='submit' className="btn btn-primary">s'inscrire</button>
            </form>
        </div>
    )
}

export default Form;
