import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

function Produits() {
    const [Produits, setProduits] = useState([{ id: 1, nom: "ordinateur", prix: 4500, categorie: "informatique" },
    { id: 2, nom: "imprimante", prix: 2500, categorie: "informatique" },
    { id: 3, nom: "écrane", prix: 1500, categorie: "informatique" }
    ]);
    
    
    const[nom, setNom] = useState("");
    const[prix, setPrix] = useState(0);
    const[categorie, setCategorie] = useState("");

    const[afficherForm, setAfficherForm] = useState(false);

    const [modifId, setModifId] = useState(0);

    function handleDelete(prd) {
        const produitCopy = Produits.filter(elem => elem.id !== prd.id);
        setProduits(produitCopy);
    }

    function handleSubmit(e){
        e.preventDefault();
        if (modifId == 0){
            //Ajouter
            let id = new Date().getTime();
            let produit = {id, nom: nom, prix, categorie}
            setProduits([...Produits, produit]);    
        }
        else{
            //Modifier
           const produit=Produits.find(ele =>ele.id==modifId);
            const produitsModifier = Produits.map(prd=>
                prd.id === produit.id ? prd={id:prd.id, nom, prix, categorie} 
                
                : 
                
                {id: prd.id, nom: prd.nom, prix: prd.prix, categorie: prd.categorie}
                )
                setProduits(produitsModifier);
                setModifId(0);
        }
        
        setAfficherForm(false);
    }

    function handleEdit(prd){
       const produitMod = Produits.find(ele=>ele.id == prd.id);
       setNom(produitMod.nom);
       setPrix(produitMod.prix);
       setCategorie(produitMod.categorie);
       setModifId(produitMod.id);
       setAfficherForm(true); 
    }

    return (
        <div className='container'>
            <div className='card m-3'>
                <div className='card-header'>
                    <h2 className='row justify-content-center'>Liste des produits</h2>
                </div>
                <div className='m-2 ms-auto'>
                    <button className='btn btn-primary' onClick={()=>setAfficherForm(true)}><strong>+</strong></button>
                </div>
                <div className='card-body'>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <th>Nom</th>
                                <th>prix</th>
                                <th>categorie</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                Produits.map(
                                    prd => (
                                        <tr>
                                            <td>{prd.nom}</td>
                                            <td>{prd.prix}</td>
                                            <td>{prd.categorie}</td>
                                            <td>
                                                <button className='btn btn-outline-danger' onClick={() => handleDelete(prd)}>Supprimer</button>
                                            </td>
                                            <td><button className='btn btn-outline-primary' onClick={()=> handleEdit(prd)}>Modifier</button></td>
                                        </tr>
                                    )
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
            { afficherForm &&
            <div className='card m-3'>
                <div className='card-body'>
                     <form onSubmit={handleSubmit}>
                        <div className='form-group'> 
                            <label className='form-label'>Nom</label>
                            <input className='form-control' type="text" value={nom} onChange={(e)=>setNom(e.target.value)}/>
                        </div>
                        
                        <div className='form-group'> 
                            <label className='form-label'>Prix</label>
                            <input className='form-control' type="text" value={prix} onChange={(e)=>setPrix(e.target.value)}/>
                        </div>
                        
                        <div className='form-group'> 
                            <label className='form-label'>Categorie</label>
                            <input className='form-control' type="text" value={categorie} onChange={(e)=>setCategorie(e.target.value)}/>
                        </div>
                        <div>
                            <button className='btn btn-outline-success mt-3'>Enregister</button>
                        </div>
                    </form>
                </div>
            </div>
            }
        </div>
    )
}

export default Produits