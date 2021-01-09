--user table
INSERT INTO User (Name, Password)
VALUES('hasini','1234');

INSERT INTO User (Name, Password)
VALUES('sonali','1234');

--Note table
INSERT INTO Note ( CreatedBy, CreatedDate, isArchived , Topic, Description)
VALUES( 1, DATE '2019-8-17', false, 'interview', 'how to preapre for interviews');

INSERT INTO Note (CreatedBy, CreatedDate, isArchived , Topic, Description)
VALUES( 2, DATE '2019-8-17', false, 'interview', 'how to preapre for interviews');

INSERT INTO Note ( CreatedBy, CreatedDate, isArchived , Topic, Description)
VALUES( 1, DATE '2019-8-17', true, 'interview', 'how to preapre for interviews');
    