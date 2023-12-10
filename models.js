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

const ProdutoCompra = sequelize.define('ProdutoCompra', {
    produto_id: DataTypes.INTEGER,
    compra_id: DataTypes.INTEGER
})

Cliente.hasMany(Compra, {
    foreignKey: 'cliente_id'
})
//Compra.hasOne(Cliente)

Produto.belongsToMany(Compra, {through: ProdutoCompra, foreignKey: 'produto_id'})
Compra.belongsToMany(Produto, {through: ProdutoCompra, foreignKey: 'compra_id'})

module.exports = {Cliente, Compra, Produto, ProdutoCompra}