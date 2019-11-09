import React from 'react';

class TeaFileUpload extends React.Component {
    // constructor(props) {
    //   // highlight-range{3}
    //   super(props);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    //   this.fileInput = React.createRef();
    // }
    // handleSubmit(event) {
    //   // highlight-range{4}
    //   event.preventDefault();
    //   alert(
    //     `Selected file - ${
    //       this.fileInput.current.files[0].name
    //     }`
    //   );
    // }

    
  
    render(props) {
      // highlight-range{5}
      return (
        <form onSubmit={this.props.handleSubmit}>
          <label>
           
            <input type="file" ref={this.props.fileInput} />
          </label>
          <br />
          <button type="submit" className="btn bg-primary" >Upload</button>
        </form>
      );
    }
  }



export default TeaFileUpload;



  