import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<section className="App-main">
					<Post
						nickname="Nero"
						avatar=""
						caption=" Doing it big"
						image="https://live.staticflickr.com/65535/48440955291_fcb442269f_c.jpg"
					/>
					<Post
						nickname="Chris"
						avatar="https://www.laravelnigeria.com/img/chris.jpg"
						caption=" Moving the community!"
						image="https://live.staticflickr.com/65535/48439242661_277e87c3d8_c.jpg"
					/>
					<Post
						nickname="OG"
						avatar="https://www.laravelnigeria.com/img/chris.jpg"
						caption=" Holding a mic"
						image="https://live.staticflickr.com/65535/48440240326_dfdf69fea6_c.jpg"
					/>
					{/* more posts */}
				</section>
				<div />
			</div>
		);
	}
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
