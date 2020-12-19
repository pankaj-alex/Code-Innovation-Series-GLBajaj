import React,{useState} from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import "./Header.css";
import  DropDown from "./DropDown";
import fb from "./image/fb.png";
import CancelIcon from '@material-ui/icons/Cancel';
import logo from "./image/logo.png";

function Header() {
  const [Menu, setMenu] = useState(false);
  const [Login, setLogin] = useState([false,true]);

  function HandelClick(){
    if(Menu){
      setMenu(false);
    }else{
      setMenu(true);
    }
  }

    return (
   <>
   <div className="Header">
        <div className="Header-body">
                    <div className="Header-logo"><img src={logo} alt='-'></img></div>
                    <div className="Header-content">
                    <DropDown title={"Disease"} key={1} content={{title:['Infectious diseases','Deficiency diseases','Hereditary diseases','Physiological diseases'],link:['https://www.mayoclinic.org/diseases-conditions/infectious-diseases/symptoms-causes/syc-20351173#:~:text=Infectious%20diseases%20are%20disorders%20caused,some%20organisms%20may%20cause%20disease.',"/https://www.merriam-webster.com/dictionary/deficiency%20disease#:~:text=%3A%20a%20disease%20(such%20as%20scurvy,especially%20a%20vitamin%20or%20mineral","https://www.medicinenet.com/genetic_disease/article.htm","https://www.sciencedirect.com/science/article/pii/B9780128132760000158#:~:text=Physiological%20disorders%20are%20those%20that,occur%20before%20or%20after%20harvest."]}}/>
                    <DropDown title={"Doctor"} key={2} content={{title:['Doctor']}}/>
                    <DropDown title={"Support"} key={3} content={{title:['Support Home','Support Community','Online Service']}}/>
                    <DropDown title={"About"} key={4} content={{title:['ABOUT US']}}/>
                    </div>
              <div className="Header-login"><button onClick={()=>setLogin([true,true])}>Login</button><h1>|</h1><button onClick={()=>setLogin([true,false])}>Signup</button></div>
              <div onClick={()=>{HandelClick()}} className="Header-menu-icon"><MenuIcon fontSize="large"/></div>
              {Login[0]?<div className="Body-Login-Template">
                <div onClick={()=>{setLogin([false,true])}} className="Body-Login-Template-close-btn"><CancelIcon className="Body-Login-Template-close-icon" style={{color:"red"}}/></div>
                <form>
                  <input type="text" placeholder="email or username"></input>
                  <input type="password" placeholder="password"></input>
                  {!Login[1] ? <input type="password" placeholder="confirm password"></input>: null}
                  {!Login[1] ? <button type="submit">Signup</button>: <button type="submit">Signin</button>}
                    
                </form>
                  <div className="Google-Login">
                    <h6>Signin with ...</h6>
                    <img src={fb} alt='-'></img>
                  </div>
              </div>:null}
 
        </div>
        {Menu===true ?
        <div className="Header-Menu-content">
        <div className="Header-Mini-Menu">
        <div className="Header-Mini-Menu-login"><button onClick={()=>setLogin([true,true])}>Login</button><h1>|</h1><button onClick={()=>setLogin([true,false])}>Signup</button></div>
        <DropDown title={"Disease"} key={1} content={{title:['Infectious diseases','Deficiency diseases','Hereditary diseases','Physiological diseases'],link:['/']}}/>
                    <DropDown title={"Doctor"} key={2} content={{title:['Doctor']}}/>
                    <DropDown title={"Support"} key={3} content={{title:['Support Home','Support Community','Online Service']}}/>
                    <DropDown title={"About"} key={4} content={{title:['ABOUT US']}}/>
        </div>
        </div> : null}
   </div>
   </>
        
    )
}

export default Header;
