const router = require("express").Router();
const DB = require("./db-model");

const restricted = require("./auth/restricted-middleware.js");

// READ
// read all data
router.get("/", restricted, (req, res) => {
  // the 'table' variable returns the baseUrl from the request after removing the slash
  // this works because the table name matches the baseUrl
  const table = req.baseUrl.split("/").slice(1).join("");

  DB.findAll(table)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res
        .status(400)
        .json({ message: `Could not create ${table} resource`, err });
    });
});

// READ
// read by ID
router.get("/:id", restricted, (req, res) => {
  const { id } = req.params;
  const table = req.baseUrl.split("/").slice(1).join("");

  DB.findById(id, table)
    .then((data) => {
      data
        ? res.status(200).json(data)
        : res.status(401).json({ message: `${table} entry not found` });
    })
    .catch((err) => res.status(401).json({ err }));
});

// CREATE
// create a new resource
router.post("/", restricted, (req, res) => {
  const newData = req.body;
  const table = req.baseUrl.split("/").slice(1).join("");

  DB.add(newData, table)
    .then((data) => {
      res.status(201).json({ message: "Success", data });
    })
    .catch((err) => res.status(401).json({ message: "Failed", err }));
});

// UPDATE
router.put("/:id", restricted, (req, res) => {
  const { id } = req.params;
  const updates = req.body;
  const table = req.baseUrl.split("/").slice(1).join("");

  DB.update(id, updates, table)
    .then((data) => {
      res.status(201).json({ message: "Success", data });
    })
    .catch((err) => res.status(401).json({ message: "Failed", err }));
});

// DELETE
router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params;
  const table = req.baseUrl.split("/").slice(1).join("");

  DB.remove(id, table)
    .then((data) => {
      res.status(201).json({ message: "Success", data });
    })
    .catch((err) => res.status(401).json({ message: "Failed", err }));
});

module.exports = router;
