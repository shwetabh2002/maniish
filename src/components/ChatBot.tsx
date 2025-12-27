'use client'

import { useState, useRef, useEffect } from 'react'
import { MessageCircle, X, Send, Bot, User } from 'lucide-react'
import { generateContent } from '@/lib/gemini'

interface Message {
  id: number
  text: string
  isBot: boolean
  timestamp: Date
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Add initial greeting when chat opens
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: 1,
          text: "Hey! How can I help you?",
          isBot: true,
          timestamp: new Date()
        }
      ])
    }
  }, [isOpen, messages.length])

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  // Count words in input
  const wordCount = input.trim().split(/\s+/).filter(word => word.length > 0).length

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    const words = value.trim().split(/\s+/).filter(word => word.length > 0)
    
    // Only allow up to 15 words
    if (words.length <= 15) {
      setInput(value)
    }
  }

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now(),
      text: input.trim(),
      isBot: false,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await generateContent(input.trim())
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: response.success 
          ? response.response 
          : "Sorry, I couldn't process your request. Please try again.",
        isBot: true,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, botMessage])
    } catch {
      const errorMessage: Message = {
        id: Date.now() + 1,
        text: "Oops! Something went wrong. Please try again.",
        isBot: true,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="fixed bottom-14 right-14 sm:bottom-16 sm:right-16 z-50">
      {/* Chat Box */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-primary-600 to-blue-600 px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold">GirjaSoft AI</h3>
                <p className="text-white/80 text-xs">Always here to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="h-72 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex gap-2 ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                {message.isBot && (
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                )}
                <div
                  className={`max-w-[75%] px-4 py-2 rounded-2xl ${
                    message.isBot
                      ? 'bg-white text-gray-800 rounded-tl-sm shadow-sm border border-gray-100'
                      : 'bg-gradient-to-r from-primary-600 to-blue-600 text-white rounded-tr-sm'
                  }`}
                >
                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                </div>
                {!message.isBot && (
                  <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                    <User className="w-4 h-4 text-gray-600" />
                  </div>
                )}
              </div>
            ))}
            
            {/* Loading indicator */}
            {isLoading && (
              <div className="flex gap-2 justify-start">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-sm shadow-sm border border-gray-100">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 bg-white border-t border-gray-100">
            <div className="flex gap-2">
              <div className="flex-1 relative">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={handleInputChange}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your question..."
                  disabled={isLoading}
                  className="w-full px-4 py-3 bg-gray-100 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm disabled:opacity-50"
                />
                <span className={`absolute right-3 top-1/2 -translate-y-1/2 text-xs ${wordCount >= 15 ? 'text-red-500' : 'text-gray-400'}`}>
                  {wordCount}/15
                </span>
              </div>
              <button
                onClick={handleSend}
                disabled={!input.trim() || isLoading}
                className="w-12 h-12 bg-gradient-to-r from-primary-600 to-blue-600 rounded-xl flex items-center justify-center text-white hover:from-primary-700 hover:to-blue-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button with Label */}
      <div className={`flex items-center gap-3 ${!isOpen ? 'animate-bounce-gentle' : ''}`}>
        {/* Chat Label - shows when closed */}
        {!isOpen && (
          <div className="hidden sm:flex items-center bg-white px-4 py-2 rounded-full shadow-lg border border-gray-100 animate-fade-in">
            <span className="text-gray-800 font-semibold text-sm whitespace-nowrap">Chat with us</span>
            <span className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          </div>
        )}
        
        {/* Main Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
            isOpen
              ? 'bg-gray-700 hover:bg-gray-800 shadow-2xl'
              : 'bg-gradient-to-br from-blue-500 via-primary-600 to-purple-600 shadow-[0_8px_40px_rgba(79,70,229,0.6)] hover:shadow-[0_12px_50px_rgba(79,70,229,0.8)]'
          }`}
        >
          {/* Rotating ring effect when closed */}
          {!isOpen && (
            <span className="absolute inset-0 rounded-full border-2 border-white/30 animate-spin-slow"></span>
          )}
          
          {/* Inner glow */}
          {!isOpen && (
            <span className="absolute inset-1 rounded-full bg-gradient-to-br from-white/20 to-transparent"></span>
          )}
          
          {isOpen ? (
            <X className="w-8 h-8 text-white relative z-10" />
          ) : (
            <MessageCircle className="w-10 h-10 text-white relative z-10 drop-shadow-lg" />
          )}
        </button>
      </div>

      {/* Notification badge when closed */}
      {!isOpen && (
        <span className="absolute top-0 right-0 w-5 h-5 flex items-center justify-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping"></span>
          <span className="relative inline-flex items-center justify-center rounded-full h-5 w-5 bg-red-500 text-white text-xs font-bold">1</span>
        </span>
      )}
    </div>
  )
}

