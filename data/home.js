const initialLines = [
  {
    author: "other",
    text:
      "Hey, what's up? Let me help you. I can do all sorts of stuff. Turning on lights, starting the vaccum cleaner. Change the tune for the washer. You name it!",
  },
  {
    author: "other",
    text: "Just let me know.",
  },
  {
    text: "Turn on the washer",
  },
];

const initialAlternatives = [
  {
    text: "Hello",
    action: "add-line",
  },
  {
    text: "Turn off all my lights",
    action: "turn-off-lights",
  },
];

export { initialAlternatives, initialLines };
