export default function HeroBanner() {
  return (
    <div className="bg-indigo-600 rounded-2xl p-8 text-white relative overflow-hidden">
      <p className="text-xs uppercase tracking-widest mb-2 opacity-80">Online Course</p>
      <h1 className="text-2xl font-bold max-w-xs leading-snug mb-4">
        Sharpen Your Skills with Professional Online Courses
      </h1>
      <button className="bg-black text-white px-5 py-2 rounded-full text-sm flex items-center gap-2">
        Join Now →
      </button>
    </div>
  )
}