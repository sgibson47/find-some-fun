import React, {Component} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Alert from 'react-bootstrap/Alert';


class EventForm extends Component {
  constructor(props){
    super(props);
    this.state={
      eventKeyword: '',
      category: '',
      alert: null
    };

    this.handleKeywordChange = this.handleKeywordChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleKeywordChange(event){
    this.setState({eventKeyword: event.target.value})
  }

  handleCategoryChange(event){
    this.setState({category: event.target.value})
  }

  handleSubmit(event){
    event.preventDefault();
    const eventKeyword = document.getElementById('eventKeyword').value;
    const category = document.getElementById('categoriesList').value;

    if(eventKeyword !== '' && category !== ''){
      //Find matching events from API
      this.props.searchEB(eventKeyword, category);
    }else if(eventKeyword === '' && category !== ''){
      // Display a message that you must provide a keyword
      this.addWarning('You must provide a keyword to search')
    }else if(eventKeyword !== '' && category === ''){
      // Display a message that you must select a category
      this.addWarning('You must select a category to search')
    }else{
      // Display a message that you must provide a keyword & select a keyword
      this.addWarning('You must provide a keyword and select a category to search')
    }
  }

  componentDidMount(){
    const auth_token = process.env.REACT_APP_EVENTBRITE_API_KEY;
    fetch(`https://www.eventbriteapi.com/v3/categories/?token=${auth_token}`)
      .then(response => response.json())
      .then(data => this.addCategories(data))
  }

  addCategories(data){
    const categories = data.categories
    const categoriesSelect = document.querySelector('#categoriesList');
    categories.forEach(category => {
      const option = document.createElement('option');
      option.value = category.id;
      option.appendChild(document.createTextNode(category.name));
      categoriesSelect.appendChild(option);
    })
  }

  addWarning(message) {
    this.setState({
      alert: (<Alert dismissible variant="warning" onClose={() => this.removeWarning()}>
        <Alert.Heading>{message}</Alert.Heading>
      </Alert>)
    })
  }

  removeWarning(){
    this.setState({alert: null})
  }

  render(){
    return(
      <Form onSubmit={this.handleSubmit} id='eventForm'>
        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Keyword
          </Form.Label>
          <Col sm={10}>
            <Form.Control 
              type='text' 
              id='eventKeyword'
              placeholder='Name, location . . . etc.'
              value={this.state.eventKeyword}
              onChange={this.handleKeywordChange}
            />
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={2}>
            Category
          </Form.Label>
            <Col sm={10}>
              <Form.Control 
              as="select"
              id='categoriesList'
              value={this.state.category}
              onChange={this.handleCategoryChange}
              >
                <option value="">Select a Category</option>
              </Form.Control>
            </Col>
          
        </Form.Group>

        <Form.Group as={Row}>
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Find Events</Button>
          </Col>
        </Form.Group>
        {this.state.alert}
      </Form>
    )
  }
}

export default EventForm;