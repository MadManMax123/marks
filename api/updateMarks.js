const fs = require('fs');
module.exports = (req, res) => {
  const { table, name, subject, marks } = req.body;
  const data = JSON.parse(fs.readFileSync('./data/marks.json'));
  data[table][name][subject] = marks;
  fs.writeFileSync('./data/marks.json', JSON.stringify(data, null, 2));
  res.status(200).json({ success: true });
};