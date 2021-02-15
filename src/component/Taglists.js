import { render } from "@testing-library/react";

function Taglist(props){
 
   
   function handleClick(e) {
      e.preventDefault();
    var x = document.getElementsByClassName('textContent')
    
    console.log(x)
    }
   
return (

    

       <div className="container">
            <ul className="ulList">
       <li   className="listItem">
       <img src={props.userInfo.avatar}className="imageList" ></img>
 <div className="userList" onClick={props.onSelectUser.bind(null,props.userInfo)}>
         <span  className='tagUserList'>{props.userInfo.name}</span>
         </div>
     
     </li>
     </ul>
     </div>
       
) 
   
}
export default Taglist;