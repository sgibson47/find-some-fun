import React, {Component} from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    this.state={
      eventKeyword: '',
      category: ''
    };

    this.handleKeywordChange = this.handleKeywordChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
  }

  handleKeywordChange(event){
    this.setState({eventKeyword: event.target.value})
  }

  handleCategoryChange(event){
    this.setState({category: event.target.value})
  }

  render(){
    return(
      <div className='Form'>
        <form>
          <label> Keyword (Name, location . . . etc.)
            <input 
              type='text' 
              value={this.state.eventKeyword}
              onChange={this.handleKeywordChange}
            />
          </label><br/>
          <label> Category
            <select 
                id='categoriesList'
                value={this.state.category}
                onChange={this.handleCategoryChange}
            >

            </select>
          </label>
          <br/>
          <input type='submit' value='Find Events'/>
        </form>
      </div>
    )
  }
}

export default Form;