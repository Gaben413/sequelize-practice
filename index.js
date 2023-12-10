require('dotenv').config()
const { Sequelize } = require('sequelize');

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: 'mariadb',
  port: process.env.PORT
});

(async () =>{
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        const {Cliente, Compra, Produto, ProdutoCompra} = require('./models')

        await sequelize.sync({alter:true})
        /*
        const produto1 = await Produto.create({
            nome: 'Faca',
            preco: 25
        })
        const produto2 = await Produto.create({
            nome: 'Panela',
            preco: 56
        })
        */
        /*
        const compra = await Compra.create({
            valor: 50.25,
            cliente_id: 6
        })
        

        const produtoCompra1 = await ProdutoCompra.create({
            ProdutoProdutoId: 1,
            CompraCompraId: 5
        })
        const produtoCompra2 = await ProdutoCompra.create({
            ProdutoProdutoId: 2,
            CompraCompraId: 5
        })

        
        const cliente = await Cliente.create({
            nome: 'John Doe 5'
        })

        console.log(cliente)

        const compra = await Compra.create({
            valor: 50.25,
            cliente_id: cliente['cliente_id']
        })
        */
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})();

module.exports = sequelize;