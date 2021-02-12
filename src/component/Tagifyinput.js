import React, { Component } from 'react';
import './Tagify.css';
import Taglists from './Taglists';


 class Tagify extends Component {
   constructor(){
         super(); 
        this.state ={list:["Justinian Hattersley","Antons Esson","Ardeen Batisse","Graeme Yellowley","Dido Wilford"]};
      }
render(){
return(<div className="tagiyContainer">
<input   className="tagifyList" onClick={this.showTagifyList} ></input>
<div className="tag-list">
    <table className="tagifyTable">
<tbody>
    {this.state.list.map((item) => {
        return <tr>
            <td>{item}</td>
            <td><button >Delete</button></td>
        </tr>
    })}
</tbody>
</table>
              </div>
              </div>
);
}
};



export default Tagify;



