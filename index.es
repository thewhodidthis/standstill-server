// Helps track deltas
const bipolar = (...prev) => {
  let memo = prev;

  return (...next) => {
    // Calculate deltas
    const diff = memo.map((v, i) => next[i] - v);

    // Replace
    memo = next;

    return diff;
  };
};

export default bipolar;

