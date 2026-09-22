import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Settings,
  LogOut,
} from "lucide-react";

import { useNavigate } from "react-router-dom";


const ProfileDropdown = () => {

  const [open, setOpen] = useState(false);

  const dropdownRef = useRef(null);

  const navigate = useNavigate();



  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {

        setOpen(false);

      }

    };


    document.addEventListener(
      "mousedown",
      handleClickOutside
    );


    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );

    };


  }, []);



  return (

    <div
      className="profile-wrapper"
      ref={dropdownRef}
    >


      <button

        className="profile-btn"

        onClick={() => setOpen(!open)}

      >

        <User size={28}/>

      </button>




      <AnimatePresence>

        {
          open && (

            <motion.div

              className="profile-dropdown"

              initial={{
                opacity:0,
                y:-10,
                scale:0.95,
              }}

              animate={{
                opacity:1,
                y:0,
                scale:1,
              }}

              exit={{
                opacity:0,
                y:-10,
                scale:0.95,
              }}

              transition={{
                duration:0.2,
              }}

            >


              <div className="profile-info">


                <div className="avatar">

                  P

                </div>


                <div>

                  <h4>
                    Pooja Yadav
                  </h4>


                  <p>
                    Student
                  </p>

                </div>


              </div>




              <button

                onClick={() => navigate("/settings")}

                className="dropdown-item"

              >

                <Settings size={17}/>

                Settings

              </button>




              <button

                className="dropdown-item logout"

              >

                <LogOut size={17}/>

                Logout

              </button>


            </motion.div>

          )
        }


      </AnimatePresence>


    </div>

  );

};


export default ProfileDropdown;