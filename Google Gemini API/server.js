
import dotenv from 'dotenv';
dotenv.config();

import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

async function run() {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const result = await model.generateContent([
        "What is in this photo?",
        {
            inlineData: {
                data: Buffer.from(fs.readFileSync('images/surfing.jpg')).toString("base64"),
                mimeType: 'image/jpg'
            }
        }]
    );
    console.log(result.response.text());
}

run();