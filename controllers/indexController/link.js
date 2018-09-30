module.exports = ({ name, href }) => {
  return `<a href="https://${href}" target="_blank" rel="noopener noreferrer">${name}</a>`;
};
