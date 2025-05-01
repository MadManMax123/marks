module.exports = (req, res) => {
  const users = require('../data/users.json');
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (user) res.status(200).json({ success: true });
  else res.status(401).json({ success: false });
};