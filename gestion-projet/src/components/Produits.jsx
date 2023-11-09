import React, { useEffect, useState } from 'react';
import { deleteProduct, getPro } from './Pers';

function Produits() {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        handleGetProduits();
    }, []);


    function handleDeleteProduct(product) {
        deleteProduct(product)
            .then(resp => {
                setProducts(prevProducts => {
                    return prevProducts.filter(prd => prd.id !== resp.data.id);
                });
            })
            .catch(err => {
                console.log(err);
            });
    }
    function handleGetProduits() {
        getPro()
            .then(resp => {
                setProducts(resp.data);
            })
            .catch(err => {
                console.log(err);
            });
    }



    return (
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h1>List of products</h1>
                </div>
                <div className='card-body'>
                    <table className="table">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Category</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(prd => (
                                <tr key={prd.id}>
                                    <th scope="row">{prd.id}</th>
                                    <td>{prd.name}</td>
                                    <td>{prd.price}</td>
                                    <td>{prd.category}</td>
                                    <td>
                                        <button className="btn btn-primary">Edit</button>
                                        <button
                                            className="btn btn-danger ms-1"
                                            onClick={() => handleDeleteProduct(prd)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
export default Produits;
