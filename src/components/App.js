// import React, { useState, useEffect } from 'react';
// import '../css/App.css';
// import AddAppointments from './AddAppointments';
// import SearchAppointments from './SearchAppointments';
// import ListAppointments from './ListAppointments';
// import {without} from 'lodash'
// function App() {
//   const [myAppointments, setmyAppointments] = useState([])
//   let [lastIndex, setLastIndex] = useState(0)

//   useEffect(() => {
//     fetch('./data.json')
//       .then(response => response.json())
//       .then(result => {
//         const apts = result.map(item => {
//           item.aptId = lastIndex
//           setLastIndex(lastIndex)
//           lastIndex++
//           return item
//         })
//         setmyAppointments(apts)
//       })
//   }, [lastIndex])
//   const deleteAppointments = (apt) => {
//     let tempApts = myAppointments
//     tempApts = without(tempApts, apt)
//     // setmyAppointments(tempApts)
//     console.log(apt)
//   }
//   return (
//     <main className="page bg-white" id="petratings">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-12 bg-white">
//             <div className="container">
//               <AddAppointments />
//               <SearchAppointments />
//               <ListAppointments
//                 myAppointments={myAppointments}
//                 deleteAppointments={deleteAppointments} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }

// export default App;

import '../css/App.css';
import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';
import React, { Component } from 'react'
import { without } from "lodash"
export default class App extends Component {
  state = {
    myName: 'JohnMorris',
    myAppointments: [],
    formDisplay: false,
    lastIndex: 0
  }
  componentDidMount() {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          item.aptId = this.state.lastIndex
          this.setState({ lastIndex: this.state.lastIndex + 1 })
          return item
        })
        this.setState({
          myAppointments: apts
        })
      })
  }
  deleteAppointment = (apt) => {
    let tempApts = this.state.myAppointments
    tempApts = without(tempApts, apt)
    this.setState({
      myAppointments: tempApts
    })
  }
  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments 
                  formDisplay={this.state.formDisplay}
                />
                <SearchAppointments />
                <ListAppointments
                  myAppointments={this.state.myAppointments}
                  deleteAppointment={this.deleteAppointment}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    )
  }
}
