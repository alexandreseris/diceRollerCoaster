const Stuff = require('../models/stuff');
const logger = require('../logger');

exports.getAllStuff = (req, res, next) => {
  res.status(201).json({
    message: Stuff.selectAll()
  });
}

exports.getOneStuff = (req, res, next) => {
  const stuff = new Stuff(req.params.data);
  res.status(201).json({
    message: stuff.select()
  });
}

exports.createStuff = (req, res, next) => {
  const stuff = new Stuff(req.body.data);
  stuff.insert();
  res.status(201).json({
    message: "oki"
  });
};

exports.modifyStuff = (req, res, next) => {
  const stuff = new Stuff(req.params.data);
  stuff.update(req.body.newData);
  res.status(201).json({
    message: "oki"
  });
}

exports.deleteStuff = (req, res, next) => {
  const stuff = new Stuff(req.params.data);
  stuff.delete();
  res.status(201).json({
    message: "oki"
  });
}