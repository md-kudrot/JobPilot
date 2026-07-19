import { NextRequest } from 'next/server';
import { auth } from '@/lib/auth';
import { ObjectId } from 'mongodb';

export interface SessionUser {
  id: string;
  email: string;
  name: string;
}

export async function requireSession(
  request: NextRequest
): Promise<SessionUser> {
  const session = await auth.api.getSession({
    headers: request.headers,
  });

  if (!session) {
    throw new AuthError('Unauthorized', 401);
  }

  return {
    id: session.user.id,
    email: session.user.email,
    name: session.user.name,
  };
}

export async function optionallySession(
  request: NextRequest
): Promise<SessionUser | null> {
  try {
    const session = await auth.api.getSession({
      headers: request.headers,
    });
    if (!session) return null;
    return {
      id: session.user.id,
      email: session.user.email,
      name: session.user.name,
    };
  } catch {
    return null;
  }
}

export function toObjectId(id: string): ObjectId {
  if (!ObjectId.isValid(id)) {
    throw new ApiError('Invalid ID format', 400);
  }
  return new ObjectId(id);
}

export class ApiError extends Error {
  constructor(
    public message: string,
    public status: number = 500,
    public details?: unknown
  ) {
    super(message);
  }
}

export class AuthError extends ApiError {
  constructor(message = 'Unauthorized', status = 401) {
    super(message, status);
  }
}
