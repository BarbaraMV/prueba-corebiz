import React, { Fragment } from 'react'
import style from '../Footer/Footer.modules.css'

const Footer = () => {
    return (

        <Fragment >

            <footer className={style.footerContainer}>

            <div className={style.footerDirection}>
                 <h3> Localização</h3>

                 <p>Avenida Andrómeda 2000 bloco 6 e 8</p>
                 <p> Alphavile SP</p>
                 <p>brasil@corebiz.ag</p>
                 <p>+55 11 3090 1039</p>
             </div>

             <div className="footerContact">

                 <button className="mail">ENTRE EM CONTATO</button>
                 <button className="callCenter">FALE COM O NOSSO CONSULTOR ONLINE</button>

             </div>


            </footer>
                

        </Fragment>


    )
}

export default Footer
