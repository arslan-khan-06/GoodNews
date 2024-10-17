import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

function App() {
  const pageSize = 12;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, updateProgress] = useState(0);

  const setProgress = (progress)=>{
    updateProgress(progress);
  }
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar
            color='#f11946'
            progress={progress}
          />
          <Routes>
            <Route path="/" element={<News setProgress={setProgress} apiKey={apiKey} key={"general"} pageSize={pageSize} category="general" />} />
            <Route path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key={"business"} pageSize={pageSize} category="business" />} />
            <Route path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key={"entertainment"} pageSize={pageSize} category="entertainment" />} />
            <Route path="/general" element={<News setProgress={setProgress} apiKey={apiKey} key={"general"} pageSize={pageSize} category="general" />} />
            <Route path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key={"health"} pageSize={pageSize} category="health" />} />
            <Route path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key={"sports"} pageSize={pageSize} category="sports" />} />
            <Route path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key={"science"} pageSize={pageSize} category="science" />} />
            <Route path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key={"technology"} pageSize={pageSize} category="technology" />} />
          </Routes>
        </Router>
      </>
    );
  }

  export default App;
