db.getAllDocs().then((result) => {
    return result.rows.forEach((row) => {
        return db.remove(row.doc);
    });
});