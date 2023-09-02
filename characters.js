/*
Input: s = "leetscode", dictionary = ["leet","code","leetcode"]
Output: 1
Explanation: We can break s in two substrings: "leet" from index 0 to 3 and "code" from index 5 to 8. There is only 1 unused character (at index 4), so we return 1.\
*/

var minExtraChar = function(s, dictionary) {
    const n = s.length;
    const dictionarySet = new Set(dictionary);
    const dp = Array(n + 1).fill(0);

    for (let start = n - 1; start >= 0; start--) {
        dp[start] = dp[start + 1] + 1;
        for (let end = start; end < n; end++) {
            const curr = s.substring(start, end + 1);
            if (dictionarySet.has(curr)) {
                dp[start] = Math.min(dp[start], dp[end + 1]);
            }
        }
    }

    return dp[0];
};

//////////////////////////////////////////////////////////////////////////////////////////////////////////
