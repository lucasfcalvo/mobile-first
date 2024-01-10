import { HeaderBatatacoin } from "./components/HeaderBatatacoin"

export const App = () => {

  return (
    <>
      <HeaderBatatacoin />
      <main>
        <section className="main-exchange-container">
          <div className="backgroundImg">

          </div>
          <div className="main-exchange-container--title">
            <h2>Visualizamos todas las tasas de cambio</h2>
            <p>Traemos informacion en tiempo real de las casas de cambio y las monedas del mundo </p>
          </div>
          <section className="main-tables-container">
            <div className="main-currency-table">
              <p className="currency-table--title">Monedas</p>
              <div className="currency-table--container">
                <table>
                  <tr>
                    <td className="table__top-left">
                      Bitcoin
                    </td>
                    <td className="table__top-right table__right" >
                      $1.96  
                    <span className="down"></span>
                    </td>
                  </tr>
                  <tr>
                  <td>Ethereun</td>                    
                    <td className="table__right">
                      $1.49 
                      <span className="up"></span> </td>
                  </tr>
                  <tr>
                  <td>Ripple</td>
                    <td className="table__right">
                      $2.16 <span className="down">
                      </span></td>
                  </tr>
                  <tr>
                  <td>Stellar</td>
                    <td className="table__right">
                      $4.96<span className="down"></span> 
                      </td>
                  </tr>
                  <tr>
                  <td className="table__bottom-left">
                    Unicorn</td>
                    <td className="table__botton-right table__right">
                      $1.69<span className="up"></span> </td>
                  </tr>
                </table>
              </div>
              <div className="currency-table--actualiDate">
                <p><b>Actualizado:</b> 10 Ene 23:10</p>
              </div>

            </div>
            <div className="main-currency-table">
              <p className="currency-table--title title-comisions ">Comisiones</p>
              <div className="currency-table--container">
                <table>
                  <tr>
                    <td className="table__top-left">Bittrade</td>
                    <td className="table__top-right table__right" >$1.96  
                    <span className="down"></span>
                    </td>
                  </tr>
                  <tr>
                  <td>Poligon</td>
                    
                    <td className="table__right">$1.49 <span className="up"></span> </td>
                  </tr>
                  <tr>
                  <td>Bitpreco</td>
                    <td className="table__right">$2.16 <span className="down"></span></td>
                  </tr>
                  <tr>
                  <td>Novadax</td>
                    <td className="table__right">$4.96<span className="down"></span> </td>
                  </tr>
                  <tr>
                  <td className="table__bottom-left">Coinext</td>
                    <td className="table__botton-right table__right">$1.69<span className="up"></span> </td>
                  </tr>
                </table>
              </div>
              <div className="currency-table--actualiDate">
                <p><b>Actualizado:</b> 11 Ene 23:10</p>
              </div>

            </div>

          </section>

        </section>
        <section>seccion 2</section>
        <section>seccion 3</section>
        <section>seccion 4</section>
      </main>
      <footer>footer</footer>
    </>
  )
}


