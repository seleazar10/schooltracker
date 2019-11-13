import React from "react";

class Upload extends React.Component {
  readFileDataAsBase64 = e => {
    const file = e.target.files[0];

    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = event => {
        resolve(event.target.result);
      };

      reader.onerror = err => {
        reject(err);
      };

      reader.readAsDataURL(file);
    });
  };

  handleFileSubmit = async e => {
    try {
      const fileContents = await this.readFileDataAsBase64(e);
      console.log(fileContents);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <form>
          <input type="file" onChange={this.handleFileSubmit}></input>

          {/* <button type="submit" class="btn btn-primary">Upload</button> */}
        </form>
      </div>
    );
  }
}

export default Upload;
