export default function Projects() {
    return (
      <section id="projects" className="py-20 bg-gray-900 text-white px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-lg shadow">
            <h3 className="text-xl font-semibold mb-2">Portfolio WebApp</h3>
            <p className="text-gray-400">A responsive portfolio website built with React and Tailwind CSS.</p>
          </div>
          {/* Add more project cards here */}
        </div>
      </section>
    );
  }
  