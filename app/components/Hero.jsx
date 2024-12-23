export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 md:pt-0">
      <h1 className="text-6xl leading-tight">
        <span className="line-through text-gray-500 block">
          Data Analyst
        </span>
        <span className="line-through text-gray-500 block">
          Data Scientist
        </span>
        Data Engineer🔧
      </h1>
      <p className="mt-4 text-xl text-secondary">
        Building data solutions, crafting insights, and diving into algo trading 🚀
      </p>
      <p className="mt-6 text-lg text-gray-400">
        Soon: Launching my first algo trading course 🤖📈
      </p>

      <a 
        href="https://topmate.io/fernandomarin" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="mt-10 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transition-all"
      >
        🚀 Ready to level up? Book a 1:1 mentorship with me!
      </a>
    </div>
  );
}
