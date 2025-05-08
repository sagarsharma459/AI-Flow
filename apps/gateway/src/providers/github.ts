import { OAuth2Client } from 'google-auth-library';

export async function githubOAuth(code: string) {
  // TODO: exchange code for access_token, fetch profile
  return { id: 'gh-id', email: 'user@github.com' };
}
