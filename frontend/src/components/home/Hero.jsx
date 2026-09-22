import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

import SearchBox from "./SearchBox";

import { Upload } from "lucide-react";



const Hero = () => {


  return (

    <motion.section

      className="hero-section"


      initial={{
        opacity:0,
        y:30,
      }}


      animate={{
        opacity:1,
        y:0,
      }}


      transition={{
        duration:0.6,
      }}

    >


      <motion.div

        className="hero-badge"

        initial={{
          opacity:0,
          scale:0.8,
        }}

        animate={{
          opacity:1,
          scale:1,
        }}

        transition={{
          delay:0.2,
        }}

      >

        <Sparkles size={15}/>

        AI Powered Campus Knowledge Engine

      </motion.div>




      <div className="hero-content">


        <p className="hero-greeting">

          Good Morning, Pooja 👋

        </p>




        <h1 className="hero-title">

          Your Campus.
          <br />

          One Intelligent Guide.

        </h1>




        <p className="hero-description">

          Ask questions, explore documents,
          and discover campus knowledge
          instantly with CampusGuide AI.

        </p>



        {/* <SearchBox /> */}

        <motion.button
          className="upload-document-btn"
          onClick={() => window.location.href = "/documents"}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          <Upload size={20} />
          Upload Document Now
        </motion.button>




      </div>


    </motion.section>

  );

};



export default Hero;