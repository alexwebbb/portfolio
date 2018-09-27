module.exports = ({ text, href }) => {
  return `<a href="https://${href}" target="_blank" rel="noopener noreferrer">${text}</a>`;
};
