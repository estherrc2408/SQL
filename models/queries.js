const queries={
    //authors
    getAuthorsByEmail:
    `SELECT name,surname,email,image
    FROM authors
    WHERE a.email=$1;`
    ,
    getAllAuthors:
    `SELECT name,surname,email,image FROM authors`
    ,
    createAuthor:
    `INSERT INTO authors(name,surname,email,image)
    VALUES($1,$2,$3,$4);`
    ,
    updateAuthorByEmail:
    `UPDATE authors
    SET (name,surname,image) = ($1,$2,$3,$4)
    WHERE email=$3;`
    ,
    deleteAuthorByEmail:
    `DELETE FROM authors WHERE email=$1;`
    ,
    //entries
    getEntriesByEmail:`
    SELECT e.title,e.content,e.date,e.category,a.name,a.surname,a.image
    FROM entries AS e
    INNER JOIN authors AS a
    ON e.id_author=a.id_author
    WHERE a.email=$1
    ORDER BY e.title;`
}


module.exports=queries