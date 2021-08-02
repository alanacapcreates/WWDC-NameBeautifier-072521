import React from 'react';
import randomcolor from "randomcolor"
import './App.scss';
import Button from './components/Button'
import Text from './components/Text'

const fontsArr = [
        "Caveat, cursive",
        "Josefin Slab, serif",
        "Lobster Two, cursive",
        "Roboto, sans-serif",
        "Source Code Pro, monospace"
    ]

const fontWeights = [
        "100", "200", "300", "400", "500", "600", "700", "800", "900"] 

 
 
class App extends React.Component {
   constructor(props) {
    super(props);
    this.state = {
      beautifyText:{
        fontFamily: "Roboto,sans-serif",
        fontWeight:"100",
        color: "#000",
      },
      background:{
        background: ""
      }
    };
    this.handleClick = this.handleClick.bind(this);
  }
     

  handleClick = () => {
    const randomFont = Math.floor(Math.random() * (fontsArr.length))
    const randomFontWeight = Math.floor(Math.random() * (fontWeights.length))
    const randomizedColor = randomcolor({format: 'hsla', alpha: 1, luminosity:'random'})
    console.log(randomizedColor)
    let rca = []
    rca = randomizedColor.split(", ")
    rca[0] = rca[0].replace('hsla(','')
    rca[1] = rca[1].replace('%','')
    rca[2] = rca[2].replace('%','')
    rca[3] = 1
    
    let newRCA = rca.map(Number)
    newRCA[2] = newRCA[2].toFixed(2)
    
    let newHSLA = "hsla("+newRCA[0]+", "+newRCA[1]+"%, "+newRCA[2]+"%, "+newRCA[3]+")"
    // console.log(`Long HSLA: ${randomizedColor}`)
    // console.log(`Short HSLA: ${newHSLA}`)


    //IF statement for light BG
    if(newRCA[2] < 48.7){
      console.log("less than 55....  " + newRCA)


      this.setState({
        beautifyText:{
          fontFamily: fontsArr[randomFont],
          fontWeight: fontWeights[randomFontWeight],
          color:newHSLA,
        },
        background:{
          background: newHSLA,
          color: "white"
        },
        container:{
          background: "linear-gradient(315deg, #d9d9d9 0%, #f6f2f2 74%)",
          color: "black"
        },
        border:{
          border: "2px dashed red"
        }
      });
    }
      //IF statement for dark BG
    else if(newRCA[2] > 48.7){
      this.setState({
        beautifyText:{
          fontFamily: fontsArr[randomFont],
          fontWeight: fontWeights[randomFontWeight],
          color: newHSLA,
        },
        background:{
          background: newHSLA,
          color:"black",
        },
        container:{
          background:"linear-gradient(315deg, #000000 0%, #414141 74%)",
          color: "white"
        },
        border:{
          border: "2px dashed white"
        }
      });
    };
    }
  
  render() {
    return (
      <div className="App">
     
     <div className="container" style={this.state.container}>
        
          <Text style={this.state.beautifyText} />
          <Button style={this.state.background} handleClick={this.handleClick} />
        
        <div className = "result" style={this.state.border}>
          <div>
            <h3>Your Color Is:</h3>
            <p>{this.state.beautifyText.color}</p>
          </div>
          <div>
            <h3>Your Font Family Is:</h3>
            <p>{this.state.beautifyText.fontFamily}</p>
          </div>
          <div>
            <h3>Your Font-Weight Is:</h3>
            <p>{this.state.beautifyText.fontWeight}</p>
          </div>
        </div>
      </div>

    </div>
    );
  }
}

export default App;
