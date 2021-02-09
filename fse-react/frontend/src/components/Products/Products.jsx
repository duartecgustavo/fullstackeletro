import React from 'react';
import teste from '../../assets/teste.jpg'

const LazyLoading = () => {

    return (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{backgroundColor:"white"}}>
            <img className="img-fluid" src={teste} />
        </div>

    )
}

export default LazyLoading;