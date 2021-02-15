import React, { Component } from 'react';
import './Tagify.css';
import Taglists from './Taglists';



const users = [
    {
        "value": 1,
        "name": "Justinian Hattersley",
        "avatar": "https://i.pravatar.cc/80?img=1",
        "email": "jhattersley0@ucsd.edu"
    },
    {
        "value": 2,
        "name": "Antons Esson",
        "avatar": "https://i.pravatar.cc/80?img=2",
        "email": "aesson1@ning.com"
    },
    {
        "value": 3,
        "name": "Ardeen Batisse",
        "avatar": "https://i.pravatar.cc/80?img=3",
        "email": "abatisse2@nih.gov"
    },
    {
        "value": 4,
        "name": "Graeme Yellowley",
        "avatar": "https://i.pravatar.cc/80?img=4",
        "email": "gyellowley3@behance.net"
    },
    {
        "value": 5,
        "name": "Dido Wilford",
        "avatar": "https://i.pravatar.cc/80?img=5",
        "email": "dwilford4@jugem.jp"
    },
  
  ];


class Tagify extends Component {   
    constructor(props){
        super(props); 
        this.state = {
        isTagVilisible:false,
        tagList: users,
        selectedList:[],
    };
    this.renderUserList=this.renderUserList.bind(this)
    this.addTagListUser=this.addTagListUser.bind(this)
}


  
showUsers=() =>{
    var isTagVilisible =! this.state.isTagVilisible
    this.setState({isTagVilisible})
  }
  addTagListUser =(selectedUser)=>{

    var userLis = this.state.selectedList;
    console.log(userLis)
     userLis.push(selectedUser)
var input = document.getElementsByClassName("textContent")
console.log(input)

  }

  renderUserList = () => { 
    
    const addTagListUser = this.addTagListUser;
    const items= this.state.tagList.map(function(item){
      return  <div className="userList" key={item.value}>
  {/*     <Taglists name={item.name} email={item.email} src={item.avatar} /> */}
  <Taglists userInfo={item} onSelectUser={addTagListUser}/>
      </div>
    
  });
  return items;
}
  render() {
    return (
        <body>
      <div>
          <div className="inputContainer">
  
        <input className="textContent" placeholder="Add  Some Tags..." onClick={this.showUsers} />
        
        </div>
        {this.state.isTagVilisible ? this.renderUserList():null}
        </div>
        </body>
    )
  }

}
    export default Tagify; 


 