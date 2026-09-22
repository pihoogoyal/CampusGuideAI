import Hero from "../components/home/Hero";
import QuickActions from "../components/home/QuickActions";
import RecentDocuments from "../components/home/RecentDocuments";
import AITips from "../components/home/AITips";

import "../styles/home.css";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />

      <div className="dashboard-grid">
        <QuickActions />

        <RecentDocuments />

        <AITips />
      </div>
    </div>
  );
};

export default Home;