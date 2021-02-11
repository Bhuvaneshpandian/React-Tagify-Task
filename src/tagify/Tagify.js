 import React, { Component } from 'react';
  import './Tagify.css';
 class Tagify extends Component {
   constructor(){
         super(); 
        this.state ={list:["Justinian Hattersley","Antons Esson","Ardeen Batisse","Graeme Yellowley","Dido Wilford"]};


        this.showTagifyList = this.showTagifyList.bind(this) 
      }



 showTagifyList(tagifiyLists){


var ul = document.getElementsByClassName("order");
ul.innerHTML = tagifiyLists.map((item) => {

return `<li>${item}</li>`

}).join(" ");


  console.log(typeof ul)


 }


render(){
return(
<div className="tagiyContainer">


   
<input   className="tagifyList" onClick={this.showTagifyList(this.state.list)} ></input>
    
<div className="tag-list">
      <ul className="order">
   
      
      
              </ul>
              
              </div>
              </div>
);


}
};







export default Tagify;




