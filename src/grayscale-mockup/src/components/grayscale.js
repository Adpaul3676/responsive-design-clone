import React, {Component} from 'react';

class Grayscale extends Component {
  constructor() {
    super()

    this.state = {
      menuState: false,
    }
  }

  menuOpen() {
    this.setState({menuState: !this.state.menuState})
  }

  render () {

    let dropDownMenu = 
    <div className='dropTopContainer'> 
      <div className='dropNavBox'>
        <button className='menuText'>About</button>       
        <button className='menuText'>Projects</button>       
        <button className='menuText'>Contact</button>
      </div>
    </div>

    return (
      <div className="App">
        <section className='backgroundImages'>
          <img className='image1' src="https://startbootstrap.github.io/startbootstrap-grayscale/assets/img/bg-masthead.jpg"></img>
          <div className='opaque'></div>
          {/* Beginning of the navBar */}
          <section className={`topBox ${this.state.menuState ? 'dropDown' : 'reverse'}`}>
            <div className='topContainer'>
              <div className='titleBox'>
                <h1 className='titleText'>Start Bootstrap</h1>
              </div>  
              <div className='navBox'>
                <button className='menuBox' onClick={() => this.menuOpen()}>Menu</button>
                <div className='navItem aboutBox'>
                  <button className='textOpacity'>About</button>
                </div> 
                <div className='navItem'>
                  <button className='textOpacity'>Projects</button>
                </div> 
                <div className='navItem'>
                  <button className='textOpacity'>Contact</button>
                </div>
              </div>
            </div>
            {this.state.menuState ? dropDownMenu : null}
          </section>
          {/* End of the navBar and beginning of the first body */}
          <section className='mainBox1'>
            <div className='textBox1'>
              <h1 className='grayscaleText'>GRAYSCALE</h1>
            </div>
            <div className='textBox2'>
              <h2 className='subText'>A free, responsive, one page Bootstrap theme created by Start Bootstrap</h2>
            </div>
            <button className='startButton'>GET STARTED</button>
          </section>
        </section>
      </div>
    );
  }
}

export default Grayscale;