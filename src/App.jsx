import React from 'react';
import About from './components/About';
import Access from './components/Access';
import Feature from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Nav from './components/Navbar';
import Review from './components/Review';
// relative before:absolute before:content-[''] before:w-full before:h-full before:bg-[url('../public/images/bg-curvy-desktop.svg')]  before:bg-no-repeat
class App extends React.Component {
  constructor(){
    super()
    this.state = {
      inputEmail : '',
      Error : false
    }
  }

  OnEmail = (e) =>{
    console.log(e.target.value)
    this.setState({
      inputEmail : e.target.value
    })
  }

  OnGet = ()=>{
    if(!this.state.inputEmail){
      this.setState({
        Error : true
      })
    }else{
      this.setState({
        Error : false
      })      
    }
  }


  render(){
    return (
      <div className="bg-[#181F2A]">
        <div className="bg-[#1C2431] ">
          <Nav/>
          <Hero/>
        </div>
          <Feature />
          <About />
          <Review />
          <Access Email={this.OnEmail} Click={this.OnGet} Error={this.state.Error}/>
          <Footer />
      </div>
    )
  }
}

export default App;
