// Helps report differences
const bipolar = (...prev) => {
  // Reset
  let memo = prev;

  return (...next) => {
    // Calculate deltas
    const diff = memo.map((v, i) => next[i] - v);

    // Save for later
    memo = next;

    // Array of deltas
    return diff;
  };
};

export default bipolar;

