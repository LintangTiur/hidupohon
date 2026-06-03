import { useState } from 'react'
import { Send } from 'lucide-react'

const CommentSection = () => {
  const [comment, setComment] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (comment && name) {
      alert('Terima kasih atas komentar Anda!')
      setComment('')
      setName('')
    }
  }

  return (
    <section className="bg-cream py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-primary-500 mb-8 text-center">
            IKUT BERKOMENTAR
          </h2>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-8">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Nama Anda"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition"
                required
              />
            </div>

            <div className="mb-6">
              <textarea
                placeholder="Tulis komentar Anda..."
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                rows="4"
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-primary-500 focus:outline-none transition resize-none"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600 transition font-medium flex items-center justify-center space-x-2"
            >
              <Send className="w-5 h-5" />
              <span>Kirim Komentar</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CommentSection