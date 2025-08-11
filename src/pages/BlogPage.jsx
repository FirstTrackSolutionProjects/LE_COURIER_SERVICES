import React from "react";

const blogs = [
  {
    title: "Master Shipping Route Optimization",
    date: "January 10, 2025",
    description:
      "Take control of your logistics! Learn actionable strategies to optimize routes and boost efficiency.",
    image: "/blog1 .jpg",
    link: "#",
  },
  {
    title: "AI and Automation: The Next Era of Logistics",
    date: "March 25, 2025",
    description:
      "Explore the transformative power of artificial intelligence and automation in shaping the future of supply chains.",
    image: "/blog2 .jpg",
    link: "#",
  },
];

export default function BlogSection() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Blogs</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {blogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden text-left transition-shadow duration-300 hover:shadow-xl"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-500">{blog.date}</p>
                <p className="mt-3 text-gray-700">{blog.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
