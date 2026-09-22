import { motion } from "framer-motion";
import {
  Sparkles,
  Lightbulb,
  ArrowUpRight,
} from "lucide-react";


const insights = [
  {
    id: 1,
    title: "Study smarter",
    description:
      "CampusGuide AI can help you find notes, previous papers, and academic resources instantly.",
  },
  {
    id: 2,
    title: "Stay updated",
    description:
      "Never miss important campus notices, events, and announcements.",
  },
];


const AITips = () => {

  return (

    <section className="ai-insights-section">


      <div className="section-header">

        <h2>
          AI Insights
        </h2>

        <p>
          Smart suggestions powered by CampusGuide AI.
        </p>

      </div>



      <motion.div

        className="ai-insights-card"

        initial={{
          opacity:0,
          y:25,
        }}

        animate={{
          opacity:1,
          y:0,
        }}

        transition={{
          duration:0.5,
        }}

      >


        <div className="ai-header">


          <div className="ai-icon">

            <Sparkles size={26}/>

          </div>


          <div>

            <h3>
              Your AI Campus Assistant
            </h3>

            <p>
              Here are some things you can explore today.
            </p>

          </div>


        </div>




        <div className="insights-list">


          {
            insights.map((item,index)=>(


              <motion.div

                key={item.id}

                className="insight-item"

                initial={{
                  opacity:0,
                  x:-15,
                }}

                animate={{
                  opacity:1,
                  x:0,
                }}

                transition={{
                  delay:index*0.12,
                }}

              >


                <div className="insight-icon">

                  <Lightbulb size={18}/>

                </div>



                <div className="insight-content">

                  <h4>
                    {item.title}
                  </h4>


                  <p>
                    {item.description}
                  </p>

                </div>


                <ArrowUpRight
                  size={18}
                  className="insight-arrow"
                />


              </motion.div>


            ))
          }


        </div>


      </motion.div>


    </section>

  );

};


export default AITips;