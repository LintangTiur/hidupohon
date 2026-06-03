import { Star } from 'lucide-react'

const TestimonialSection = () => {
  const testimonials = [
    {
      name: 'Azam Subianto',
      role: 'Antekh Hijau',
      comment: 'Senang bisa berkontribusi untuk hutan Sumatera. Proses donasi mudah dan transparan!',
      rating: 5
    },
    {
      name: 'Syamil Rakabuming',
      role: 'Duta 19 Juta Hektar Lapangan Hijau',
      comment: 'Platform yang luar biasa! Saya bisa melihat progress Penghijauan 19 Juta Hektar Lahan.',
      rating: 5
    },
    {
      name: 'Indra Wijaya',
      role: 'Donatur',
      comment: 'Setiap pohon yang saya donasi terasa sangat bermakna. Terima kasih HIDUP POHON!',
      rating: 5
    }
  ]

  return (
    <section className="bg-cream py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-primary-500 mb-12 text-center">
          APA KATA MEREKA SETELAH DONASI?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-400 fill-accent-400" />
                ))}
              </div>

              {/* Comment */}
              <p className="text-charcoal mb-4 leading-relaxed">
                "{testimonial.comment}"
              </p>

              {/* Author */}
              <div className="border-t border-gray-200 pt-4">
                <p className="font-bold text-primary-500">{testimonial.name}</p>
                <p className="text-sm text-secondary-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialSection