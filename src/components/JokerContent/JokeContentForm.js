import { useState } from "react"
import "./JokeContentForm.css"
const JokeContentForm = (props) => {
     const [vote, setVote] = useState([])
     const handleClick = (voteEle) => {
          setVote(prev => {
               const newVotes = [...prev, voteEle]

               //Save to local storage
               const jsonVote = JSON.stringify(newVotes)
               localStorage.setItem("votes", jsonVote)
               return newVotes
          })
          props.onClickToChange();
     }

     return (
          <div className="form">
               <button className="btn btn-funny" onClick={()=>{handleClick("Funny")}} disabled={props.active}>This is Funny!</button>
               <button className="btn btn-unfunny" onClick={()=>{handleClick("UnFunny")}} disabled={props.active}>This is not funny.</button>
          </div>
     )
}
export default JokeContentForm;