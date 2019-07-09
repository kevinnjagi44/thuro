import React from 'react';
import { Link } from 'react-router-dom';

class CarShow extends React.Component {
  constructor(props) {
    super(props);
  }
  
    render() {
      if (this.props.car.owner_id === this.props.currentUser) {
      return (
        <div className="car-show-container">
          <h1>Hi, this is the show page</h1>
          <br/>
          <Link to={`/cars/${this.props.car.id}/edit`}>
            <button>Edit this car</button>
          </Link>
        </div>
      )
    } else {
      return (
        <div className="car-show-container">
          <h1>Test test test</h1>
        </div> 
      )
    }
  }
}

export default CarShow;


// May need to make the below its own component (not a class)


// class CarShow extends React.Component {
//   constructor(props) {
//     super(props);

//     const showEdit = () => {
//       let editOrNot;
//       if (this.props.car.ownerId === this.props.currentUser) {
//         return (
//           <div className="car-show-container">
//             <h1>Hi, this is the show page</h1>
//             <br />
//             <Link to={`/cars/${this.props.car.id}/edit`}>
//               <button>Edit this car</button>
//             </Link>
//           </div>
//         )
//       } else {
//         return (
//           <div className="car-show-container">
//             <h1>Test test test</h1>
//           </div>
//         )
//       }
//     }
//   }

//   render(showEdit) {
//     return (
//       <div>
//         {editOrNot}
//       </div>
//     )
//   }
// }