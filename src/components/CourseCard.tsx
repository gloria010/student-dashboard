"use client";

import { Course } from "@/types/course";
import * as Icons from "lucide-react";

interface Props {
  course: Course;
}

function getIcon(name: string) {
  return (Icons as any)[name] || Icons.BookOpen;
}

export default function CourseCard({ course }: Props) {
  const Icon = getIcon(course.icon_name);

  return (
    <article className="rounded-3xl border border-zinc-800 bg-zinc-900/70 p-6">
      
      {/* ICON */}
      <div className="mb-3 text-emerald-400">
        {(() => {
          const IconComp = (Icons as any)[course.icon_name] || Icons.BookOpen;
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

      <div className="mt-2 h-2 rounded-full bg-zinc-800 overflow-hidden">
        <div
          className="h-2 bg-emerald-500"
          style={{ width: `${course.progress}%` }}
        />
      </div>

      <p className="mt-2 text-sm text-zinc-400">
        {course.progress}%
      </p>

    </article>
  );
}
