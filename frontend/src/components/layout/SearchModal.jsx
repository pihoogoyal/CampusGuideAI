import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  FileText,
  Sparkles,
  X,
} from "lucide-react";

import "../../styles/layout.css";


const suggestions = [
  "Find academic regulations",
  "Show hostel information",
  "Search latest notices",
  "Find course documents",
];


const SearchModal = ({ open, setOpen }) => {

  const [query, setQuery] = useState("");



  useEffect(() => {

    const handleKeyboard = (event) => {


      if (event.key === "Escape") {

        setOpen(false);

      }


    };


    document.addEventListener(
      "keydown",
      handleKeyboard
    );


    return () => {

      document.removeEventListener(
        "keydown",
        handleKeyboard
      );

    };


  }, [setOpen]);



  return (

    <AnimatePresence>


      {
        open && (

          <motion.div

            className="search-overlay"

            initial={{
              opacity:0,
            }}

            animate={{
              opacity:1,
            }}

            exit={{
              opacity:0,
            }}

            onClick={() => setOpen(false)}

          >


            <motion.div

              className="command-box"

              initial={{
                y:-40,
                opacity:0,
                scale:.95,
              }}

              animate={{
                y:0,
                opacity:1,
                scale:1,
              }}

              exit={{
                y:-40,
                opacity:0,
              }}

              onClick={(e)=>e.stopPropagation()}

            >



              <div className="command-header">


                <Search size={22}/>


                <input

                  autoFocus

                  value={query}

                  onChange={(e)=>setQuery(e.target.value)}

                  placeholder="Ask CampusGuide AI anything..."

                />


                <button

                  onClick={()=>setOpen(false)}

                >

                  <X size={20}/>

                </button>


              </div>




              <div className="command-content">


                <p className="command-title">

                  <Sparkles size={16}/>

                  Suggested Queries

                </p>



                {
                  suggestions.map((item)=>(

                    <button

                      key={item}

                      className="suggestion-item"

                    >

                      <FileText size={17}/>

                      {item}

                    </button>

                  ))
                }



              </div>



            </motion.div>


          </motion.div>

        )

      }


    </AnimatePresence>

  );

};


export default SearchModal;