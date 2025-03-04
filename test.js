require("dotenv").config();
const axios = require("axios");

const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
const API_KEY = process.env.GEMINI_API_KEY;

async function getDiagnosis(symptoms) {
    try {
        const response = await axios.post(`${GEMINI_API_URL}?key=${API_KEY}`, {
            contents: [
                { parts: [{ text: `A patient reports these symptoms: ${symptoms}. Provide a possible diagnosis and advice. Always provide the three most possible diagnosis. Do not give many.` }] }
            ]
        });

        console.log("AI Response:", response.data.candidates[0].content.parts[0].text);
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
    }
}

// Example: Hardcoded symptoms
const symptoms = "Tooth pain,jaw discomfort,dry mouth";
getDiagnosis(symptoms);
