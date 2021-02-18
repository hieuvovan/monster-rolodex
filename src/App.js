import logo from './logo.svg';
import './App.css';
import {CardList} from './component/card-list/card-list.component'
import React from 'react'
import {SearchBox} from './component/search-box/search-box.component'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchFields: ''
    }

  }
  componentDidMount(){
    fetch("http://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(user => this.setState({monsters: user}) )
  }
  render() {
    const {monsters , searchFields} = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchFields.toLowerCase()))
    return (
      <div className = "App">
        <h1>Monster Rolodex</h1>
        <SearchBox 
        placeholder = "Enter name"
        handlechange = {e => this.setState({ searchFields: e.target.value})}/>
        <CardList monster = {filteredMonsters}>
        </CardList>
      </div>
    );
  }
}

export default App;
