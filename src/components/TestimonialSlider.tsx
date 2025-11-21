import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  username: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Tanishq is a highly motivated person who is very conversant with the latest technologies like AI/ML, Cloud, UI/UX. He is a quick learner, with an entrepreneurial mindset and is always open to feedback.",
    name: "Nivedita Kamath",
    username: "@niveditakamath",
    avatar:
      "https://i.postimg.cc/NF0HfDmR/Nivedita.jpg"
  },
  {
    id: 2,
    quote: "Tanishq is one of the most hardworking guys I have ever met. His interest in technology is really admirable. He is too persistent. He really doesn't give up on things.",
    name: "Bishwajeet Kumar",
    username: "@bishwajeetkumar",
    avatar:
      "https://i.postimg.cc/4ynYTdTC/Biswajeet.jpg"
  },
  {
    id: 3,
    quote: "Tanishq is a great person with awesome knowledge of tech and human behaviour . Really appreciate his extensive efforts.",
    name: "Sharad Chandra Acharya",
    username: "@sharadacharya",
    avatar:
      "https://i.postimg.cc/3rjSyxp1/sharad.jpg"
  },
];

// ALWAYS return 1
const getVisibleCount = () => 1;

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const visibleCount = 1;
  const maxIndex = testimonials.length - 1;

  // Autoplay logic
  useEffect(() => {
    if (!isAutoPlaying) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) =>
        prev >= maxIndex ? 0 : prev + 1
      );
    }, 4000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, maxIndex]);

  const pauseAutoPlay = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 8000);
  };

  const goNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    pauseAutoPlay();
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
    pauseAutoPlay();
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    pauseAutoPlay();
  };

  return (
    <section className="w-full flex justify-center bg-gradient-to-b from-gray-50 to-white py-12">
      <div className="w-full max-w-xl px-4 flex flex-col items-center">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary font-medium text-xs uppercase tracking-wider">
            Testimonials
          </span>
          <h3 className="text-3xl font-bold mt-3 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            Student Experiences
          </h3>
        </div>

        {/* Slider Wrapper */}
        <div className="relative w-full overflow-hidden">
          
          {/* Arrows */}
          <div className="flex justify-between absolute -top-14 w-full px-6">
            <button
              onClick={goPrev}
              className="p-2 bg-white shadow-md rounded-full text-primary hover:bg-gray-50"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={goNext}
              className="p-2 bg-white shadow-md rounded-full text-primary hover:bg-gray-50"
            >
              <ChevronRight />
            </button>
          </div>

          {/* Track */}
          <motion.div
            className="flex"
            animate={{ x: `-${currentIndex * 100}%` }}
            transition={{ type: "spring", stiffness: 70, damping: 20 }}
          >
            {testimonials.map((t) => (
              <div key={t.id} className="w-full flex-shrink-0 px-2">
                <div className="rounded-2xl p-6 bg-white shadow-lg border border-gray-100 relative">
                  <Quote className="absolute -top-4 -left-4 opacity-10 text-primary" size={60} />

                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    “{t.quote}”
                  </p>

                  <div className="flex items-center gap-3 border-t pt-4">
                    <img
                      src={t.avatar}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{t.name}</h4>
                      <p className="text-gray-500 text-sm">{t.username}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Dots */}
          <div className="flex justify-center mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`mx-1 w-2 h-2 rounded-full ${
                  index === currentIndex ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
