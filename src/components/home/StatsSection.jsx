import { TreePine, Percent, Sprout, Mountain, Wind } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const StatsSection = () => {
  const navigate = useNavigate()

  const stats = [
    {
      icon: TreePine,
      value: '78.939',
      unit: 'Ha',
      label: 'Luas Hutan Tertanam'
    },
    {
      icon: Percent,
      value: '11',
      unit: '%',
      label: 'Cakupan Hutan Sumatera'
    },
    {
      icon: Sprout,
      value: '40',
      unit: '%',
      label: 'Spesies Terancam Punah'
    },
    {
      icon: Mountain,
      value: '14',
      unit: 'Juta Ha',
      label: 'Target Luas Hutan'
    },
    {
      icon: Wind,
      value: '284',
      unit: 'ton CO2',
      label: 'CO2 Diserap'
    }
  ]

  return (
    <section className="bg-cream py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-primary-500 mb-4">
            PETA JEJAK HIJAU KAMI
          </h2>
          <p className="text-charcoal text-lg">
            Melihat Hutan Sumatera Dalam Angka
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-primary-500 text-white rounded-lg p-6 text-center hover:shadow-lg transition"
            >
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-accent-400" />
              <div className="text-2xl font-bold mb-1">
                {stat.value} <span className="text-lg">{stat.unit}</span>
              </div>
              <div className="text-sm text-primary-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={() => navigate('/education')}
            className="bg-secondary-500 text-white px-8 py-3 rounded-lg hover:bg-secondary-600 transition font-medium shadow-md"
          >
            YUK BACA SELENGKAPNYA
          </button>
        </div>
      </div>
    </section>
  )
}

export default StatsSection