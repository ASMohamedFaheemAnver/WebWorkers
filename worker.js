self.onmessage = function (event) {
  const n = event.data;
  self.postMessage(fibonacci(n));
};

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
