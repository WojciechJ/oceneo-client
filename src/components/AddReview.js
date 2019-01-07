import React, { Component } from 'react';
import axios from 'axios';
import '../css/bootstrap.css';
import '../css/custom.css';
import '../css/fontello_icons-embedded.css';
import '../css/baguetteBox.min.css';
import HeaderSmall from '../components/HeaderSmall';
import StarRatingComponent from 'react-star-rating-component';
import $ from 'jquery';
import {
	BrowserRouter as Router,
	Route,
	Link,
	withRouter
} from 'react-router-dom';

class AddReview extends Component {
	
	constructor() {
    super();
 
    this.state = {
      rating: 1,
	  rating_custom_icon: 1,
	  name: '',
	  comment: '',
	  title: '',
      pros: [{ name: '' }],
	  cons: [{ name: '' }]
    };
  }
   onStarClickCustomIcon(nextValue, prevValue, name) {
    console.log('name: %s, nextValue: %s, prevValue: %s', name, nextValue, prevValue);
    this.setState({rating_custom_icon: nextValue});
  }
  
  handleTitleChange = (evt) => {
    this.setState({ title: evt.target.value });
  }
  handleCommentChange = (evt) => {
    this.setState({ comment: evt.target.value });
  }
  handleProsNameChange = (idx) => (evt) => {
    const newPros = this.state.pros.map((pro, sidx) => {
      if (idx !== sidx) return pro;
      return { ...pro, name: evt.target.value };
    });
    
    this.setState({ pros: newPros });
  }
  
  handleAddPros = () => {
    this.setState({ pros: this.state.pros.concat([{ name: '' }]) });
  }
  
  handleRemovePros = (idx) => () => {
    this.setState({ pros: this.state.pros.filter((s, sidx) => idx !== sidx) });
  }
  
   handleConsNameChange = (idx) => (evt) => {
    const newCons = this.state.cons.map((con, sidx) => {
      if (idx !== sidx) return con;
      return { ...con, name: evt.target.value };
    });
    
    this.setState({ cons: newCons });
  }
  
  handleAddCons = () => {
    this.setState({ cons: this.state.cons.concat([{ name: '' }]) });
  }
  
  handleRemoveCons = (idx) => () => {
    this.setState({ cons: this.state.cons.filter((s, sidx) => idx !== sidx) });
  }
  handleSubmit = (evt) => {
    const { value, title, comment, pros, cons } = this.state;
    alert(`Incorporated: with ${pros.length} pros and ${cons.length} cons`);
	
	const rate = {
	  value: this.state.value,
      title: this.state.title,
	  comment: this.state.comment,
	  pros: this.state.pros,
	  cons: this.state.cons,
	  created_at: this.state.created_at
    };
	axios.post(`http://oceneo-api.herokuapp.com/api/products/1/rates.json`, { rate })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
	
  }
  
  
  
  
	render(){
		
		const { rating } = this.state;
		
		return(
		
		<div>
			<HeaderSmall />		
			<form onSubmit={this.handleSubmit} role="form">
				<div className="row">
				  <h4>Dodaj nową opinię</h4>
				</div>
			  <hr />

			<StarRatingComponent
            name="value"
            starCount={5}
            value={this.state.rating_custom_icon}
            onStarClick={this.onStarClickCustomIcon.bind(this)}
            starColor="#FA9302"
            renderStarIcon={() => <span><h2><i className="fa fa-star" aria-hidden="true" /></h2></span>} />
			

		<div className="form-group row">
              <input 
				  type="text" 
				  name="title"
				  className="form-control" 
				  value={this.state.title}
				  placeholder="Tytuł" 
				  onChange={this.handleTitleChange}
			  />
        </div>
		
		<div className="form-group row">
            <textarea 
				name="comment"
				className="form-control" 
				placeholder="Twoja opinia" 
				rows={3} 
				value={this.state.comment}
				onChange={this.handleCommentChange}
				/>
          </div>
		 
		<hr />
		<div className="row">
		<div className="col-sm-6">
		{this.state.pros.map((pros, idx) => (
         
		  <div className="row">
            <input
              type="text"
			  name="pros"
			  className="form-control col-sm-9"
              placeholder={`Zaleta #${idx + 1}`}
              value={pros.name}
              onChange={this.handleProsNameChange(idx)}
            />
			<div class="col-sm-1"><input onClick={this.handleRemovePros(idx)} type="button" class="remove btn btn-outline-primary" value="Usuń"></input></div>
           
          </div>

        ))}
		</div>
		<div className="col-sm-6">
		{this.state.cons.map((cons, idx) => (
         
		  <div className="row">
            <input
              type="text"
			  name="cons"
			  className="form-control col-sm-9"
              placeholder={`Wada #${idx + 1}`}
              value={cons.name}
              onChange={this.handleConsNameChange(idx)}
            />
			<div class="col-sm-1"><input onClick={this.handleRemoveCons(idx)} type="button" class="remove btn btn-outline-primary" value="Usuń"></input></div>
           
          </div>
         

        ))}
		</div>
		</div>
		
		<div class="row col-sm">
			<div class="col-sm-6">
					<input onClick={this.handleAddPros} type="button" value="+" class="add btn btn-outline-primary" id="add_A" ></input>
			</div>
			<div class="col-sm-6">
					<input onClick={this.handleAddCons} type="button" value="+" class="add btn btn-outline-primary" id="add_B" ></input>
			</div>
		</div>

          <div className="form-group row">
            <div className="center">
              <input type="submit" defaultValue="Dodaj Opinię" className="btn btn-primary" />
            </div>
          </div>
		
		</form>
		</div>
       

		
		
		);
		
		
	}
}

export default AddReview;