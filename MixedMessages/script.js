const defaultQuotes = [
    {
        quote: "The Best Way To Get Started Is To Quit Talking And Begin Doing.",
        speaker: "Walt Disney"
    },
    {
        quote: "The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.",
        speaker: "Winston Churchill"
    },
    {
        quote: "Don’t Let Yesterday Take Up Too Much Of Today.",
        speaker: "Will Rogers"
    }
];

const fs = require('fs');
const dataPath = 'quotes.json';

const generateRandQuote = (quotes) => {
    const randomID = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomID];
    console.log(`today's quote:\n>    ${randomQuote.quote}\n>    - ${randomQuote.speaker}`);
};

const init = () => {
    if (!fs.existsSync(dataPath)) {
        // write quotes.json file
        const dataJSON = JSON.stringify(defaultQuotes);
        fs.writeFileSync(dataPath, dataJSON);
    } else {
        // read quotes.json file
        const dataJSON = fs.readFileSync(dataPath).toString();
        const data = JSON.parse(dataJSON);
        generateRandQuote(data);
    };
};

init();