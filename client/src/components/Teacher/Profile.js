import React from "react";

function Profile({ teacher }) {
  console.log("TEACHER INFO", teacher);
  return (
    <div>
      <h1>Teacher Profile</h1>
      <p>
        <b>Name: </b> {teacher.name}
        <b>Email: </b> {teacher.email}
      </p>
    </div>
  );
}

export default Profile;

// import React from "react";

// function Tracker(props) {
//   return (
//     <div className="container mt-5">
//       <div className="card  teaBeLogTab col-12 mt-5">
//         <h5 className="card-header bg-dark text-white studentName">
//           Behavior Tacker
//         </h5>
//         <p>~~~~DISPLAY NAMES HERE~~~{props.name}</p>
//         {/* <h5 className="card-header studentId"> <span></span></h5> */}

//         <div class="card-body">
//           <table class="table bg-white ">
//             <thead class="thead-dark bg-success text-center">
//               <tr>
//                 <th scope="col">Category</th>
//                 <th scope="col">Score</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <th scope="row">Respect</th>
//                 <td>
//                   <form className="text-center">
//                     <div className="form-check form-check-inline pr-4">
//                       <label>
//                         <input
//                           type="radio"
//                           name="react-tips"
//                           value="option1"
//                           checked={true}
//                           className="form-check-input pillOne"
//                           // checked={this.state.selectedOption === "option3"}
//                           // onChange={this.handleOptionChange}
//                         />
//                         1
//                       </label>
//                     </div>

//                     <div className="form-check form-check-inline pr-4">
//                       <label>
//                         <input
//                           type="radio"
//                           name="react-tips"
//                           value="option2"
//                           className="form-check-input"
//                         />
//                         2
//                       </label>
//                     </div>

//                     <div className="form-check form-check-inline pr-4">
//                       <label>
//                         <input
//                           type="radio"
//                           name="react-tips"
//                           value="option3"
//                           className="form-check-input"
//                         />
//                         3
//                       </label>
//                     </div>
//                     <div className="form-check form-check-inline pr-4">
//                       <label>
//                         <input
//                           type="radio"
//                           name="react-tips"
//                           value="option4"
//                           className="form-check-input"
//                         />
//                         4
//                       </label>
//                     </div>
//                     <div className="form-check form-check-inline ">
//                       <label>
//                         <input
//                           type="radio"
//                           name="react-tips"
//                           value="option5"
//                           className="form-check-input"
//                         />
//                         5
//                       </label>
//                     </div>
//                   </form>
//                 </td>
//               </tr>
//               <tr>
//                 <th scope="row">Kindness</th>
//                 <td>
//                   <form className="text-center">
//                     <div className="form-check form-check-inline pr-4">
//                       <label>
//                         <input
//                           type="radio"
//                           name="react-tips"
//                           value="option1"
//                           checked={true}
//                           className="form-check-input"
//                           // checked={this.state.selectedOption === "option3"}
//                           // onChange={this.handleOptionChange}
//                         />
//                         1
//                       </label>
//                     </div>

//                     <div className="form-check form-check-inline pr-4">
//                       <label>
//                         <input
//                           type="radio"
//                           name="react-tips"
//                           value="option2"
//                           className="form-check-input"
//                         />
//                         2
//                       </label>
//                     </div>

//                     <div className="form-check form-check-inline pr-4">
//                       <label>
//                         <input
//                           type="radio"
//                           name="react-tips"
//                           value="option3"
//                           className="form-check-input"
//                         />
//                         3
//                       </label>
//                     </div>
//                     <div className="form-check form-check-inline pr-4">
//                       <label>
//                         <input
//                           type="radio"
//                           name="react-tips"
//                           value="option4"
//                           className="form-check-input"
//                         />
//                         4
//                       </label>
//                     </div>
//                     <div className="form-check form-check-inline ">
//                       <label>
//                         <input
//                           type="radio"
//                           name="react-tips"
//                           value="option5"
//                           className="form-check-input"
//                         />
//                         5
//                       </label>
//                     </div>
//                   </form>
//                 </td>
//               </tr>
//               <tr>
//                 <th scope="row">On-Task</th>
//                 <td>
//                   <form className="text-center">
//                     <div className="form-check form-check-inline pr-4">
//                       <label>
//                         <input
//                           type="radio"
//                           name="react-tips"
//                           value="option1"
//                           checked={true}
//                           className="form-check-input"
//                           // checked={this.state.selectedOption === "option3"}
//                           // onChange={this.handleOptionChange}
//                         />
//                         1
//                       </label>
//                     </div>

//                     <div className="form-check form-check-inline pr-4">
//                       <label>
//                         <input
//                           type="radio"
//                           name="react-tips"
//                           value="option2"
//                           className="form-check-input"
//                         />
//                         2
//                       </label>
//                     </div>

//                     <div className="form-check form-check-inline pr-4">
//                       <label>
//                         <input
//                           type="radio"
//                           name="react-tips"
//                           value="option3"
//                           className="form-check-input"
//                         />
//                         3
//                       </label>
//                     </div>
//                     <div className="form-check form-check-inline pr-4">
//                       <label>
//                         <input
//                           type="radio"
//                           name="react-tips"
//                           value="option4"
//                           className="form-check-input"
//                         />
//                         4
//                       </label>
//                     </div>
//                     <div className="form-check form-check-inline ">
//                       <label>
//                         <input
//                           type="radio"
//                           name="react-tips"
//                           value="option5"
//                           className="form-check-input"
//                         />
//                         5
//                       </label>
//                     </div>
//                   </form>
//                 </td>
//               </tr>
//               <tr>
//                 <th scope="row">Listening Skills</th>
//                 <td>
//                   <form className="text-center">
//                     <div className="form-check form-check-inline pr-4">
//                       <label>
//                         <input
//                           type="radio"
//                           name="react-tips"
//                           value="1"
//                           checked={true}
//                           className="form-check-input"
//                           // checked={this.state.selectedOption === "option3"}
//                           // onChange={this.handleOptionChange}
//                         />
//                         1
//                       </label>
//                     </div>

//                     <div className="form-check form-check-inline pr-4">
//                       <label>
//                         <input
//                           type="radio"
//                           name="react-tips"
//                           value="2"
//                           className="form-check-input"
//                         />
//                         2
//                       </label>
//                     </div>

//                     <div className="form-check form-check-inline pr-4">
//                       <label>
//                         <input
//                           type="radio"
//                           name="react-tips"
//                           value="3"
//                           className="form-check-input"
//                         />
//                         3
//                       </label>
//                     </div>
//                     <div className="form-check form-check-inline pr-4">
//                       <label>
//                         <input
//                           type="radio"
//                           name="react-tips"
//                           value="4"
//                           className="form-check-input"
//                         />
//                         4
//                       </label>
//                     </div>
//                     <div className="form-check form-check-inline ">
//                       <label>
//                         <input
//                           type="radio"
//                           name="react-tips"
//                           value="option5"
//                           className="form-check-input"
//                         />
//                         5
//                       </label>
//                     </div>
//                   </form>
//                 </td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>

//       {/* textbox */}

//       <div className="card mt-5">
//         <div className="card-header bg-dark text-light">
//           <h5>Teacher's Comment:</h5>
//         </div>
//         <div className="card-body">
//           <div className="form-group">
//             <textarea
//               className="form-control"
//               id="exampleFormControlTextarea1"
//               rows="3"
//             ></textarea>
//           </div>
//         </div>
//       </div>

//       <form className="mt-3">
//         <div classnName="form-group ">
//           <h5>Add missing work or other documents for parent here:</h5>
//           {/* <label for="exampleFormControlFile1">Example file input</label> */}
//           <input
//             type="file"
//             class="form-control-file"
//             id="exampleFormControlFile1"
//           />
//         </div>
//       </form>
//     </div>
//   );

//   console.log("tracker");
// }

// export default Tracker;
