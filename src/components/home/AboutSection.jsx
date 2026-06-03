const AboutSection = () => {
  return (
    <section className="bg-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl font-bold text-primary-500 mb-6">
              Tentang Hidup Pohon
            </h2>
            <p className="text-charcoal leading-relaxed mb-4">
              Hutan adalah paru-paru dunia yang memberikan kehidupan bagi jutaan makhluk hidup. Di Indonesia, hutan Sumatera menjadi salah satu ekosistem terpenting yang harus kita lindungi.
            </p>
            <p className="text-charcoal leading-relaxed mb-4">
              HIDUPOHON hadir sebagai platform yang menghubungkan donatur dengan program penanaman pohon langsung di lapangan. Setiap donasi Anda akan digunakan untuk menanam, merawat, dan memantau pertumbuhan pohon.
            </p>
            <p className="text-charcoal leading-relaxed">
              Bersama kita bisa mengembalikan kehijauan hutan Sumatera untuk generasi mendatang.
            </p>
          </div>

          {/* Right Image */}
          <div>
            <img 
              src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&auto=format&fit=crop"
              alt="Tangan Memegang Tunas"
              className="rounded-lg shadow-lg w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection