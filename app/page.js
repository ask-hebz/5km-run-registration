'use client'

import { useState } from 'react'
import { supabase } from '@/lib/supabase'
import { UserPlus, Mail, Phone, Building2, Shirt } from 'lucide-react'
import Image from 'next/image'

const TSHIRT_SIZES = [
  { value: 'XS', label: 'XS - Extra Small' },
  { value: 'S', label: 'S - Small' },
  { value: 'M', label: 'M - Medium' },
  { value: 'L', label: 'L - Large' },
  { value: 'XL', label: 'XL - Extra Large' },
  { value: '2XL', label: '2XL - Double Extra Large' },
  { value: '3XL', label: '3XL - Triple Extra Large' },
]

export default function Home() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    telNo: '',
    email: '',
    organization: '',
    tshirtSize: 'M'
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage({ type: '', text: '' })

    try {
      const { data, error } = await supabase
        .from('registrations')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            tel_no: formData.telNo,
            email: formData.email,
            organization: formData.organization,
            tshirt_size: formData.tshirtSize,
            registered_at: new Date().toISOString()
          }
        ])

      if (error) throw error

      setMessage({ 
        type: 'success', 
        text: 'Registration successful! See you at the event!' 
      })
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        telNo: '',
        email: '',
        organization: '',
        tshirtSize: 'M'
      })
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error.message || 'Registration failed. Please try again.' 
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Image 
              src="/logo.png" 
              alt="PBBFA Logo" 
              width={100} 
              height={100}
              className="rounded-full shadow-lg"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
            5KM Run for a Cause
          </h1>
          <p className="text-lg text-gray-600">
            Philippine Bodybuilders & Fitness Association in Kuwait
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Event Poster */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <Image 
              src="/poster.jpeg" 
              alt="5KM Run Event Poster" 
              width={600} 
              height={800}
              className="w-full h-auto"
              priority
            />
          </div>

          {/* Registration Form */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="flex items-center justify-center mb-6">
              <UserPlus className="w-8 h-8 text-orange-500 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">
                Register Now
              </h2>
            </div>

            {message.text && (
              <div className={`mb-6 p-4 rounded-lg ${
                message.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}>
                {message.text}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* First Name */}
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  placeholder="Juan"
                />
              </div>

              {/* Last Name */}
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  placeholder="Dela Cruz"
                />
              </div>

              {/* Tel No */}
              <div>
                <label htmlFor="telNo" className="block text-sm font-medium text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-1" />
                  Telephone Number *
                </label>
                <input
                  type="tel"
                  id="telNo"
                  name="telNo"
                  required
                  value={formData.telNo}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  placeholder="+965 XXXX XXXX"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-1" />
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  placeholder="juan@example.com"
                />
              </div>

              {/* Organization */}
              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                  <Building2 className="w-4 h-4 inline mr-1" />
                  Organization
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                  placeholder="Your organization (optional)"
                />
              </div>

              {/* T-shirt Size */}
              <div>
                <label htmlFor="tshirtSize" className="block text-sm font-medium text-gray-700 mb-2">
                  <Shirt className="w-4 h-4 inline mr-1" />
                  T-shirt Size *
                </label>
                <select
                  id="tshirtSize"
                  name="tshirtSize"
                  required
                  value={formData.tshirtSize}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent transition bg-white"
                >
                  {TSHIRT_SIZES.map(size => (
                    <option key={size.value} value={size.value}>
                      {size.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold py-4 px-6 rounded-lg hover:from-orange-600 hover:to-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                {loading ? 'Registering...' : 'Register for 5KM Run'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <a 
                href="/admin" 
                className="text-sm text-gray-500 hover:text-gray-700 transition"
              >
                Admin Login
              </a>
            </div>
          </div>
        </div>

        {/* Event Details */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Event Details</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div>
              <p className="font-semibold text-orange-600 mb-2">📅 Date</p>
              <p className="text-gray-700">Friday, December 5, 2025</p>
            </div>
            <div>
              <p className="font-semibold text-orange-600 mb-2">📍 Location</p>
              <p className="text-gray-700">Green Island, Sharq Kuwait City</p>
            </div>
            <div>
              <p className="font-semibold text-orange-600 mb-2">🕐 Time</p>
              <p className="text-gray-700">05:30 AM - 7:00 AM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
