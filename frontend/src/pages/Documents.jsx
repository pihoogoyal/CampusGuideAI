import DocumentsHeader from "../components/documents/DocumentHeader.jsx";
import UploadSection from "../components/documents/UploadSection.jsx";
import DocumentStats from "../components/documents/DocumentStats.jsx";
import ProcessingDocuments from "../components/documents/ProcessingDocuments.jsx";
import ProcessedDocuments from "../components/documents/ProcessedDocuments.jsx";
import UploadHistory from "../components/documents/UploadHistory.jsx";

import "../styles/documents.css";

const Documents = () => {
  return (
    <div className="documents-page">
      <DocumentsHeader />

      <UploadSection />

      

      <div
        className="documents-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "3fr 1fr",
          gap: "24px",
          width: "100%",
        }}
      >
        <ProcessedDocuments />
        <DocumentStats />
      </div>

      {/* <UploadHistory /> */}
    </div>
  );
};

export default Documents;
