import { Sparkles, FileText, Clock } from "lucide-react";

const InsightPanel = () => {
  return (
    <aside className="insight-panel">
      <div className="insight-card">
        <Sparkles size={22} /> 

        <h3>AI Insights</h3>

        <p>
          Ask a question to view AI generated
          insights and document references.
        </p>
      </div>

      <div className="insight-card">
        <Clock size={22} />

        <h3>Recent Activity</h3>

        <p>No conversations yet.</p>
      </div>

      <div className="insight-card">
        <FileText size={22} />

        <h3>Sources</h3>

        <p>
          Document citations will appear here.
        </p>
      </div>
    </aside>
  );
};

export default InsightPanel;