import React from 'react';
import ReactDOM from 'react-dom';
import 'css/boostrap.css';
import 'css/fontello_icons-embedded.css';
import 'css/custom.css';
import 'js/jquery-3.3.1.js';
import 'js/bootstrap.js';

import * as serviceWorker from './serviceWorker';

var FrontPage = React.createClass({
  render: function() {
    return (
      <div>
        {/*//--MENU*/}
        <header className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="index.html"><span className="mainlogo"><h1>Oceneo</h1></span></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar1" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <form className="searchbar" role="search">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Czego szukasz" name="srch-term" id="srch-term" />
                <div className="input-group-btn">
                  <button className="btn btn-outline-success form-control-menu" type="submit"><i className="icon-search" /></button>
                </div>
              </div>
            </form>
            <div className="collapse navbar-collapse" id="navbar1">
              <ul className="navbar-nav ml-auto"> 
                <li className="nav-item ">
                  <a className="nav-link menu-item" href="utility/addproduct.html"><i className="icon-plus" /><span className="largenav">Dodaj produkt</span></a>
                </li>
                {/* <li class="nav-item dropdown"> */}
                {/* <a class="nav-link  dropdown-toggle" href="#" data-toggle="dropdown">  Dropdown  </a> */}
                {/* <ul class="dropdown-menu"> */}
                {/* <li><a class="dropdown-item" href="#"> Menu item 1</a></li> */}
                {/* <li><a class="dropdown-item" href="#"> Menu item 2 </a></li> */}
                {/* </ul> */}
                {/* </li> */}
                <li className="nav-item">
                  <a className="nav-link menu-item" href="utility/login.html"><i className="icon-user" /><span className="largenav">Logowanie</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link menu-item" href="utility/adduser.html"><i className="icon-user-add" /><span className="largenav">Rejestracja</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link menu-item" href="utility/profile.html"><i className="icon-user" /><span className="largenav">Konto</span></a>
                </li>
              </ul>
            </div>
          </nav>
          {/*MENU--//*/}
        </header>
        {/*Produkty-----------------------------------------------------------------------------------------------------*/}
        <div className="container products">
          <h4>Najczęściej wyszukiwane produkty</h4><a href="#"> (Zobacz więcej...)</a>
          <div className="row">
            <div className="card container">
              <div className="box">
                <a href="products/item1.html">
                  <div className="img container">
                    <img src="https://cdn.x-kom.pl/i/setup/images/prod/big/product-big,apple-iphone-xr-64gb-black-448356,2018/9/pr_2018_9_13_9_1_32_809_00.jpg" />
                  </div>
                </a>
                <div className="container">
                  <h2>
                    Apple iPhone Xr<br /><span>64GB Black </span>
                  </h2>
                  <div className="display-rating">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star-empty" />
                    <i className="icon-star-empty" />
                    <a href="products/item1.html">(Opinie - 3)</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card container">
              <div className="box">
                <a href="products/item1.html">
                  <div className="img container">
                    <img src="https://images.samsung.com/is/image/samsung/p5/pl/826x620_2-min.png?$ORIGIN_PNG$" />
                  </div>
                </a>
                <div className="container">
                  <h2>
                    Samsung Galaxy Note 9<br /><span>N960F Dual SIM 6/128</span>
                  </h2>
                  <div className="display-rating">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star-empty" />
                    <i className="icon-star-empty" />
                    <a href="products/item2.html">(Opinie - 3)</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="card container">
              <div className="box">
                <a href="products/item1.html">
                  <div className="img container">
                    <img src="https://c.s-microsoft.com/pl-pl/CMSImages/SurfaceHome_Lg_ImagePanel_silver-pro-2_V1.png?version=081dbbb3-dd12-7e2e-06e2-b80e91108c6b" />
                  </div>
                </a>
                <div className="container">
                  <h2>
                    Microsoft Surface Pro 4<br /><span>i5-6300U/8GB/256SSD</span>
                  </h2>
                  <div className="display-rating">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star-empty" />
                    <i className="icon-star-empty" />
                    <a href="products/item3.html">(Opinie - 3)</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <footer className="footer">
          <hr />
          <div className="container bottom_border">
            <div className="row">
              <div className=" col-sm-4 col-md col-sm-4  col-12 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Kontakt</h5>
                <p className="mb10">Lorem Ipsum is simply dummy text</p>
                <p> ul. Jakastam Miasto 11-111 </p>
                <p> +48 505606707</p>
                <p> adres@gmail.com</p>
              </div>
              <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Szybkie linki</h5>
                <ul className="footer_ul_amrc">
                  <li><a href="#">Centrum Pomocy</a></li>
                  <li><a href="#">Regulamin</a></li>
                  <li><a href="#">Aktualności</a></li>
                  <li><a href="#">Polityka prywatności</a></li>
                  <li><a href="#">Dla firm</a></li>
                  <li><a href="#">Kariera</a></li>
                </ul>
              </div>
              <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Szybkie linki</h5>
                <ul className="footer_ul_amrc">
                  <li><a href="#">Centrum Pomocy</a></li>
                  <li><a href="#">Regulamin</a></li>
                  <li><a href="#">Aktualności</a></li>
                  <li><a href="#">Polityka prywatności</a></li>
                  <li><a href="#">Dla firm</a></li>
                  <li><a href="#">Kariera</a></li>
                </ul>
              </div>
              <div className=" col-sm-4 col-md  col-6 col">
                <h5 className="headin5_amrc col_white_amrc pt2">Media</h5>
                <ul className="footer_ul_amrc">
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Instagram</a></li>
                  <li><a href="#">Youtube</a></li>
                  <li><a href="utility/addproduct.html">Dodaj</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
});
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
