import { motion } from "framer-motion";
import {
  GraduationCap,
  Building2,
  CalendarDays,
  FileText,
  ArrowRight,
} from "lucide-react";

const suggestions = [
  {
    icon: GraduationCap,
    title: "Admission Process",
    description: "Eligibility, fees & counselling",
  },
  {
    icon: Building2,
    title: "Hostel Rules",
    description: "Rooms, timings & facilities",
  },
  {
    icon: CalendarDays,
    title: "Exam Schedule",
    description: "Mid-sem & end-sem dates",
  },
  {
    icon: FileText,
    title: "Academic Calendar",
    description: "Semester events & holidays",
  },
];

const EmptyState = () => {
  return (
    <motion.div
      className="empty-state"
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <h2>Welcome to CampusGuide AI</h2>

      <p>
        Search your campus documents, regulations,
        notices, hostel rules and academic information
        using AI powered retrieval.
      </p>

      <div className="suggestion-grid">
        {suggestions.map((item) => {
          const Icon = item.icon;

          return (
            <motion.button
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="suggestion-card"
              key={item.title}
            >
              <div className="suggestion-icon">
                <Icon size={22} />
              </div>

              <div className="suggestion-content">
                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>

              <ArrowRight size={18} />
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
};

export default EmptyState;