/**
 * PART A
 * Objects
 */

const person = {
  firstName: "Robert",
  lastName: "Pollock",
  birthday: "October 29, 1936",
  email: "RobertKPollock@armyspy.com",
  friends: ["Bob", "Sam"],
};

// Replace null with the firstName and lastName from the person object
// You should access the value using dot notation
// Use a string template literal to combine the names together, with a space in the middle
const personsName = `${person.firstName} ${person.lastName}`;

// Replace null with the second item from the friends array, from the person object. It should result in the value "Sam"
// You should access the value using dot notation, and array indexes
const secondFriend = `${person.friends[1]}`;

// Use this object to look up the correct tax rate from the getTaxRate function
const taxRates = {
  ut: 0.0685,
  nv: 0.08,
  tx: 0.0625,
  al: 0.04,
  ca: 0.0825,
};

const getTaxRate = (stateCode) => {
  // Replace null with the correct state code
  // Use square bracket notation to read from the taxRates object
  // https://www.loom.com/share/4edb4131d48f40e8bb0d527365932e4c
  return taxRates[stateCode];
};

const utTaxRate = getTaxRate("ut");
const nvTaxRate = getTaxRate("nv");

// Create an object containing at least 3 countries, including newZealand
// countries.newZealand.population should be 5000000
// countries.newZealand.cities[0] should be "Auckland"
// You can make up the rest of the countries
const countries = {
  newZealand: {
    population: 5000000,
    cities: ["Auckland", "Wellington", "Tauranga"],
  },
  Australia: {
    population: 20000000,
    cities: ["Sydney", "Melbourne", "Adelaide"],
  },
  Japan: {
    population: 90000000,
    cities: ["tokyo", "Kiyusu", "Ngagasaki"],
  },
};

/**
 * PART B
 * Data models
 */

// Represent an artist and their albums
// https://www.allmusic.com/artist/prince-mn0000361393/discography
const artist = {
  name: "Prince",
  bio: "No other artist of the rock & roll era compares to Prince. He was the rare combination of a visionary pop conceptualist and master musician who could capture the sounds he imagined, a quality that fueled his remarkable success in the 1980s. Ideas came to Prince so quickly, they couldn't be contained on his own records, either with or without his backing band the Revolution. He masterminded albums by the Time and Sheila E, and gave away hit songs to the Bangles and Sheena Easton, shaping the sound of popular music in the process. There wasn't an area of pop music in the '80s that didn't bear his influence: it could be heard in freaky funk and R&B slow jams, in thick electro-techno and neo-psychedelic rock, and right at the top of the pop charts. Prince's reign continued into the early '90s, a time which found him swapping the Revolution for the jazz-funk New Power Generation, but by the middle of the decade, he'd entered a cold war with his record company that contributed to a slow slide down the charts. Once he received emancipation from his contract, he seized the opportunity to release as much music as he could record, occasionally taking the time to focus his aim at the mainstream, scoring such hits as 2004's Musicology in the process. Prince produced new music at a furious pace throughout the last decade of his life, which is what made his death in 2016 such a shock: his music was ceaselessly, endlessly alive and full of possibility.",
  albums: ["For you", "Prince", "Dirty Mind", "controversy", "1999"],
};

// Represent a list of news articles
// https://news.ycombinator.com/
const articles = {
  articles: [
    {
      name: "Two U.S. men charged in 2022 hacking of DEA portal",
      link: "https://krebsonsecurity.com/2023/03/two-us-men-charged-in-2022-hacking-of-dea-portal/",
    },
    {
      name: "Kali Linux 2023.1 introduces 'Purple' distro for defensive security",
      link: "https://gitlab.com/kalilinux/kali-purple/documentation/-/wikis/home",
    },
    {
      name: "We can't all use AI. Someone has to generate the training data",
      link: "https://twitter.com/paulg/status/1635672262903750662",
    },
  ],
};

// Represent a cafe menu
// https://www.thequaykitchen.co.nz/menu/main-menu
const menu = {
  brunch: [
    "THE TRUFFLED PIG",
    "HOMEMADE MUFFIN OF THE DAY",
    "RICOTTA SCRAMBLE",
  ],
  pizza: ["MARGHERITA", "PROSCIUTTO", "Honky Kong"],
};
// IGNORE! Do not edit the below text - it's used to make the tests run
export {
  personsName,
  secondFriend,
  getTaxRate,
  countries,
  artist,
  articles,
  menu,
};
