import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { job, user } = await request.json();

    if (!job || !user) {
      return NextResponse.json(
        { error: 'Job and user data are required' },
        { status: 400 }
      );
    }

    const apiKey = process.env.OPENROUTER_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'OpenRouter API key not configured' },
        { status: 500 }
      );
    }

    const prompt = `Write a professional, personalized cover letter/email for a job application.

Job Details:
- Title: ${job.title}
- Company: ${job.company}
- Location: ${job.location}
- Job Type: ${job.jobType}
- Industry: ${job.industry}
- Required Skills: ${job.skills?.join(', ') || 'Not specified'}
- Description: ${job.description || 'Not provided'}

Candidate Details:
- Name: ${user.name || '[Your Name]'}
- Email: ${user.email}
- Role: ${user.role || 'Not specified'}
- Skills: ${user.skills?.join(', ') || 'Not specified'}
- Experience: ${user.experience || 'Not specified'} years
- Preferred Job Type: ${user.jobType || 'Not specified'}
- Location: ${user.location || 'Not specified'}
- Bio: ${user.bio || 'Not provided'}

Write a compelling, professional cover letter that:
1. Shows genuine interest in the specific role and company
2. Highlights relevant skills and experience matching the job requirements
3. Demonstrates knowledge of the company/industry
4. Is concise (3-4 paragraphs max)
5. Has a professional tone
6. Includes a clear call to action

Format as a complete email with subject line.`;

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        'HTTP-Referer': 'http://localhost:3000',
        'X-Title': 'JobPilot AI',
      },
      body: JSON.stringify({
        model: 'openai/gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You are an expert career coach and professional cover letter writer. Write concise, personalized, and compelling cover letters.',
          },
          {
            role: 'user',
            content: prompt,
          },
        ],
        temperature: 0.7,
        max_tokens: 1000,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('OpenRouter API error:', error);
      return NextResponse.json(
        { error: 'Failed to generate email' },
        { status: 500 }
      );
    }

    const data = await response.json();
    const email = data.choices?.[0]?.message?.content || '';

    return NextResponse.json({ email });
  } catch (error) {
    console.error('Generate email error:', error);
    return NextResponse.json(
      { error: 'Failed to generate email' },
      { status: 500 }
    );
  }
}