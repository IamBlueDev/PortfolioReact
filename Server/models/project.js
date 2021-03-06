module.exports = (sequelize, type) => {
    return sequelize.define('project', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: type.STRING,
        description:type.STRING,
        content: type.TEXT,
        lang:type.STRING,
        status:type.STRING,
        link:type.STRING,
        logo:type.STRING,
        info:type.STRING,
        live:type.STRING,


    })
}