import React from 'react';
import './index.css';
import App from './App';
import ReactDOM from "react-dom";
import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// function FormattedDate(props) {
//   return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
// }


// class Clock extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={date: new Date()};
//   }
  
// componentDidMount(){
//  this.timerId=setInterval(
//    ()=>this.tick(),
//    1000
//  );
// }
// compononentWillUnmount(){
// clearInterval(this.timerID);
// }

// tick(){
//   this.setState({date:new Date()});
// }
//   render(){
//     return (
//     <div>
//       <h1>Hello world!</h1>
//       <h2> It is {this.state.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
//   }
// }


// class Toggle extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={isToggleOn:true};
//     this.handleClick=this.handleClick.bind(this);
//   }

//   handleClick(){
//     this.setState(prevState=>({
//       isToggleOn: !prevState.isToggleOn
//     }));
//   }

//   render(){
//     return (<button onClick={this.handleClick}>
//       {this.state.isToggleOn?'ON':'OFF'}
//     </button>);

//   }

// }



// class LoginControl extends React.Component{
//   constructor(props){
//     super(props);
//     this.handleLoginClick=this.handleLoginClick.bind(this);
//     this.handleLogoutClick=this.handleLogoutClick.bind(this);
//     this.state={isLoggedIn:false};
//   }

//   handleLoginClick(){
//     this.setState({isLoggedIn:true});
//     // console.log(this.isLoggedIn);
//   }
//   handleLogoutClick(){
//     this.setState({isLoggedIn:false});
//   }

//   render(){
//     const isLoggedIn=this.state.isLoggedIn;
//     let button;
//     if(isLoggedIn){  
//       button=<LogoutButton onClick={this.handleLogoutClick}/>;
//     }
//     else{
  
//       button=<LoginButton onClick={this.handleLoginClick}/>;
//     }
//     return (
//       <div>
//         <Greeting isLoggedIn={isLoggedIn}/>
//         {button}
//       </div>
//     );
//   }
// }

// function UserGreeting(props){
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props){
//   return <h1>Please sign up.</h1>
// }

// function Greeting(props){
//   const isLoggedIn=props.isLoggedIn;
//   if(isLoggedIn){
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// function LogoutButton(props){
//   return (<button onClick={props.onClick}>
//     Logout
//   </button>);
// }

// function LoginButton(props){
//   return (<button onClick={props.onClick}>
//     Login
//   </button>);
// }


// ReactDOM.render(<LoginControl/>,
//   document.getElementById('root'));

// function NumberList(props){
//   const numbers=props.numbers;
//   const listItems=numbers.map((number) =>
//   <li>{number}</li>);

//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const numbers=[1,2,3,4,5];

// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );

function ListItem(props){
  return <li>{props.value}</li>;
}



function NumberList(props){
  const numbers=props.numbers;

  return (
    <ul>
        {numbers.map((number) => 
  <ListItem key={number.toString()}
  value={number} />

  )}
 </ul>
  );
}

const numbers=[1,2,3,4,5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);


// function Blog (props){
//   const sidebar=(
//     <ul>
//       {props.posts.map((post) => <li key={post.id}>
//         {post.title}
//       </li>)}
//     </ul>
//   );

//   const content=props.posts.map((post) =>
//    <div key={post.id}>
//      <h3>{post.title}</h3>
//      <p> {post.content}</p>
//   </div>);

//   return (
//     <div>
//       {sidebar}
//       <hr/>
//       {content}
//     </div>
//   );
// }

// const posts=[
//   {id: 1,title: 'Hello World', content: 'Welcome to learning React!' },
//   {id:2 , title: 'Installation', content: 'You can install React from npm.'}
// ];

// ReactDOM.render(
//   <Blog posts={posts}/>,
//   document.getElementById('root')
// );

// function WarningBanner(props){
//   if(!props.warn){
//     return null;
//   }

//   return (
//     <div className="warning">
//       Warning!
//     </div>
//   );
// }

// class Page extends React.Component{

//   constructor(props){
//     super(props); 
//     this.state={showWarning:true};
//     this.handleToggleClick=this.handleToggleClick.bind(this);
//   }

//   handleToggleClick(){
//     this.setState(state => ({
//       showWarning:!state.showWarning
//     }));
//   }

//   render(){
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? 'Hide':'Show'}
//         </button>
//       </div>
//     );
//   }
// }
// ReactDOM.render(
//   <Page />,
//   document.getElementById('root')
// );

// function App1() {
//   return (
//     <div>
//       <Clock />

//       <Clock />
//       <Clock />
//     </div>
//   );
// }

// ReactDOM.render(<App1 />, document.getElementById('root'));

// function tick() {

//   ReactDOM.render(
//    <Clock/>,
//     document.getElementById('root')
//   );
// }

// setInterval(tick, 1000);