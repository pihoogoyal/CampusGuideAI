import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import { getDocuments } from "../../api/documentApi";

const DocumentStats = () => {
  const [documents, setDocuments] = useState([]);

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

  return (
    <div
      style={{
        minHeight: "260px",
        padding: "32px",
        borderRadius: "24px",
        background: "#ffffff",
        border: "1px solid #e5e7eb",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "30px",
        boxShadow: "0 15px 35px rgba(15,23,42,0.08)",
      }}
    >

      <div
        style={{
          width: "60px",
          height: "60px",
          borderRadius: "18px",
          background: "rgba(99,102,241,0.12)",
          color: "#6366f1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FileText size={30} />
      </div>


      <div>
        <h3
          style={{
            margin: "25px 0 10px",
            color: "#64748b",
            fontSize: "16px",
            fontWeight: "600",
          }}
        >
          Total Documents
        </h3>


        <span
          style={{
            fontSize: "58px",
            fontWeight: "800",
            color: "#111827",
            lineHeight: "1",
          }}
        >
          {documents.length}
        </span>


        <p
          style={{
            marginTop: "14px",
            color: "#94a3b8",
            fontSize: "14px",
          }}
        >
          Documents processed and ready for AI search
        </p>
      </div>


    </div>
  );
};

export default DocumentStats;
