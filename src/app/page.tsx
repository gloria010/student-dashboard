import HeroTile from "@/components/HeroTile";
import ActivityTile from "@/components/ActivityTile";
import CourseCard from "@/components/CourseCard";
import { supabase } from "@/lib/supabase";
import Sidebar from "@/components/Sidebar";
import MotionWrapper from "@/components/MotionWrapper";
export default async function Home() {
  
const { data: courses, error } =
    await supabase
      .from("courses")
      .select("*");

  if (error) {
    return (
      <main className="p-8">
        Error: {error.message}
      </main>
    );
  }

  return (
  <main className="min-h-screen bg-zinc-950 p-6">
    <div className="grid gap-4 grid-cols-1 md:grid-cols-[220px_1fr]">

      <Sidebar />

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">

  <MotionWrapper delay={0}>
    <HeroTile />
  </MotionWrapper>

  {courses?.map((course, index) => (
    <MotionWrapper
      key={course.id}
      delay={0.1 * (index + 1)}
    >
      <CourseCard course={course} />
    </MotionWrapper>
  ))}

  <MotionWrapper delay={0.6}>
    <ActivityTile />
  </MotionWrapper>

</div>

        

    </div>
  </main>
);
}