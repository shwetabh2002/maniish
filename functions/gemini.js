/**
 * Netlify Function: Gemini AI Proxy
 * Endpoint: /.netlify/functions/gemini
 * 
 * Usage:
 * POST /.netlify/functions/gemini
 * Body: { "prompt": "Your question here" }
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

exports.handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
      body: JSON.stringify({ error: 'Method not allowed' }),
    }
  }

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
      },
      body: '',
    }
  }

  try {
    const { prompt } = JSON.parse(event.body || '{}')

    if (!prompt) {
      return {
        statusCode: 400,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Prompt is required' }),
      }
    }

    const apiKey = process.env.GOOGLE_GEMINI_API_KEY

    if (!apiKey) {
      return {
        statusCode: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'API key not configured' }),
      }
    }

    // Check if prompt already has context (from client), if not add it
    const fullPrompt = prompt.includes('GIRJASOFT') ? prompt : GIRJASOFT_CONTEXT + prompt

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
        statusCode: response.status,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify({ error: 'Gemini API error', details: errorData }),
      }
    }

    const data = await response.json()
    const textResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || ''

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        success: true,
        response: textResponse,
        raw: data,
      }),
    }
  } catch (error) {
    console.error('Gemini API error:', error)
    return {
      statusCode: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({ error: 'Internal server error' }),
    }
  }
}
