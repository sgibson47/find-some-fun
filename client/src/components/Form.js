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

  componentDidMount(){
    const auth_token = `HYZOE7FG2CUN6U3Y66B4`
    fetch(`https://www.eventbriteapi.com/v3/categories/?token=${auth_token}`)
      .then(response => response.json())
      .then(data => console.log(data))
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