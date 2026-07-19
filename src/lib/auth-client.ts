import { createAuthClient } from 'better-auth/react';

// No baseURL: default to the current origin so auth requests never go
// cross-origin (a hardcoded localhost:3000 breaks when dev runs on 3001+).
export const authClient = createAuthClient();

export const { signIn, signUp, signOut, useSession } = authClient;
