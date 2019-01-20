import React, { Component } from 'react'
import axios from 'axios'
import ReactDOM from "react-dom";
import { withRouter } from "react-router";
import ReviewSection from '../components/ReviewSection';
class InfoSection extends Component {
 
  constructor(props) {
  super(props);
  this.state = {details:[]};
}
 
 
  componentDidMount() {
	const {
      match: {
        params: { product_id }
      }
    } = this.props;
  
 
   axios.get(`https://oceneo-api.herokuapp.com/api/products/${product_id}`)
   .then(res => {
     console.log(res)
	 const details = res.data;
     this.setState({details})
   })
   .catch(error => console.log(error))
 }
 
  render(){
 
        return(
 
	<div>
      {this.state.details.map(detail => 
	<div className="row">
    <div className="col-lg-6 product_info">
        <div className="container gallery-container">
            <div id="gallery" className="carousel slide tz-gallery" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#gallery" data-slide-to={0} className="active" />
                </ul>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <div className="thumbnail">
                            <a className="lightbox" href={detail.image}>
                              <img src={detail.image} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-lg-6 product_info">
        <div className="row">
            <h5>Specyfikacja</h5>
        </div>
        <hr />
        <div className="row">
            <div id="parametr-1" className="col-3 bold">Nazwa:</div>
            <div id="wartosc-1" className="col-sm">
              <p>{detail.name}</p>
            </div>
        </div>
        <div className="row">
            <div id="parametr-2" className="col-3 bold">Opis:</div>
            <div id="wartosc-2" className="col-sm">
              <p>{detail.description}</p>
            </div>
        </div>	
		<div class="container rating_simple">
			<div class="row">
				<div class="col-sm-12">Średnia ocena:</div>
			</div>
			<div class="row">
				<div class="col-sm-3 ">{detail.avg.toFixed(2)}/5</div>
				<div class="col-sm-2  myyellow"><i class="icon-star"></i></div>
			</div>
		</div>
    </div>
	</div>
	)}

</div>

)}}
 
 
export default withRouter(InfoSection);