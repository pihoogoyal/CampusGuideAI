import { motion } from "framer-motion";
import {
  MessageSquareText,
  FileSearch,
  GraduationCap,
  CalendarDays,
  UsersRound,
  BellRing,
} from "lucide-react";

const actions = [
  {
    id: 1,
    title: "Ask Campus AI",
    description:
      "Get instant answers about campus rules, academics, and facilities.",
    icon: MessageSquareText,
  },
  {
    id: 2,
    title: "Search Documents",
    description:
      "Find notes, notices, and important university documents quickly.",
    icon: FileSearch,
  },
  {
    id: 3,
    title: "Academic Resources",
    description:
      "Explore syllabus, courses, and learning materials.",
    icon: GraduationCap,
  },
  {
    id: 4,
    title: "Campus Events",
    description:
      "Stay updated with upcoming events and activities.",
    icon: CalendarDays,
  },
  {
    id: 5,
    title: "Student Services",
    description:
      "Access important student support information.",
    icon: UsersRound,
  },
  {
    id: 6,
    title: "Important Notices",
    description:
      "Never miss important campus announcements.",
    icon: BellRing,
  },
];

const QuickActions = () => {
  return (
    <section className="quick-actions-section">

      <div className="section-header">
        <h2>Quick Access</h2>

        <p>
          Everything you need, one click away.
        </p>
      </div>


      <div className="quick-actions-grid">

        {actions.map((action, index) => {
          const Icon = action.icon;

          return (
            <motion.article
              key={action.id}
              className="quick-action-card"

              initial={{
                opacity: 0,
                y: 25,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}

              whileHover={{
                y: -8,
              }}
            >

              <div className="quick-icon">
                <Icon size={26} />
              </div>


              <h3>
                {action.title}
              </h3>


              <p>
                {action.description}
              </p>


            </motion.article>
          );
        })}

      </div>

    </section>
  );
};


export default QuickActions;