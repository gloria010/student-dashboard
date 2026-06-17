export default function HeroTile() {
  return (
    <section className="col-span-2 rounded-3xl border border-zinc-800 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8">
      <p className="text-zinc-400">
        Welcome back
      </p>

      <h1 className="mt-2 text-4xl font-bold">
        Esther 👋
      </h1>

      <div className="mt-6 inline-flex rounded-full bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
        🔥 12 Day Learning Streak
      </div>
    </section>
  );
}