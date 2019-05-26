db.getAllDocs().then((result) => {
    return result.rows.map((row) => {
        return db.remove(row.doc);
    });
});