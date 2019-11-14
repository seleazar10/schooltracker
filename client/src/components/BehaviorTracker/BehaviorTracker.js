import React from 'react';

class BehaviorTracker extends React.Component{

  constructor(props){
    super(props)

  }

  render(){
    console.log(this.props);

    return (

      
      
      this.props.data.choices.map((choice) => {
       
        return (
          
              <div className="usercard"><input type="radio" name={this.props.data.name}
                value={choice.value}
                checked={this.props.selected}
                onChange={this.props.newSelection} />{choice.text}</div>

         
        )
      }
      )
    


    )


  }

}




export default BehaviorTracker;