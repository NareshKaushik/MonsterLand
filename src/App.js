import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/CardList';
import SearchBox from './components/search/search_box';

class App extends Component{

  constructor(){
    super();
    this.state = {
    monsters: [],
    searchKeyword : ""
    };

  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(models => this.setState({monsters : models}));
  }

  onChangeListener = (event) =>{
    this.setState({searchKeyword:event.target.value})
  }
  render() {
    const {monsters,searchKeyword} = this.state;
    const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchKeyword.toLowerCase()))
    return(
      <div className="App">
        <h1 >Monster Land</h1>
        <SearchBox placeholderText = "Search your monster" onChangeListener = {e=>this.onChangeListener(e)}/>
        <CardList monsters = {filteredMonsters}/>
    </div>
    );
  }
}
export default App;
