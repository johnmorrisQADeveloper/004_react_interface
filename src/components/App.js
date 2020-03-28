import React, { useState, useEffect } from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';

function App() {
  const [myAppointments, setmyAppointments] = useState([])
  let [lastIndex, setLastIndex] = useState(0)

  useEffect(() => {
    fetch('./data.json')
      .then(response => response.json())
      .then(result => {
        const apts = result.map(item => {
          item.aptId = lastIndex
          setLastIndex(lastIndex)
          lastIndex ++
          return item
        })
        setmyAppointments(apts)
      })
  }, [lastIndex])
  return (
    <main className="page bg-white" id="petratings">
      <div className="container">
        <div className="row">
          <div className="col-md-12 bg-white">
            <div className="container">
              <div><AddAppointments /></div>
              <div><SearchAppointments /></div>
              <div><ListAppointments myAppointments={myAppointments}/></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;


// class type
// import '../css/App.css';
// import AddAppointments from './AddAppointments';
// import SearchAppointments from './SearchAppointments';
// import ListAppointments from './ListAppointments';
// import React, { Component } from 'react'
// export default class App extends Component {
//   state = {
//     myName: 'JohnMorris',
//     myAppointments: [],
//     lastIndex: 0
//   }
//   componentDidMount() {
//     fetch('./data.json')
//       .then(response => response.json())
//       .then(result => {
//         const apts = result.map(item => {
//           item.aptId = this.state.lastIndex
//           this.setState({ lastIndex: this.state.lastIndex + 1 })
//           return item
//         })
//         this.setState({
//           myAppointments: apts
//         })
//       })
//   }
//   render() {
//     return (
//       <main className="page bg-white" id="petratings">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-12 bg-white">
//               <div className="container">
//                 <AddAppointments />
//                 <SearchAppointments />
//                 <ListAppointments myAppointments={this.state.myAppointments} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>
//     )
//   }
// }
