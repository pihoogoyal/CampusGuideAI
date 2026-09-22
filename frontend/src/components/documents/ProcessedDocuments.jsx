import { useEffect, useState } from "react";
import { FileText, Search } from "lucide-react";
import { getDocuments } from "../../api/documentApi";

const ProcessedDocuments = () => {
  const [documents, setDocuments] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const data = await getDocuments();
        setDocuments(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDocuments();
  }, []);


  const filteredDocuments = documents.filter((doc) =>
    doc.pdf_name
      .toLowerCase()
      .includes(search.toLowerCase())
  );


  return (
    <div
      style={{
        background:"#ffffff",
        border:"1px solid #e5e7eb",
        borderRadius:"24px",
        padding:"28px",
        boxShadow:"0 15px 35px rgba(15,23,42,.06)",
        height:"100%",
      }}
    >

      {/* Header */}

      <div
        style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          marginBottom:"24px",
          gap:"20px",
        }}
      >

        <div>
          <h2
            style={{
              margin:0,
              color:"#111827",
              fontSize:"22px",
            }}
          >
            Processed Documents
          </h2>

          <p
            style={{
              margin:"6px 0 0",
              color:"#64748b",
              fontSize:"14px",
            }}
          >
            {documents.length} documents available
          </p>
        </div>


        {/* Search */}

        <div
          style={{
            display:"flex",
            alignItems:"center",
            gap:"10px",
            background:"#f8fafc",
            border:"1px solid #e2e8f0",
            padding:"10px 14px",
            borderRadius:"14px",
          }}
        >

          <Search
            size={17}
            color="#94a3b8"
          />

          <input
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
            placeholder="Search..."
            style={{
              border:"none",
              outline:"none",
              background:"transparent",
              width:"150px",
              fontSize:"14px",
            }}
          />

        </div>

      </div>



      {/* Documents */}

      {filteredDocuments.length === 0 ? (

        <div
          style={{
            height:"180px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            color:"#94a3b8",
          }}
        >
          No processed documents found.
        </div>

      ) : (

        <div
          style={{
            display:"flex",
            flexDirection:"column",
            gap:"12px",
          }}
        >

          {filteredDocuments.map((doc,index)=>(

            <div
              key={index}
              style={{
                display:"flex",
                alignItems:"center",
                gap:"15px",
                padding:"16px",
                borderRadius:"16px",
                background:"#f8fafc",
                border:"1px solid #e5e7eb",
                cursor:"pointer",
                transition:"0.2s",
              }}

              onMouseEnter={(e)=>{
                e.currentTarget.style.borderColor="#6366f1";
                e.currentTarget.style.background="#f5f3ff";
              }}

              onMouseLeave={(e)=>{
                e.currentTarget.style.borderColor="#e5e7eb";
                e.currentTarget.style.background="#f8fafc";
              }}
            >

              <div
                style={{
                  width:"44px",
                  height:"44px",
                  borderRadius:"12px",
                  background:"rgba(99,102,241,.12)",
                  color:"#6366f1",
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center",
                }}
              >
                <FileText size={22}/>
              </div>


              <div>
                <h4
                  style={{
                    margin:0,
                    color:"#111827",
                    fontSize:"15px",
                  }}
                >
                  {doc.pdf_name}
                </h4>

                <span
                  style={{
                    color:"#94a3b8",
                    fontSize:"13px",
                  }}
                >
                  PDF Document
                </span>
              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
};

export default ProcessedDocuments;
