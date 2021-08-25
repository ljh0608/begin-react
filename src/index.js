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

// function ListItem(props){
//   return <li>{props.value}</li>;
// }



// function NumberList(props){
//   const numbers=props.numbers;

//   return (
//     <ul>
//         {numbers.map((number) => 
//   <ListItem key={number.toString()}
//   value={number} />

//   )}
//  </ul>
//   );
// }

// const numbers=[1,2,3,4,5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );


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



//@@@@@@@@@@@@@Form@@@@@@@@@@2

// class NameForm extends React.Component{
//   constructor (props){
//     super(props);
//     this.state={value: ''};

//     this.handleChange=this.handleChange.bind(this);
//     this.handleSubmit=this.handleSubmit.bind(this);

//   }


//   handleChange(event){
//     this.setState({value:event.target.value});
//   }

//   handleSubmit(event){
//     alert('A name was submitted: '+this.state.value);
//     event.preventDefault();
//   }

//   render(){
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={this.state.value}
//           onChange={this.handleChange}/>
//         </label>

//         <input type="submit"value="Submit"/>
//       </form>
//     );
//   }
// }


// ReactDOM.render(
//   <NameForm />,
//   document.getElementById('root')
// );


// class EssayForm extends React.Component {
//   constructor(props){
//     super(props);
//     this.state={
//       value: 'Please write an essay about your favorite DOM element.'
//     };

//     this.handleChange=this.handleChange.bind(this);
//     this.handleSubmit=this.handleSubmit.bind(this);
//   }

//   handleChange(event){
//     this.setState({value:event.target.value});
//   }

//   handleSubmit(event){
//     alert('An essay was submitted: '+this.state.value);
//     event.preventDefault();
//   }

//   render(){
//     return (
//       <form inSubmit={this.handleSubmit}>
//         <label>
//           Essay:
//           <textarea value={this.state.value} onChange={this.handleChange}/>
//         </label>

//         <input type="submit" value="Submit"></input>
//       </form>
//     );
//   }
// }


// class FlavorForm extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={value: 'coconut'};

//     this.handleChange=this.handleChange.bind(this);
//     this.handleSubmit=this.handleSubmit.bind(this);
     
//   }

//   handleChange(event){
//     this.setState({value:event.target.value});
//   }

//   handleSubmit(event){
//     alert('Your favorite flavor is: '+this.state.value);
//     event.preventDefault();
//   }

//   render(){
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Pick your favorite flavor:
//           <select value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">Grapefruit</option>
//             <option value="lime">Lime</option>
//             <option value="coconut">Coconut</option>
//             <option value="mango">Mango</option>
//           </select>
//         </label>

//       <input type="submit" value="Submit"/>

//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <FlavorForm />,
//   document.getElementById('root')
// );





//@@@@@@@@@@@@@@@@@@State@@@@@@@@@@@@@@@@@@@@@@

// class Reservation extends React.Component{
//   constructor(props){
//     super(props);
//     this.state={
//       isGoing:true,
//       numberOfGuests:2
//     };

//     this.handleInputChange=this.handleInputChange.bind(this);
//   }

//   handleInputChange(event){
//     const target=event.target;
//     const value=target.type==='checkbox'?target.checked: target.value;
//     const name=target.name;

//     this.setState({[name]: value});
//   }

//   render(){
//     return(
//       <form>
//         <label>
//           Is going: 
//           <input name="isGoing"
//           type="checkbox"
//           checked={this.state.isGoing}
//           onChange={this.handleInputChange}/>
//         </label>

//         <br/>
//         <label>
//           Number of guests: 
//           <input name="numberOfGuests"
//           type="number"
//           value={this.state.numberOfGuests}
//           onChange={this.handleInputChange}/>
//         </label>
//       </form>
//     );
//   }


// }


// ReactDOM.render(
//   <Reservation />,
//   document.getElementById('root')
// );


// function BoilingVerdict(props){
//   if(props.celsius >=100){
//     return <p>The water would boil</p>
//   }

//   return <p> The water would not boil</p>
// }

// class Calculator extends React.Component{
//   constructor(props){
//     super(props);
//     this.handleChange=this.handleChange.bind(this);
//     this.state={temperature: ''};
//   }

//   handleChange(e){
//     this.setState({temperature: e.target.value});
//   }

//   render(){
//     const temperature=this.state.temperature;
//     return (
//       <fieldset>
//         <legend>
//           Enter temperature in Celsius:  
//         </legend>
//         <input value={temperature}
//         onChange={this.handleChange}/>
//         <BoilingVerdict celsius={parseFloat(temperature)}/>
//       </fieldset>

//     );
//   }

// }

// ReactDOM.render(
//   <Calculator/>,
//   document.getElementById('root')
// );


const scaleNames={
  c:'Celsius',
  f:'Fahrenheit'
};

class TemperatureInput extends React.Component{
  constructor(props){
    super(props);
    this.handleChange=this.handleChange.bind(this);
    this.state={temperature: ''};
  }

  handleChange(e){
    this.setState({temperature: e.target.value});
  }

  render(){
    const temperature=this.state.temperature;
    const scale=this.props.scale;
    return (
      <fieldset>
        <legend> Enter temperature in {scaleNames[scale]}: </legend>
        <input value={temperature} onChange={this.handleChange}/>
      </fieldset>
    );
  }

}

class Calculator extends React.Component{
  render(){
    return (
      <div>
        <TemperatureInput scale="c"/>
        <TemperatureInput scale="f"/>
      </div>
    );
  }
}


ReactDOM.render(
  <Calculator/>,
  document.getElementById('root')
);