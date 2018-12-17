import React, { Component } from 'react'
import axios from 'axios'


class ReviewSection extends Component {

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

      <div className="container comment_section">
        {/*//--OCENY*/}
        <div className="row">
          {/*ŚREDNIA*/}
          <div className="col-sm-6 rating_simple">
            <h4>Średnia ocena użytkowników:</h4>
            <div className="row">
              <div className="col-sm-2  myyellow"><i className="icon-star" /></div>
              <div className="col-sm-5">4.8/5</div>
            </div>
          </div>
          <div className="col-sm-6 rating_advanced">
            {/*5 STARS*/}
            <a href="#">
              <div className="row">
                <span>5</span>
                <div className="col-sm-1  "><i className="icon-star" /></div>
                <div className="col-sm-5">
                  <div className="progress" style={{height: '9px', margin: '8px 0'}}>
                    <div className="progress-bar progress-bar-success" style={{width: '75%'}}>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">21</div>
              </div>
            </a>
            {/*4 STARS*/}
            <a href="#">
              <div className="row">
                <span>4</span>
                <div className="col-sm-1  "><i className="icon-star" /></div>
                <div className="col-sm-5">
                  <div className="progress" style={{height: '9px', margin: '8px 0'}}>
                    <div className="progress-bar progress-bar-success" style={{width: '5%'}}>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">3</div>
              </div>
            </a>
            {/*3 STARS*/}
            <a href="#">
              <div className="row">
                <span>3</span>
                <div className="col-sm-1  "><i className="icon-star" /></div>
                <div className="col-sm-5">
                  <div className="progress" style={{height: '9px', margin: '8px 0'}}>
                    <div className="progress-bar progress-bar-success" style={{width: '10%'}}>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">5</div>
              </div>
            </a>
            {/*2 STARS*/}
            <a href="#">
              <div className="row">
                <span>2</span>
                <div className="col-sm-1  "><i className="icon-star" /></div>
                <div className="col-sm-5">
                  <div className="progress" style={{height: '9px', margin: '8px 0'}}>
                    <div className="progress-bar progress-bar-success" style={{width: '5%'}}>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">3</div>
              </div>
            </a>
            {/*1 STARS*/}
            <a href="#">
              <div className="row">
                <span>1</span>
                <div className="col-sm-1  "><i className="icon-star" /></div>
                <div className="col-sm-5">
                  <div className="progress" style={{height: '9px', margin: '8px 0'}}>
                    <div className="progress-bar progress-bar-success" style={{width: '5%'}}>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">1</div>
              </div>
            </a>
          </div>
        </div>
        {/*OCENY--//*/}
        {/*//--KOMENTARZE*/}
        <div className="row">
          <div className="col-sm">
            <hr />
            <div className="review-block">
              {/*OPINIA 1*/}
              <div className="row">
                <div className="col-sm-2">
                  <img src="https://dummyimage.com/70x70/9d9da3/050505" className="img-rounded" />
                  <div className="review-block-name">Andrzej</div>
                  <div className="review-block-date">Październik 25, 2018<br />15:30</div>
                </div>
                <div className="col-sm-10">
                  <div className="review-block-rate">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star-empty" />
                    <i className="icon-star-empty" />
                  </div>
                  <div className="review-block-title">polecam</div>
                  <div className="review-block-description">Niesamowicie zwiększa produktywność. Organizowanie zdań dnia codziennego z Notem to prawdziwa frajda. Funkcja konwersji pisma odręcznego na cyfrowy działa jak magia. Całość zwieńczona świetnym ekranem i aparatem. Chyba będę fanem serii.</div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-6">
                      <h6>Zalety:</h6>
                    </div>
                    <div className="col-sm-6">
                      <h6>Wady:</h6>
                    </div>
                  </div>
                  <div className="review-block-cons-pros row">
                    <div className="col-sm-6 review-block-pros">
                      <p>szybki czas ładowania</p>
                      <p>duży ekran</p>
                      <p>aparat</p>
                    </div>
                    <div className="col-sm-6 review-block-cons">
                      <p>cena</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-2">
                  <i className="icon-thumbs-up" />
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div className="container">
            <input type="button" defaultValue="Dodaj opinię" className="add btn btn-outline-primary" onclick="window.location='../utility/addreview.html';" />
          </div>
        </div>

      </div>

	  
	          
		 )
	}
}


export default ReviewSection
