import Sequelize from 'sequelize';
import _ from 'lodash';
import Faker from 'faker';

const Conn = new Sequelize(
    'relay',
    'postgres',
    'postgres', {
        dialect: 'postgres',
        host: 'localhost'
    }
);

const Comment = Conn.define('comment', {
    content: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

Conn.sync({ force: true }).then(() => {
    _.times(10, () => {
        return Comment.create({
            content: Faker.name.content()
        })
    })
});