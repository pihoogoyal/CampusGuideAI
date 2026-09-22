import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Clock3,
} from "lucide-react";

import { getDocuments } from "../../api/documentApi";


const RecentDocuments = () => {

  const [documents, setDocuments] = useState([]);


  useEffect(() => {

    const fetchDocuments = async () => {

      try {

        const data = await getDocuments();

        // show latest 5 documents
        setDocuments(data.slice(0,5));

      } catch(error){

        console.error(error);

      }

    };


    fetchDocuments();

  }, []);



  return (

    <section className="recent-documents-section">


      <div className="section-header document-header">

        <div>

          <h2>
            Recent Documents
          </h2>


          <p>
            Recently processed campus resources.
          </p>

        </div>


      </div>



      {
        documents.length === 0 ? (

          <motion.div
            className="documents-empty-state"
            initial={{
              opacity:0,
              y:20,
            }}
            animate={{
              opacity:1,
              y:0,
            }}
          >

            <div className="empty-icon">
              <FileText size={28}/>
            </div>


            <h3>
              No documents yet
            </h3>


            <p>
              Your uploaded documents will appear here.
            </p>


          </motion.div>


        ) : (


          <div className="documents-list">


            {
              documents.map((doc,index)=>(


                <motion.div
                  key={doc.id || index}
                  className="document-card"

                  initial={{
                    opacity:0,
                    y:20,
                  }}

                  animate={{
                    opacity:1,
                    y:0,
                  }}

                  transition={{
                    delay:index*0.08,
                  }}
                >


                  <div className="document-icon">

                    <FileText size={22}/>

                  </div>



                  <div className="document-info">


                    <h3>
                      {doc.pdf_name}
                    </h3>


                  </div>


                </motion.div>


              ))
            }


          </div>


        )
      }


    </section>

  );
};


export default RecentDocuments;