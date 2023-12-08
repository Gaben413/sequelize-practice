const {Sequelize, DataTypes} = require('sequelize')
const sequelize = require('./index')

const Cliente = sequelize.define('Cliente', {
    cliente_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    }
})

const Compra = sequelize.define('Compra', {
    compra_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    valor: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    cliente_id: {
        type: DataTypes.INTEGER
    }
})

const Produto = sequelize.define('Produto', {
    produto_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
})

Cliente.hasMany(Compra, {
    foreignKey: 'cliente_id'
})
//Compra.hasOne(Cliente)

Produto.belongsToMany(Compra, {through: 'ProdutoCompra'})
Compra.belongsToMany(Produto, {through: 'ProdutoCompra'})

module.exports = {Cliente, Compra, Produto}