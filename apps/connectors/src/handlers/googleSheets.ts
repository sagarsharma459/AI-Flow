import { google } from 'googleapis';

export async function fetchSheet(spreadsheetId: string, range: string) {
  const sheets = google.sheets({ version: 'v4', auth: process.env.GOOGLE_API_KEY });
  const res = await sheets.spreadsheets.values.get({ spreadsheetId, range });
  return res.data.values;
}
