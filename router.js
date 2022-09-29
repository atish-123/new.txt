var accountController=require('./controllers/accountcontroller');
var categoryController=require('./controllers/categorycontroller');
var customerController=require('./controllers/customercontroller');
var deliveryController=require('./controllers/deliverycontroller');
var orderdetailsController=require('./controllers/orderdetailscontroller');
var orderController=require('./controllers/ordercontroller');
var paymentController=require('./controllers/paymentcontroller');
var productController=require('./controllers/productcontroller');
//var shipperController=require('./controllers/shippercontroller');
var supplierController=require('./controllers/suppliercontroller');
var userController=require('./controllers/usercontroller');



module.exports=function(app){
     app.route('/api/accountss')
       .get(accountController.getAll)  
       .post(accountController.insert);
            
    app.route('/api/accounts/:id')
       .delete(accountController.remove)  
       //.put(accountController.accountsupdate)   
       .get(accountController.getById); 

   

  app.route('/api/categories')
     .get(categoryController.getAll)  
     .post(categoryController.insert); 
            
  app.route('/api/categories/:id')
     .delete(categoryController.remove)  
     //.put(categoryController.categoriesupdate)   
     .get(categoryController.getById);
       
       
    app.route('/api/customers')
       .get(customerController.getAll)
       .post(customerController.insert);

    app.route('/api/customers/:id')
       .delete(customerController.remove)  
       //.put(customerController.customersupdate)   
       .get(customerController.getById); 
     
    app.route('/api/deliveries')
       .get(deliveryController.getAll)
       .post(deliveryController.insert);

    app.route('/api/deliveries/:id')
       .delete(deliveryController.remove)  
       //.put(deliveryController.deliveriesupdate)   
       .get(deliveryController.getById); 

    app.route('/api/orderdetails')
       .get(orderdetailsController.getAll)
       .post(orderdetailsController.insert);

    app.route('/api/orderdetails/:id')
       .delete(orderdetailsController.remove)  
       //.put(orderdetailsController.ordersetailsupdate)   
       .get(orderdetailsController.getById);

    app.route('/api/orders')
       .get(orderController.getAll)
       .post(orderController.insert);

    app.route('/api/orders/:id')
       .delete(orderController.remove)  
       //.put(orderController.ordersupdate)   
       .get(orderController.getById);



   app.route('/api/payments')
      .get(paymentController.getAll)
      .post(paymentController.insert);

   app.route('/api/payments/:id')
      .delete(paymentController.remove)  
      //.put(paymentController.paymentsupdate)   
      .get(paymentController.getById);

   app.route('/api/products')
      .get(productController.getAll)
      .post(productController.insert);

   app.route('/api/products/:id')
      .delete(productController.remove)  
      //.put(productController.productsupdate)   
      .get(productController.getById);

 /*  app.route('/api/shippers')
      .get(shipperController.getAll)
      .post(shipperController.insert);

   app.route('/api/shippers/:id')
      .delete(shipperController.remove)  
      .put(shipperController.shippersupdate)   
      .get(shipperController.getById);*/

   app.route('/api/suppliers')
      .get(supplierController.getAll)
      .post(supplierController.insert);

   app.route('/api/suppliers/:id')
      .delete(supplierController.remove)  
      //.put(supplierController.suppliersupdate)   
      .get(supplierController.getById);

   app.route('/api/users')
      .get(userController.getAll)
      .post(userController.insert);

   app.route('/api/users/:id')
      .delete(userController.remove)  
      //.put(userController.usersupdate)   
      .get(userController.getById);

};




