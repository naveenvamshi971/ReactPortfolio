import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import WriteRecommendation from './components/WriteRecommendation';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NotFound from './components/NotFound';
import ProjectPage from './components/ProjectPage';
import HomePage from './components/HomePage';
import BlogPage from './components/BlogPage';
import AddProject from './components/AddProject';
import {Provider} from "./context";
import AllProjects from './components/AllProjects';
import AddBlog from './components/AddBlog';
import AllBlogs from './components/AllBlogs';
import ScrollToTop from "./components/ScrollToTop";
import ModalCard from "./components/ModalCard";


function App() {
  return (
    <Provider>
      <BrowserRouter>
      <ScrollToTop/>
      <Navbar />
      <Switch>
        <Route exact path="/" component={HomePage}/> 
        <Route exact path="/contact" component={Contact}/>   
        <Route exact path="/writeRecommendation" component={WriteRecommendation}/>

        <Route exact path="/allProjects" component={AllProjects}/>
        <Route exact path="/addProject" component={AddProject}/>
        <Route exact path="/project/:id" component={ProjectPage}/>

        <Route exact path="/allBlogs" component={AllBlogs}/>
        <Route exact path="/addBlog" component={AddBlog}/>
        <Route exact path="/blog/:id" component={BlogPage}/>
        <Route component={NotFound}/>
      </Switch>
      <Footer />
    </BrowserRouter>  

    </Provider>
     
  );   
}

export default App;