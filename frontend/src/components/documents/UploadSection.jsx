import { useRef, useState } from "react";
import { UploadCloud, FileText, CheckCircle, XCircle, Loader2 } from "lucide-react";
import { uploadDocument } from "../../api/documentApi";

const UploadSection = () => {
  const inputRef = useRef(null);

  const [file, setFile] = useState(null);
  const [dragging, setDragging] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });

    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  const handleFile = async (selectedFile) => {
    if (!selectedFile) return;

    if (selectedFile.type !== "application/pdf") {
      showToast("Only PDF files are allowed.", "error");
      return;
    }

    setFile(selectedFile);
    setLoading(true);

    try {
      await uploadDocument(selectedFile);

      showToast("Document uploaded successfully.", "success");

    } catch (error) {
      console.error(error);
      showToast("Upload failed. Please try again.", "error");

    } finally {
      setLoading(false);
    }
  };


  return (
    <div
      style={{
        width: "100%",
        margin: "10px auto",
        padding: "40px",
        borderRadius: "28px",
        background: "#ffffff",
        border: dragging
          ? "2px dashed #6366f1"
          : "2px dashed #e2e8f0",
        textAlign: "center",
        transition: "0.3s",
        boxShadow: "0 20px 45px rgba(0,0,0,0.08)",
      }}

      onDragOver={(e) => {
        e.preventDefault();
        setDragging(true);
      }}

      onDragLeave={() => setDragging(false)}

      onDrop={(e) => {
        e.preventDefault();
        setDragging(false);

        handleFile(e.dataTransfer.files[0]);
      }}
    >

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <UploadCloud
          size={70}
          color="#6366f1"
        />
      </div>



      <h2
        style={{
          margin: "0 0 10px",
          fontSize: "26px",
          color: "#111827",
        }}
      >
        Upload Documents
      </h2>


      <p
        style={{
          color:"#64748b",
          marginBottom:"25px",
        }}
      >
        Drag & drop your PDF here or choose a file.
      </p>


      <button
        onClick={() => inputRef.current.click()}
        style={{
          display:"inline-flex",
          alignItems:"center",
          gap:"10px",
          padding:"14px 28px",
          border:"none",
          borderRadius:"14px",
          background:"linear-gradient(135deg,#6366f1,#8b5cf6)",
          color:"#fff",
          fontSize:"16px",
          fontWeight:"600",
          cursor:"pointer",
        }}
      >
        <UploadCloud size={20}/>
        Choose PDF
      </button>


      <input
        ref={inputRef}
        type="file"
        hidden
        accept=".pdf"
        onChange={(e)=>handleFile(e.target.files[0])}
      />


      {file && (
        <div
          style={{
            marginTop:"30px",
            padding:"18px",
            borderRadius:"18px",
            background:"#f8fafc",
            border:"1px solid #e2e8f0",
            display:"flex",
            alignItems:"center",
            justifyContent:"space-between",
            gap:"15px",
          }}
        >

          <div
            style={{
              display:"flex",
              alignItems:"center",
              gap:"12px",
              overflow:"hidden",
            }}
          >

            <FileText
              size={30}
              color="#ef4444"
            />

            <div style={{textAlign:"left"}}>
              <p
                style={{
                  margin:0,
                  fontWeight:"600",
                  color:"#111827",
                  maxWidth:"300px",
                  overflow:"hidden",
                  textOverflow:"ellipsis",
                  whiteSpace:"nowrap",
                }}
              >
                {file.name}
              </p>

              <small
                style={{
                  color:"#64748b",
                }}
              >
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </small>
            </div>

          </div>


          {loading ? (
            <Loader2
              size={25}
              color="#6366f1"
              style={{
                animation:"spin 1s linear infinite"
              }}
            />

          ) : (
            <CheckCircle
              size={25}
              color="#22c55e"
            />
          )}

        </div>
      )}



      {toast && (
        <div
          style={{
            position:"fixed",
            bottom:"30px",
            right:"30px",
            padding:"15px 22px",
            borderRadius:"14px",
            background:
              toast.type === "success"
              ? "#16a34a"
              : "#dc2626",
            color:"white",
            display:"flex",
            alignItems:"center",
            gap:"10px",
            boxShadow:"0 10px 30px rgba(0,0,0,.2)",
            zIndex:9999,
          }}
        >
          {toast.type === "success"
            ? <CheckCircle size={18}/>
            : <XCircle size={18}/>
          }

          {toast.message}

        </div>
      )}


      <style>
        {`
          @keyframes spin {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>

    </div>
  );
};

export default UploadSection;
