const getCoins = (sum, coins) => {
  const result = [];
  let resAmount = sum;
  coins.sort((a, b) => b - a);
  for (let i = 0; i < coins.length; i++) {
    const count = Math.floor(resAmount / coins[i]);
    if (count > 0) {
      for (let j = 0; j < count; j++) {
        result.push(coins[i]);
      }
      resAmount -= coins[i] * count;
    }
  }

  return resAmount > 0 ? -1 : result;
};

const main = () => {
  const penny = [1, 3, 4, 2];
  const amount = 5;
  res = getCoins(amount, penny);
  console.log(res);
};

main();
