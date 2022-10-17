import { useState,useEffect } from "react";
import JokeContentForm from "./JokeContentForm";
import  "./JokeContentItems.css"
const JokeContentItems = (props) => {
     const [isEmty, setIsEmty] = useState()
     useEffect(() => {
          if (localStorage.getItem("votes") !== null) {
            setIsEmty(true);
          } else {
            setIsEmty(false);
          }
},[])
     console.log(isEmty)
     return (
          <li className="joke-item">
                <div className="joke-item content">
                    {!isEmty && !props.show ? (<p>{ props.content}</p>) : (<p>{ props.message}</p>)}
               </div>
               <hr/>
               <div>
                    <JokeContentForm onClickToChange={props.onChange} active={props.show} id={props.id} />
               </div>
          </li>
     )

}
export default JokeContentItems;