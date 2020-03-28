// import React, {useState} from 'react';
// import '../css/App.css';
// import AddAppointments from './AddAppointments';
// import SearchAppointments from './SearchAppointments';
// import ListAppointments from './ListAppointments';

// function App() {
//   const [myName, setMyName] = useState('Rasdfy')
//   return (
//     <main className="page bg-white" id="petratings">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12 bg-white">
//             <div className="container">
//               {myName}
//               <div><AddAppointments /></div>
//               <div><SearchAppointments/></div>
//               <div><ListAppointments/></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default App;


// class type
import '../css/App.css';
import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    myName: 'JohnMorris'
  }
  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                {this.state.myName}
                <div><AddAppointments /></div>
                <div><SearchAppointments /></div>
                <div><ListAppointments /></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
