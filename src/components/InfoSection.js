import React, { Component } from 'react'
import axios from 'axios'
 
 
class InfoSection extends Component {
 
  constructor(props) {
  super(props);
  this.state = {products:[]};
}
 
 
  componentDidMount() {
 
  //http://oceneo-api.herokuapp.com/api/products.json
  //https://jsonplaceholder.typicode.com/users
 
   axios.get('http://oceneo-api.herokuapp.com/api/products.json')
   .then(res => {
     console.log(res)
     const products = res.data;
     this.setState({products})
   })
   .catch(error => console.log(error))
 }
 
  render(){
 
        return(
 
<div className="row">
      
    <div className="col-lg-6 product_info">
        <div className="container gallery-container">
         
            <div id="gallery" className="carousel slide tz-gallery" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#gallery" data-slide-to={0} className="active" />
                    <li data-target="#gallery" data-slide-to={1} />
                    <li data-target="#gallery" data-slide-to={2} />
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="thumbnail">
                            <a className="lightbox" href="https://o.aolcdn.com/images/dims?quality=100&image_uri=https%3A%2F%2Fs.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F1bae1ff05f60c93ff69bcf81ab56169d%2F206660589%2Faffordable-ed.jpg&client=amp-blogside-v2&signature=d8aa649066f9b16ea2014cf15af96d76dca56e9d">
                              <img src="https://o.aolcdn.com/images/dims?quality=100&image_uri=https%3A%2F%2Fs.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F1bae1ff05f60c93ff69bcf81ab56169d%2F206660589%2Faffordable-ed.jpg&client=amp-blogside-v2&signature=d8aa649066f9b16ea2014cf15af96d76dca56e9d" alt="Bridge" />
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="thumbnail">
                            <a className="lightbox" href="https://i.wpimg.pl/730x0/m.komorkomania.pl/apple-iphone-xs-1-ff43ae2021e4a0.jpg">
                              <img src="https://i.wpimg.pl/730x0/m.komorkomania.pl/apple-iphone-xs-1-ff43ae2021e4a0.jpg" alt="Park" />
                            </a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className="thumbnail">
                            <a className="lightbox" href="https://media.idownloadblog.com/wp-content/uploads/2018/09/iPhone-XR-XS-wallpaper-mockup.jpg">
                              <img src="https://media.idownloadblog.com/wp-content/uploads/2018/09/iPhone-XR-XS-wallpaper-mockup.jpg" alt="Tuneel" />
                            </a>
                        </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#gallery" data-slide="prev">
                    <span className="carousel-control-prev-icon" />
                </a>
                <a className="carousel-control-next" href="#gallery" data-slide="next">
                    <span className="carousel-control-next-icon" />
                </a>
            </div>
        </div>
    </div>
       
    <div className="col-lg-6 product_info">
        <div className="row">
            <h5>Specyfikacja</h5>
        </div>
        <hr />
        <div className="row">
            <div id="parametr-1" className="col-3 bold">Ekran:</div>
            <div id="wartosc-1" className="col-sm">
              <p>6.1 inches, 90.3 cm2 (~79.0% screen-to-body ratio)</p>
              <p>828 x 1792 pixels, 19.5:9 ratio (~326 ppi density)</p>
              <p>True-tone display</p>
            </div>
        </div>
        <div className="row">
            <div id="parametr-2" className="col-3 bold">Wymiary:</div>
            <div id="wartosc-2" className="col-sm">
              <p>150.9 x 75.7 x 8.3 mm (5.94 x 2.98 x 0.33 in)</p>
            </div>
        </div>
        <div className="row">
            <div id="parametr-3" className="col-3 bold">Pamięć:</div>
            <div id="wartosc-3" className="col-sm">
              <p>64/128/256 GB, 3 GB RAM</p>
            </div>
        </div>
        <div className="row">
            <div id="parametr-4" className="col-3 bold">Aparat:</div>
            <div id="wartosc-4" className="col-sm">
              <p>12 MP, f/1.8, 26mm (wide), 1/2.55", 1.4µm, OIS, PDAF</p>
              <p>Quad-LED dual-tone flash, HDR (photo/panorama)</p>
              <p>2160p@24/30/60fps, 1080p@30/60/120/240fps, HDR, stereo sound rec.</p>
            </div>
        </div>
    </div>
</div>
)}}
 
 
export default InfoSection