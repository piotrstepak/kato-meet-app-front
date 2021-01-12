// import React, { useEffect, useState } from 'react';
// import './LoginCard.css';
// import logo from '../../resources/katoMeetApp_Logo.png';
// import actions from '../../app/loginLogout/duck/actions';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import Starting from "./buttons/Starting";
// import Login from "./buttons/Login";
// import Register from "./buttons/Register";
// import axios from 'axios';
// // import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//
// //localStorage with login user data ?
//
// function LoginCard() {
//     const [users, setUsers] = useState([]);
//     const [isLogin, setIsLogin] = useState(false);
//     const [isRegister, setIsRegister] = useState(false);
//
//     const [email, setEmail] = useState('');//all register data to object
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [age, setAge] = useState(null);
//
//     const dispatch = useDispatch()
//     const history = useHistory();
//
//     useEffect(() => {
//         const usersAPI = 'http://localhost:3001/users/';
//
//         axios.get(usersAPI)
//             .then(res => {
//                 setUsers(res.data)
//             })
//             .catch((error) => {
//                 console.log(error);
//             })
//     }, []);
//
//     const handleLoginSubmit = (event) => {
//         //while loading or user checking display eg ladowanie.. or sth like spinner
//         let user;
//         user = users.filter(user => (
//             user.email === email && user.password === password
//         ))
//
//         const incorrectCredentials = () => {
//             event.preventDefault();
//             alert('Niewłaściwy email lub hasło..');
//         }
//
//         const correctCredentials = () => {
//             const firstUser = 0;//consider better option
//             dispatch(actions.login(user[firstUser]));
//             history.push('/logged');
//         }
//
//         (user.length === 0) ? incorrectCredentials() : correctCredentials();
//     }
//
//     const handleRegisterSubmit = (event) => {
//         event.preventDefault();
//         //check if the given email exists in db
//         users.filter(user => user.email === email) ?
//             alert('Podany email już istnieje, zaloguj się lub użyj innego.') :
//             alert('Email został wysłany. Prosimy potwierdzić rejestrację.')
//         //send an email to confirm registration
//
//         //if user confirms, add him to db
//         const userToAdd = {
//             name: name,
//             age: age,
//             email: email,
//             password: password,
//         }
//
//         axios.post('http://localhost:3001/users/add', userToAdd)
//             .then(res => console.log(res.data));
//
//         history.push('/');// /login
//     }
//
//     const handleAgeChange = event => {
//         setAge(event.target.value)
//     }
//
//     const handleNameChange = event => {
//         setName(event.target.value)
//     }
//
//     const handleEmailChange = (event) => (
//         setEmail(event.target.value)
//     )
//
//     const handlePasswordChange = (event) => (
//         setPassword(event.target.value)
//     )
//
//     const handleIsLogin = () => {
//         setIsLogin(true)
//         history.push('/login')
//     };
//     const handleIsRegister = () => {
//         setIsRegister(true)
//         // history.push('/register')
//     };
//
//     return (
//         //routing login/register ?
//         //link do backa
//         // <Router>
//             <div className='loginCard'>
//                 {isRegister ? null : <img src={logo} className='logo-img' alt='logo' width="300" height="300"  />}
//                 <div className='buttons'>
//                     {/*<Switch>*/}
//                     {(isLogin || isRegister) ?
//                         (isLogin ?
//                             // <Switch>
//                             //       <Route path='/login'>
//                                     <Login
//                                         handleLoginSubmit={handleLoginSubmit}
//                                         handleEmailChange={handleEmailChange}
//                                         handlePasswordChange={handlePasswordChange}
//                                     /> :
//                                 // </Route> :
//                                 // <Route path='/register'>
//                                     <Register
//                                         handleRegisterSubmit={handleRegisterSubmit}
//                                         handleNameChange={handleNameChange}
//                                         handleAgeChange={handleAgeChange}
//                                         handleEmailChange={handleEmailChange}
//                                         handlePasswordChange={handlePasswordChange}
//                                     />
//                             //     </Route>
//                             // </Switch>
//                         ) :
//                         <Starting
//                             handleIsLogin={handleIsLogin}
//                             handleIsRegister={handleIsRegister}
//                         />
//                     }
//                 </div>
//             </div>
//         // </Router>
//     );
// }
//
// export default LoginCard;
