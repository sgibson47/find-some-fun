import React, {Component} from 'react';

class Form extends Component {
  constructor(props){
    super(props);
    this.state={
      eventKeyword: '',
      category: ''
    };

  }

  render(){
    return(
      <div className='Form'>
        <form>
          <label> Keyword (Name, location . . . etc.)
            <input 
              type='text' 
            />
          </label><br/>
          <label> Category
            <select id='categoriesList'>

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