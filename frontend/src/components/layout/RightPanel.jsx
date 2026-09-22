import {
  Activity,
  FileText,
  HardDrive,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

import "../../styles/rightPanel.css";


const stats = [
  {
    id:1,
    icon:Activity,
    title:"Today's Activity",
    value:"0 Questions Asked",
  },
  {
    id:2,
    icon:FileText,
    title:"Documents",
    value:"No PDFs Uploaded",
  },
  {
    id:3,
    icon:HardDrive,
    title:"Storage",
    value:"0 MB Used",
  },
];


const RightPanel = () => {


  return (

    <aside className="right-panel">


      <motion.div

        className="panel-card ai-status-card"

        initial={{
          opacity:0,
          x:30,
        }}

        animate={{
          opacity:1,
          x:0,
        }}

        transition={{
          duration:0.5,
        }}

      >


        <div className="card-header">

          <div className="header-icon">

            <Sparkles size={18}/>

          </div>


          <span>
            AI Status
          </span>


          <CheckCircle2
            size={18}
            className="online-icon"
          />

        </div>



        <h2>
          Ready
        </h2>


        <p>
          Knowledge engine is active and waiting for queries.
        </p>



        <div className="ai-pill">

          AI System Online

        </div>



      </motion.div>




      {
        stats.map((item,index)=>{


          const Icon=item.icon;


          return (

            <motion.div

              key={item.id}

              className="panel-card small"

              initial={{
                opacity:0,
                x:30,
              }}

              animate={{
                opacity:1,
                x:0,
              }}

              transition={{
                delay:index*0.1,
              }}

            >

              <div className="stat-icon">

                <Icon size={20}/>

              </div>


              <div>

                <h4>
                  {item.title}
                </h4>

                <p>
                  {item.value}
                </p>

              </div>


            </motion.div>

          );

        })
      }


    </aside>

  );

};


export default RightPanel;