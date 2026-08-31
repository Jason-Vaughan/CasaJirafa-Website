export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      quote: "Casa Jirafa was exactly what we were looking for. The views from the rooftop are incredible, and the WiFi was perfectly stable for my remote work meetings.",
      author: "Sarah M.",
      location: "San Francisco, CA"
    },
    {
      id: 2,
      quote: "Jason and Rosie are fantastic hosts! They provided a massive list of local recommendations that made our first time in Puerto Vallarta unforgettable.",
      author: "Michael B.",
      location: "Chicago, IL"
    },
    {
      id: 3,
      quote: "Spacious, clean, and right in the heart of El Centro. We loved being able to walk down to the Malecón every evening for dinner, and having the pool was a perfect quiet place to relax and hang out.",
      author: "Jessica T.",
      location: "Seattle, WA"
    }
  ];

  return (
    <section className="py-24 bg-white border-t border-stone-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            What Our Guests Say
          </h2>
          <p className="mt-4 text-lg text-stone-600">
            Don&apos;t just take our word for it. Here is what recent visitors loved about their stay at Casa Jirafa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex flex-col bg-stone-50 p-8 rounded-2xl border border-stone-100 shadow-sm relative">
              <svg className="absolute top-6 left-6 h-8 w-8 text-stone-300 opacity-50" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
              <div className="flex-grow">
                <p className="relative z-10 text-stone-700 italic mt-4">
                  &quot;{testimonial.quote}&quot;
                </p>
              </div>
              <div className="mt-8 border-t border-stone-200 pt-4">
                <p className="font-semibold text-stone-900">{testimonial.author}</p>
                <p className="text-sm text-stone-500">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
