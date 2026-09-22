import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  History,
  Settings,
  Info,
} from "lucide-react";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import "../../styles/layout.css";


const menuItems = [
  {
    icon: LayoutDashboard,
    path: "/",
    label: "Dashboard",
  },
  {
    icon: MessageSquare,
    path: "/workspace",
    label: "Workspace",
  },
  {
    icon: FileText,
    path: "/documents",
    label: "Documents",
  },
  // {
  //   icon: History,
  //   path: "/history",
  //   label: "History",
  // },
];


const bottomItems = [
  {
    icon: Settings,
    path: "/settings",
    label: "Settings",
  },
  {
    icon: Info,
    path: "/about",
    label: "About",
  },
];


const Sidebar = () => {


  return (

    <aside className="sidebar">


      <div>


        <motion.div

          className="logo-box"

          initial={{
            scale:0.8,
            opacity:0,
          }}

          animate={{
            scale:1,
            opacity:1,
          }}

          transition={{
            duration:0.4,
          }}

        >

          CG

        </motion.div>



        <nav className="menu">


          {
            menuItems.map((item,index)=>{


              const Icon=item.icon;


              return (

                <NavLink

                  key={item.path}

                  to={item.path}

                  title={item.label}

                  className={({isActive})=>

                    isActive

                    ? "menu-item active"

                    : "menu-item"

                  }

                >


                  <motion.div

                    whileHover={{
                      y:-4,
                      scale:1.05,
                    }}

                    whileTap={{
                      scale:0.95,
                    }}

                  >

                    <Icon size={22}/>


                  </motion.div>


                </NavLink>


              );


            })
          }


        </nav>


      </div>




      <nav className="bottom-menu">


        {
          bottomItems.map((item)=>{


            const Icon=item.icon;


            return (

              <NavLink

                key={item.path}

                to={item.path}

                title={item.label}

                className={({isActive})=>

                  isActive

                  ? "menu-item active"

                  : "menu-item"

                }

              >

                <Icon size={22}/>

              </NavLink>

            );


          })
        }


      </nav>



    </aside>

  );

};


export default Sidebar;