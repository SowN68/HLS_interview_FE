import  "./Navigation.css"
import logo from "../../asset/Logo.png"
import accountImg from "../../asset/accountImg.png"
const Navigation = () => {
     return (
          <div className='navigation'>
               <div className='logo'>
                    <img src={logo} alt='logo'/>
               </div>
               <div className='account'>
                    <div>
                         <span className='details'>Handicrafted by</span>
                         <p className='account-name'>Jim HLS</p>
                    </div>
                    <img src={accountImg} alt='accountImg'/>
               </div>
          </div>
     )
}
export default Navigation