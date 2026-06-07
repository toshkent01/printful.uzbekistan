import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Спасибо! Мы свяжемся с вами вскоре.')
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100">
      <Header />
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-12">Свяжитесь с нами</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="card p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Контактная информация</h3>
            <div className="space-y-4">
              <p className="text-gray-600"><strong>📞 Телефон:</strong> +998 (90) 123-45-67</p>
              <p className="text-gray-600"><strong>✉️ Email:</strong> info@printful.uz</p>
              <p className="text-gray-600"><strong>📍 Адрес:</strong> Ташкент, Узбекистан</p>
              <p className="text-gray-600"><strong>⏰ Режим работы:</strong> Пн-Пт 9:00-18:00</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="card p-8 space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Ваше имя"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <textarea
              name="message"
              placeholder="Ваше сообщение"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
              required
            />
            <button type="submit" className="btn-primary w-full">
              Отправить
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  )
}