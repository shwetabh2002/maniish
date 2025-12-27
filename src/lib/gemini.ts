/**
 * Gemini AI Utility Functions
 * 
 * Usage:
 * ```ts
 * import { generateContent } from '@/lib/gemini'
 * 
 * const response = await generateContent('Tell me about YouTube')
 * console.log(response)
 * ```
 */

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent'

// Context about GirjaSoft to provide relevant answers
const GIRJASOFT_CONTEXT = `You are GirjaSoft AI Assistant - a helpful, friendly chatbot for GirjaSoft's website.

ABOUT GIRJASOFT:
GirjaSoft is an IT infrastructure company providing end-to-end IT solutions. We are reliable, secure, and scalable.
- 15+ years of experience
- 500+ successful projects
- 24/7 support and monitoring
- Certified IT professionals

OUR SERVICES:
1. BAU (Business-as-Usual) IT Support - 24/7 monitoring, incident management, user/system administration, patch management
2. IT Project Support - Infrastructure upgrades, migrations, cloud transformation, network modernization
3. Microsoft Services - Microsoft 365, Azure Virtual Desktop, Windows 365, Active Directory, Entra ID, Intune
4. Firewall & Network Security - Cisco, Fortinet, Palo Alto firewalls, VPN, intrusion detection
5. Cloud Services - Microsoft Azure, hybrid cloud, cloud security, cost optimization
6. Cybersecurity - Identity management, MFA, threat monitoring, security audits, ISO/GDPR compliance
7. Software Automation - Process automation, API integration, workflow optimization
8. System Integration - API development, legacy modernization, third-party integrations
9. HRMS Software - Complete HR Management System with attendance tracking, payroll processing, leave management, recruitment, performance management, employee self-service portal, and mobile app. 100% statutory compliance (PF, ESI, TDS). Trusted by 500+ companies.

CONTACT INFO:
- Email: info@girjasoft.com
- Phone: +91 96439 17415
- Address: 71, A Block, Harsh Vihar, Chipyana Buzurg, Greater Noida, U.P - 201009
- Hours: Mon-Fri 9:00 AM - 6:00 PM

INSTRUCTIONS:
- Keep responses SHORT (2-4 sentences max)
- Be friendly and professional
- DO NOT start with greetings like "Hello", "Hi there", "Hey" etc. - just answer directly
- Guide users to contact us for detailed discussions
- If asked about pricing, say "Contact us for a customized quote"
- For technical questions outside our services, politely redirect to our expertise areas
- Always be helpful and suggest relevant services when appropriate

USER QUESTION: `

export interface GeminiResponse {
  success: boolean
  response: string
  raw?: unknown
  error?: string
  details?: unknown
}

/**
 * Check if we're in production (Netlify)
 */
function isProduction(): boolean {
  if (typeof window === 'undefined') return false
  return window.location.hostname !== 'localhost' && 
         !window.location.hostname.includes('127.0.0.1')
}

/**
 * Build the full prompt with context
 */
function buildPrompt(userMessage: string): string {
  return GIRJASOFT_CONTEXT + userMessage
}

/**
 * Generate content using Google Gemini AI
 * - In production: Uses Netlify function
 * - In development: Calls Gemini API directly
 * @param prompt - The text prompt to send to Gemini
 * @returns Promise with the AI response
 */
export async function generateContent(prompt: string): Promise<GeminiResponse> {
  const fullPrompt = buildPrompt(prompt)
  
  try {
    if (isProduction()) {
      // Production: Use Netlify function
      const response = await fetch('/.netlify/functions/gemini', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt: fullPrompt }),
      })

      const data = await response.json()

      if (!response.ok) {
        return {
          success: false,
          response: '',
          error: data.error || 'Failed to generate content',
          details: data.details,
        }
      }

      return data as GeminiResponse
    } else {
      // Development: Call Gemini API directly
      const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY

      if (!apiKey) {
        return {
          success: false,
          response: '',
          error: 'API key not configured. Add NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY to .env.local',
        }
      }

      const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: fullPrompt,
                },
              ],
            },
          ],
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        return {
          success: false,
          response: '',
          error: 'Gemini API error',
          details: errorData,
        }
      }

      const data = await response.json()
      const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || ''

      return {
        success: true,
        response: textResponse,
        raw: data,
      }
    }
  } catch (error) {
    return {
      success: false,
      response: '',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    }
  }
}

/**
 * Direct server-side call to Gemini API (for use in Server Components)
 * @param prompt - The text prompt to send to Gemini
 * @returns Promise with the AI response
 */
export async function generateContentServer(prompt: string): Promise<GeminiResponse> {
  const apiKey = process.env.GOOGLE_GEMINI_API_KEY
  const fullPrompt = buildPrompt(prompt)

  if (!apiKey) {
    return {
      success: false,
      response: '',
      error: 'API key not configured',
    }
  }

  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: fullPrompt,
              },
            ],
          },
        ],
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      return {
        success: false,
        response: '',
        error: 'Gemini API error',
        details: errorData,
      }
    }

    const data = await response.json()
    const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || ''

    return {
      success: true,
      response: textResponse,
      raw: data,
    }
  } catch (error) {
    return {
      success: false,
      response: '',
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    }
  }
}
