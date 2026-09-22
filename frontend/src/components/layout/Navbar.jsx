import { useEffect, useState } from "react";

import {
  Bell,
  Search,
  MoonStar,
  Sun,
} from "lucide-react";


import { motion } from "framer-motion";


import {
  useTheme,
} from "../../context/ThemeContext";


import ProfileDropdown from "./ProfileDropdown";
import SearchModal from "./SearchModal";


import "../../styles/layout.css";



const Navbar = () => {


  const [searchOpen,setSearchOpen] = useState(false);


  const {
    darkMode,
    toggleTheme,
  } = useTheme();




  useEffect(()=>{


    const shortcut=(e)=>{


      if(
        e.ctrlKey &&
        e.key.toLowerCase()==="k"
      ){

        e.preventDefault();

        setSearchOpen(true);

      }

    };


    window.addEventListener(
      "keydown",
      shortcut
    );


    return()=>{

      window.removeEventListener(
        "keydown",
        shortcut
      );

    };


  },[]);



  return (

    <>


    <motion.header

      className="navbar"

    >


      <div className="navbar-brand">


        <h2 className="page-title">

          CampusGuide AI

        </h2>


        <span className="beta-tag">
          AI
        </span>


      </div>




      <div

        className="navbar-search"

        onClick={()=>setSearchOpen(true)}

      >

        <Search size={18}/>


        <input

          readOnly

          placeholder="Search campus knowledge..."

        />


        <div className="shortcut">

          <span>
            Ctrl
          </span>

          <span>
            K
          </span>

        </div>


      </div>




      <div className="nav-right">


        <motion.button

          className="icon-btn"

          onClick={toggleTheme}

        >

          {
            darkMode

            ?

            <Sun size={19}/>

            :

            <MoonStar size={19}/>

          }


        </motion.button>




        <button className="icon-btn">

          <Bell size={19}/>

        </button>




        <ProfileDropdown/>


      </div>



    </motion.header>



    <SearchModal

      open={searchOpen}

      setOpen={setSearchOpen}

    />


    </>

  );

};


export default Navbar;