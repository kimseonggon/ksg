import fs from 'fs';
import path from 'path';
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const SHEET_ID = process.env.REACT_APP_GOOGLE_SHEET_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_SHEET_API_KEY;
const SHEET_NAME = process.env.REACT_APP_GOOGLE_SHEET_NAME

if (!SHEET_ID || !API_KEY) {
    console.error('❌ GOOGLE_SHEET_ID 또는 GOOGLE_API_KEY가 .env에 설정되어 있지 않습니다.');
    process.exit(1);
}

const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${SHEET_NAME}?key=${API_KEY}`;

async function fetchTranslations(): Promise<void> {
    try {
        const { data } = await axios.get<{ values: string[][] }>(url);
        const [headers, ...rows] = data.values;
        const __dirname = path.resolve();
        const languages = headers.slice(1); // ['ko', 'en']
        const translations: Record<string, Record<string, string>> = {};

        languages.forEach((lang) => {
            translations[lang] = {};
        });

        rows.forEach((row) => {
            const key = row[0];
            languages.forEach((lang, index) => {
                translations[lang][key] = row[index + 1] || '';
            });
        });

        for (const lang of languages) {
            console.log('__dirname', __dirname)
            const outputPath = path.resolve(__dirname, `./src/i18n_google/locales/${lang}.json`);
            console.log('outputPath', outputPath)
            fs.mkdirSync(path.dirname(outputPath), { recursive: true });
            fs.writeFileSync(outputPath, JSON.stringify(translations[lang], null, 2), 'utf-8');
            console.log(`✅ ${lang}.json 생성 완료`);
        }
    } catch (error: any) {
        console.error('❌ 번역 데이터 가져오기 실패:', error.message);
    }
}

fetchTranslations();