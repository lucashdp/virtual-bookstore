const booksRoutes = require('./books_routes');
const authorsRoutes = require('./authors_routes');
const ordersRoutes = require('./orders_routes');
const publishersRoutes = require('./publishers_routes');
const usersRoutes = require('./users_routes');
module.exports = function (app, db) {
  booksRoutes(app, db);
  authorsRoutes(app, db);
  ordersRoutes(app, db);
  publishersRoutes(app, db);
  usersRoutes(app, db);
};