import React, {useEffect, useState} from 'react'
import '../Components/Home.css'

const Home = () => {
    const [prodData,setProdData] = useState([])

    useEffect(()=>{
        console.log('effect is running');
        fetchApi().then((res)=>{
            setProdData(res)
        })
        // console.log(prodData);
    }, [])

    
    const fetchApi = async()=>{
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        return data
    }

    return (
        <>
            {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">My Logo</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Collection</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Cart</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Bucket</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> */}
            {
                prodData.slice(0,10).map((prod)=>(
                    <div key={prod.id} className='ps-3'>
                        <div className="card mt-5" style={{width:230}}>
                            <img src={prod.image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{prod.title}</h5>
                                    <p className="card-text">{prod.description}</p>
                                    <a href="#" className="btn btn-primary">Add to Cart</a>
                                </div>
                        </div>
                    </div>

                ))
            }
        </>
    )
}

export default Home