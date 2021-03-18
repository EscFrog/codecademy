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
    },
    {
        quote: "You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.",
        speaker: "Unknown"
    },
    {
        quote: "It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.",
        speaker: "Vince Lombardi"
    },
    {
        quote: "If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.",
        speaker: "Steve Jobs"
    },
    {
        quote: "People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.",
        speaker: "Rob Siltanen"
    },
    {
        quote: "Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.",
        speaker: "Og Mandino"
    },
    {
        quote: "Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.",
        speaker: "Mohnish Pabrai"
    },
    {
        quote: "We May Encounter Many Defeats But We Must Not Be Defeated.",
        speaker: "Maya Angelou"
    },
    {
        quote: "Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.",
        speaker: "Johann Wolfgang Von Goethe"
    },
    {
        quote: "Imagine Your Life Is Perfect In Every Respect; What Would It Look Like?",
        speaker: "Brian Tracy"
    },
    {
        quote: "We Generate Fears While We Sit. We Overcome Them By Action.",
        speaker: "Dr. Henry Link"
    },
    {
        quote: "Whether You Think You Can Or Think You Can’t, You’re Right.",
        speaker: "Henry Ford"
    },
    {
        quote: "Security Is Mostly A Superstition. Life Is Either A Daring Adventure Or Nothing.",
        speaker: "Helen Keller"
    },
    {
        quote: "The Man Who Has Confidence In Himself Gains The Confidence Of Others.",
        speaker: "Hasidic Proverb"
    },
    {
        quote: "The Only Limit To Our Realization Of Tomorrow Will Be Our Doubts Of Today.",
        speaker: "Franklin D. Roosevelt"
    },
    {
        quote: "Creativity Is Intelligence Having Fun.",
        speaker: "Albert Einstein"
    },
    {
        quote: "What You Lack In Talent Can Be Made Up With Desire, Hustle And Giving 110% All The Time.",
        speaker: "Don Zimmer"
    },
    {
        quote: "Do What You Can With All You Have, Wherever You Are.",
        speaker: "Theodore Roosevelt"
    },
    {
        quote: "Develop An ‘Attitude Of Gratitude’. Say Thank You To Everyone You Meet For Everything They Do For You.",
        speaker: "Brian Tracy"
    },
    {
        quote: "You Are Never Too Old To Set Another Goal Or To Dream A New Dream.",
        speaker: "C.S. Lewis"
    },
    {
        quote: "To See What Is Right And Not Do It Is A Lack Of Courage.",
        speaker: "Confucius"
    },
    {
        quote: "Reading Is To The Mind, As Exercise Is To The Body.",
        speaker: "Brian Tracy"
    },
    {
        quote: "Fake It Until You Make It! Act As If You Had All The Confidence You Require Until It Becomes Your Reality.",
        speaker: "Brian Tracy"
    },
    {
        quote: "The Future Belongs To The Competent. Get Good, Get Better, Be The Best!",
        speaker: "Brian Tracy"
    },
    {
        quote: "For Every Reason It’s Not Possible, There Are Hundreds Of People Who Have Faced The Same Circumstances And Succeeded.",
        speaker: "Jack Canfield"
    },
    {
        quote: "Things Work Out Best For Those Who Make The Best Of How Things Work Out.",
        speaker: "John Wooden"
    },
    {
        quote: "A Room Without Books Is Like A Body Without A Soul.",
        speaker: "Marcus Tullius Cicero"
    },
    {
        quote: "I Think Goals Should Never Be Easy, They Should Force You To Work, Even If They Are Uncomfortable At The Time.",
        speaker: "Michael Phelps"
    },
    {
        quote: "One Of The Lessons That I Grew Up With Was To Always Stay True To Yourself And Never Let What Somebody Else Says Distract You From Your Goals.",
        speaker: "Michelle Obama"
    },
    {
        quote: "Today’s Accomplishments Were Yesterday’s Impossibilities.",
        speaker: "Robert H. Schuller"
    },
    {
        quote: "The Only Way To Do Great Work Is To Love What You Do. If You Haven’t Found It Yet, Keep Looking. Don’t Settle.",
        speaker: "Steve Jobs"
    },
    {
        quote: "You Don’t Have To Be Great To Start, But You Have To Start To Be Great.",
        speaker: "Zig Ziglar"
    },
    {
        quote: "A Clear Vision, Backed By Definite Plans, Gives You A Tremendous Feeling Of Confidence And Personal Power.",
        speaker: "Brian Tracy"
    },
    {
        quote: "There Are No Limits To What You Can Accomplish, Except The Limits You Place On Your Own Thinking.",
        speaker: "Brian Tracy"
    },
    {
        quote: "Integrity Is The Most Valuable And Respected Quality Of Leadership. Always Keep Your Word.",
        speaker: "Unknown"
    },
    {
        quote: "Leadership Is The Ability To Get Extraordinary Achievement From Ordinary People",
        speaker: "Unknown"
    },
    {
        quote: "Leaders Set High Standards. Refuse To Tolerate Mediocrity Or Poor Performance",
        speaker: "Unknown"
    },
    {
        quote: "Clarity Is The Key To Effective Leadership. What Are Your Goals?",
        speaker: "Unknown"
    },
    {
        quote: "The Best Leaders Have A High Consideration Factor. They Really Care About Their People",
        speaker: "Unknown"
    },
    {
        quote: "Leaders Think And Talk About The Solutions. Followers Think And Talk About The Problems.",
        speaker: "Unknown"
    },
    {
        quote: "The Key Responsibility Of Leadership Is To Think About The Future. No One Else Can Do It For You.",
        speaker: "Unknown"
    },
    {
        quote: "The Effective Leader Recognizes That They Are More Dependent On Their People Than They Are On Them. Walk Softly.",
        speaker: "Unknown"
    },
    {
        quote: "Leaders Never Use The Word Failure. They Look Upon Setbacks As Learning Experiences.",
        speaker: "Unknown"
    },
    {
        quote: "Practice Golden Rule Management In Everything You Do. Manage Others The Way You Would Like To Be Managed.",
        speaker: "Unknown"
    },
    {
        quote: "Superior Leaders Are Willing To Admit A Mistake And Cut Their Losses. Be Willing To Admit That You’ve Changed Your Mind. Don’t Persist When The Original Decision Turns Out To Be A Poor One.",
        speaker: "Unknown"
    },
    {
        quote: "Leaders Are Anticipatory Thinkers. They Consider All Consequences Of Their Behaviors Before They Act.",
        speaker: "Unknown"
    },
    {
        quote: "The True Test Of Leadership Is How Well You Function In A Crisis.",
        speaker: "Unknown"
    },
    {
        quote: "Leaders Concentrate Single-Mindedly On One Thing– The Most Important Thing, And They Stay At It Until It’s Complete.",
        speaker: "Unknown"
    },
    {
        quote: "The Three ‘C’s’ Of Leadership Are Consideration, Caring, And Courtesy. Be Polite To Everyone.",
        speaker: "Unknown"
    },
    {
        quote: "Respect Is The Key Determinant Of High-Performance Leadership. How Much People Respect You Determines How Well They Perform.",
        speaker: "Unknown"
    },
    {
        quote: "Leadership Is More Who You Are Than What You Do.",
        speaker: "Unknown"
    },
    {
        quote: "Entrepreneurial Leadership Requires The Ability To Move Quickly When Opportunity Presents Itself.",
        speaker: "Unknown"
    },
    {
        quote: "Leaders Are Innovative, Entrepreneurial, And Future-Oriented. They Focus On Getting The Job Done.",
        speaker: "Unknown"
    },
    {
        quote: "Leaders Are Never Satisfied; They Continually Strive To Be Better.",
        speaker: "Unknown"
    },
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