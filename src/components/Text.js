import React, {Component} from "react"

class Text extends Component{
   constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    
    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    
    render() {
        return (
            <div className="input-container">
                <div className = "userInput">
                    <div>
                        <p style={this.props.style}>{this.state.text}</p>   
                    </div>
                </div>
                <input  
                        type="text" 
                        id="text"
                        value={this.state.text} 
                        name="text" 
                        placeholder="Enter Your Text Here" 
                        onChange={this.handleChange} 
                    /> 
            </div>
        )
    }
}

export default Text