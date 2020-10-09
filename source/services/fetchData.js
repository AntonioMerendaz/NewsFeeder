import { apiKey, countryCode, articlesUrl } from '../config/apiSettings';

export async function fetchData(category = 'general') {

    try {
        let articles = await fetch(`${articlesUrl}?country=${countryCode}&category=${category}`, {
            headers: {
                'X-API-KEY': apiKey
            }
        });

        let result = await articles.json();
        articles = null;

        return result.articles;
    }
    catch (error) {
        throw error;
    }
}