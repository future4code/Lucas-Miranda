import React from 'react';
import './App.css';
import styled from 'styled-components'
import SignUpPage  from './components/SignUpPage';
import UserListPage from './components/UserListPage';

const AppContainer = styled.div`
  font-family: sans-serif;
  text-align: center;
`;


class App extends React.Component{

  state = {
    currentPage: "SignUpPage"
  };

  onChangePage = () =>{
    if (this.state.currentPage === "SignUpPage"){
      this.setState({currentPage: "UserListPage"});
    }else{
      this.setState({currentPage: "SignUpPage"})
    }
  }

 onchangeName = (e) =>{
   this.setState({name: e.target.value})
 }

 onchangeEmail = (e) =>{
   this.setState({email: e.target.value})
 }

 render(){
   const page = this.state.currentPage === "SignUpPage" ? (<SignUpPage/>) : (<UserListPage/>);
   
   const buttonName = this.state.currentPage === "SignUpPage" ? "Ir para lista" : "Ir para cadastro";

   return(
    <AppContainer>
      <button onClick={this.onChangePage}>{buttonName}</button>
      {page}
    </AppContainer>
   )
 }

}

export default App;
