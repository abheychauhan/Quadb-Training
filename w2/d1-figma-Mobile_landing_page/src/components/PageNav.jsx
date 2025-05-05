import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link

const sections = [
  { id: "feature", label: "Feature" },
  { id: "showcase", label: "Showcase" },
  { id: "testimonials", label: "Testimonials" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

const PageNav = () => {
  const [showArrow, setShowArrow] = useState(false);
  const [showDots, setShowDots] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowArrow(window.scrollY > window.innerHeight * 0.8)
      setShowDots(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleArrowClick = () => {
    setShowDots((prev) => !prev);
  };

  return (
    <div className="fixed hidden md:block right-4 top-1/2 transform -translate-y-1/2 z-90">
      {showArrow && (
        <button
          onClick={handleArrowClick}
          className="mb-4 bg-purple-600 text-white p-7 rounded-full shadow-lg hover:bg-purple-700 transition"
        >
          <i className="ri-arrow-up-long-line text-2xl"></i>
        </button>
      )}

      {showDots && (
        <div className="flex flex-col items-start gap-6 bg-white p-3 rounded-xl shadow-lg">
          {sections.map((section) => (
            section.id === "contact" ? (
              <Link
                key={section.id}
                to={`/${section.id}`} // Use Link for Contact section
                className="flex items-center gap-2 group"
              >
                <span className="w-4 h-4 rounded-full border-4 border-purple-500 bg-white group-hover:border-purple-700 transition-all" />
                <span className="text-sm font-medium text-purple-700">
                  {section.label}
                </span>
              </Link>
            ) : (
              <a
                key={section.id}
                href={`#${section.id}`} // Use anchor for other sections
                className="flex items-center gap-2 group"
              >
                <span className="w-4 h-4 rounded-full border-4 border-purple-500 bg-white group-hover:border-purple-700 transition-all" />
                <span className="text-sm font-medium text-purple-700">
                  {section.label}
                </span>
              </a>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default PageNav;
