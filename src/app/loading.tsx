export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-950 p-6">
      <div className="grid gap-4 md:grid-cols-[220px_1fr]">
        
        {/* Sidebar Skeleton */}
        <div className="hidden md:block rounded-3xl bg-zinc-900 animate-pulse h-[400px]" />

        {/* Main Content Skeleton */}
        <div className="grid gap-4 md:grid-cols-3">
          
          {/* Hero Tile */}
          <div className="col-span-2 rounded-3xl bg-zinc-900 animate-pulse h-48" />

          {/* Course Cards */}
          <div className="rounded-3xl bg-zinc-900 animate-pulse h-40" />
          <div className="rounded-3xl bg-zinc-900 animate-pulse h-40" />
          <div className="rounded-3xl bg-zinc-900 animate-pulse h-40" />
          <div className="rounded-3xl bg-zinc-900 animate-pulse h-40" />

          {/* Activity Tile */}
          <div className="rounded-3xl bg-zinc-900 animate-pulse h-48" />
        </div>
      </div>
    </main>
  );
}