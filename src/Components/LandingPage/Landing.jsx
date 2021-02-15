import React, { Fragment } from 'react'
import corebiz from '../../statics/logo.png'
import style from '../LandingPage/Landing.modules.css'
import profile from '../../statics/account.png'
import cart from '../../statics/shopping-cart.png'
import BannerPhoto from '../../statics/Banner.jpg'
import mailPhoto from '../../statics/mail.png'

const Landing = () => {
    return (

    <fragment>

        <header className={style.headerContainer}>
            <div className="logoContainer">
                <div className={style.logoCorebiz}>
                <img src={corebiz}></img>
                </div>
            </div>
            <div className="searchBar">
                <h3>Barra de busqueda</h3>
            </div>

            <div className="profileContainer">
                <div className={style.profileLogo}>
                <img src={profile}></img>
                <p>Minha conta</p>
                </div>
            </div>  

            <div className="miniCart">
              <div className={style.shoppingCart}>
                  <img src={cart}></img>
              </div>
                </div>   
         </header>    

         <div className="banner">
         <div className="bannerContainer">
              <div className={style.slider}>
                <img src={BannerPhoto}></img>
              </div>
            </div>
            
         </div>

         <div className="products">
             <div className="productsContainer">
                 <h1>AQUI VAN LOS PRODUCTOS</h1>

                
                
             </div>
         </div>

         <footer>
             

         </footer>

            
    </fragment>

         
         
         
    )
}

export default Landing
