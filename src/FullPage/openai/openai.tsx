import OpenAI from "openai";

export const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  organization: process.env.REACT_APP_OPENAI_ORG_ID,
  dangerouslyAllowBrowser: true,
});
