import './App.css';
import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 12;
  apiKey = process.env.REACT_APP_NEWS_API;
  state = {
    progress: 0
  }
  setProgress = (progress)=>{
    this.setState({progress: progress});
  }
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Routes>
            <Route path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"general"} pageSize={this.pageSize} category="general" />} />
            <Route path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"business"} pageSize={this.pageSize} category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"entertainment"} pageSize={this.pageSize} category="entertainment" />} />
            <Route path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"general"} pageSize={this.pageSize} category="general" />} />
            <Route path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"health"} pageSize={this.pageSize} category="health" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"sports"} pageSize={this.pageSize} category="sports" />} />
            <Route path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"science"} pageSize={this.pageSize} category="science" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key={"technology"} pageSize={this.pageSize} category="technology" />} />
          </Routes>
        </Router>
      </>
    );
  }
}
