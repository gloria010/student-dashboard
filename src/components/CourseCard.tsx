import { Course } from "@/types/course";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

interface Props {
  course: Course;
}

// SAFE ICON COMPONENT WRAPPER
function SafeIcon({ name }: { name: string }) {
  const Icon = (Icons as any)[name] || Icons.BookOpen;
  return <Icon size={22} />;
}

export default function CourseCard({ course }: Props) {
  return (
    <motion.article
      whileHover={{ scale: 1.02 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6"
    >
      {/* ICON */}
<div className="mb-3 text-emerald-400">
  {(() => {
    const IconComp =
      (Icons as any)[course.icon_name] || Icons.BookOpen;

    return <IconComp size={22} />;
  })()}
</div>
      {/* TITLE */}
      <h3 className="font-semibold text-lg">
        {course.title}
      </h3>

      <p className="mt-4 text-sm text-zinc-400">
        Progress
      </p>

      {/* PROGRESS BAR */}
      <div className="mt-2 h-2 rounded-full bg-zinc-800 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${course.progress}%` }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          className="h-2 rounded-full bg-emerald-500"
        />
      </div>

      <p className="mt-2 text-sm text-zinc-400">
        {course.progress}%
      </p>
    </motion.article>
  );
}