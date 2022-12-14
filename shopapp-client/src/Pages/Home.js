import React, { Fragment, useState } from 'react';
import Styles from "../Modules/Home.module.css";
import Loader from "../Components/Loader";


const Home = () => {
    const [loading,setLoading] = useState(true);
    const slep = () => {
        setTimeout(() => {
            setLoading(false)
        }, 500);
    }
    slep();
     if(loading) return <Loader/>
    return (
        <Fragment>
                <div className={Styles.content}>
                        <div className={Styles.titleHeader}>
                            <h2>Welcom to Shop App</h2>
                            <h3>Online Shopping App</h3>
                        </div>
                <img src='/Assets/landing-image.png' alt='landingPhoto'width="100%" />
                <img className={Styles.eventImg} src='/Assets/events.png' alt='landingPhoto2' />
                <p>Shopping App is a web app thats contain React.js project as a FrontEnd, and Asp.net Core web API as a Backend</p>
                </div>
        </Fragment>
            
    )
}
export default Home;
