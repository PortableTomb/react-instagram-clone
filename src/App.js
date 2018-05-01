import React, { Component } from 'react';
import Header from "./components/header/header";
import Post from "./components/post/post"
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Header />
       <Post name="Bear" 
             avatar="https://instagram.fsea1-1.fna.fbcdn.net/vp/ef9dafdc3424396a93ceafe62a67c924/5B97CD8C/t51.2885-19/11910247_523884977763198_2136433250_a.jpg"
             caption="violent ends"
             image="https://instagram.fsea1-1.fna.fbcdn.net/vp/42132cbf165b8e57037dba32357c2b6d/5B7A688D/t51.2885-15/e35/25024957_1938230393163639_8963493349709316096_n.jpg"/>
       <Post name="Bear"
             avatar="./user-avatar.jpg"
             caption="violent means"
             image="https://instagram.fsea1-1.fna.fbcdn.net/vp/a7f62490b10bf7d8bee43853050d0cb8/5B798803/t51.2885-15/e35/22802006_505581223140043_6631465050173341696_n.jpg"/>
      </div>
    );
  }
}

export default App;
