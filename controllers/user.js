const notes = require("../models/notes");

exports.getNotes = (req, res) => {
    var userId = req.params.userId;
    var isArchived = req.query.isArchived;

    notes.getNotes(userId, isArchived, (err, result) => {
        if (err) {
            res.status(500).send({ message: "Internal Server Error" });
        } else {
            res.status(200).send({ archivednotes: result.data });
        }
    });

};

exports.addNotes = (req, res) => {
    var userId = req.params.userId;
    var body = req.body;

    const note = new notes.Note({
        CreatedDate: body.createdDate,
        CreatedBy: userId,
        isArchived: 0,
        Topic: body.topic,
        Description: body.description
    });

    notes.createNote(note, (err, result) => {
        if (err) {
            res.status(500).send({ message: "Internal Server Error" });
        } else {
            res.status(201).send({
                message: "success"
            });
        }

    });
}

exports.updateNote = (req, res) => {
    var noteId = req.params.noteId;
    var body = req.body;
    console.log(body.description + " = des");

    const note = new notes.Note({
        Topic: body.topic,
        Description: body.description
    });

    notes.updateNote(note, noteId, (err, result) => {
        if (err) {
            res.status(500).send({ message: "Internal Server Error" });
        } else {
            res.status(201).send({
                message: "success"
            });
        }

    });
}

exports.changeArchieveState = (req, res) => {
    var noteId = req.params.noteId;
    var isArchived = req.query.isArchived;

    notes.setArchieveState(noteId, isArchived, (err, result) => {
        if (err) {
            res.status(500).send({ message: "Internal Server Error" });
        } else {
            res.status(201).send({
                message: "success"
            });
        }
    });
}


exports.removeNote = (req, res) => {
    var noteId = req.params.noteId;
    notes.removeNote(noteId, (err, result) => {
        if (err) {
            res.status(500).send({ message: "Internal Server Error" });
        } else {
            res.status(201).send({
                message: "success"
            });
        }
    });
}

