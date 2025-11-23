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
    tshirtSize: "Organization's Uniform or Best Run Outfit"
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
        tshirtSize: "Organization's Uniform or Best Run Outfit"
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
                  Attire
                </label>
                <div className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-700 cursor-not-allowed">
                  Organization's Uniform or Best Run Outfit
                </div>
                <input
                  type="hidden"
                  id="tshirtSize"
                  name="tshirtSize"
                  value="Organization's Uniform or Best Run Outfit"
                />
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

        {/* Registration & Prizes */}
        <div className="mt-8 bg-gradient-to-br from-orange-50 to-blue-50 rounded-2xl shadow-xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Registration & Prizes</h3>
          
          <div className="space-y-6 max-w-3xl mx-auto">
            {/* Registration Fee */}
            <div className="bg-white rounded-lg p-4 shadow">
              <p className="text-lg"><span className="font-semibold text-orange-600">💳 Registration Fee:</span> 5 KD</p>
            </div>

            {/* Prizes */}
            <div className="bg-white rounded-lg p-6 shadow">
              <h4 className="font-bold text-lg text-gray-900 mb-4">🏆 Prizes:</h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span><strong className="text-orange-600">Champion (Male & Female):</strong> 20 KD + Medal + Certificate + Trophy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span><strong className="text-orange-600">1st Place (Male & Female):</strong> 10 KD + Medal + Certificate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span><strong className="text-orange-600">2nd Place (Male & Female):</strong> 5 KD + Medal + Certificate</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span><strong className="text-orange-600">All Participants:</strong> Finisher Medal + Certificate of Participation</span>
                </li>
              </ul>
            </div>

            {/* Payment Info */}
            <div className="bg-white rounded-lg p-4 shadow">
              <p className="text-gray-700 mb-2">
                <span className="font-semibold text-orange-600">💰 Payment:</span> Through Link/Wamd No. 55543034/GCash No. 09551208044 and Cash on or before <strong>Nov 30, 2025</strong>
              </p>
              <p className="text-red-600 font-semibold">⚠️ Strictly NO registration on Dec 5, 2025</p>
            </div>

            {/* Event Purpose */}
            <div className="bg-white rounded-lg p-6 shadow">
              <p className="text-gray-700 leading-relaxed mb-4">
                This event aims to promote health and wellness while bringing our community together to make a meaningful impact. Your participation will help raise awareness and funds to provide essential supplies for affected families.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Whether you run, jog, walk, or simply show support, your presence will truly make a difference.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-orange-500 text-white rounded-lg p-6 shadow-lg text-center">
              <p className="text-lg mb-2">📞 For more information, contact us local & WhatsApp:</p>
              <a href="tel:+96555543034" className="text-2xl font-bold hover:underline">
                +965 55543034
              </a>
            </div>

            {/* Thank You */}
            <div className="text-center text-gray-700">
              <p className="text-lg font-semibold">
                Thank you for your time, support, and commitment to positive change.
              </p>
              <p className="text-lg mt-2">
                We look forward to seeing you at the event! 🏃‍♀️🏃‍♂️
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
