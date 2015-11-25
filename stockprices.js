//Say you have an array for which the ith element is the price of a given stock on day i.

//Design an algorithm to find the maximum profit. 
//You may complete as many transactions as you like 
//(ie, buy one and sell one share of the stock multiple times) 
//with the following restrictions:

//You may not engage in multiple transactions at the same time 
//(ie, you must sell the stock before you buy again).
//After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)
//Example:

//prices = [1, 2, 3, 0, 2]
//maxProfit = 3 //buy 0 sell 1 buy 3 sell 4
//transactions = [buy, sell, cooldown, buy, sell]
//first iteration ignore cd


// [0, 10, 0, 20, 0, 300, 0, 5000]
// max here is 5020
// buy 0 sell 3 buy 6 sell 7
function findMaxProfit (prices) {

  //loop through prices and calc max profit for current sub array
  //whenever we sell we block a purchase on the next day
  //whenever we have stock we cannot buy (shouldn't be a problem)


};

