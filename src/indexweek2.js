// 4 random answer based on numbers

const randomAnswer = {
  0: "Turkey : 🇹🇷",
  1: "Netherlands: 🇳🇱",
  2: "UK: 🇬🇧",
  3: "Belgium: 🇧🇪",
};

// getting random answer between 0 and 3

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// responnse with random answer lookup tables
export default {
  async fetch(request) {
    return new Response(randomAnswer[getRandomInt(4)]);
  },
};
