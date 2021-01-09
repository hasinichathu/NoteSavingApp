const sql = require("./database.js");

exports.getNotes = (userId, isArchived, sendNotes) => {
    var sqlString = "( SELECT NoteId, Topic, Description, CreatedBy FROM Note WHERE CreatedBy=? AND isArchived=?)";
    sql.query(sqlString, [userId, isArchived], (err, result) => {
        if (err) {
            sendNotes(err, null);
        } else {
            sendNotes(null, { data: result });
        }
    });
};

exports.Note = function (note) {
    this.CreatedBy = note.CreatedBy;
    this.CreatedDate = note.CreatedDate;
    this.isArchived = note.isArchived;
    this.Topic = note.Topic;
    this.Description = note.Description;

};

exports.createNote = (note, createdCallback) => {
    var noteSql = "INSERT INTO note SET ?";
    sql.query(noteSql, note, (err, result) => {
      if (err) {
        console.log("error: ", err);
        createdCallback(err, null);
      } else {
        createdCallback(null, result);
      }
    });
  };

exports.updateNote = (note, noteID, sendNotes) => {

    var sqlString = "UPDATE note SET Topic=?, Description=? WHERE NoteId=?";
    sql.query(sqlString, [note.Topic, note.Description, noteID], (err, result) => {
        if (err) {
            sendNotes(err, null);
            console.log(err);

        } else {
            sendNotes(null, { message: "success" });
        }
    })
};

exports.setArchieveState = (noteID, archieveState, archieveNotes) => {
    var sqlString = "UPDATE note SET isArchived=? WHERE NoteId=?";
    sql.query(sqlString, [archieveState,noteID], (err, result) => {
        if (err) {
            archieveNotes(err, null);
            console.log(err);

        } else {
            archieveNotes(null, { message: "success" });
        }
    });
};

exports.removeNote = (noteId, sendNotes) => {
    var sqlString = "DELETE FROM Note WHERE NoteId=?";
    sql.query(sqlString, [noteId], (err, result) => {
        if (err) {
            sendNotes(err, null);
        } else {
            sendNotes(null, { data: result });
        }
    });
};