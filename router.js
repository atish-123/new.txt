var accountController=require('./controllers/accountcontroller');
var categoryController=require('./controllers/categorycontroller');
var customerController=require('./controllers/customercontroller');
var deliveryController=require('./controllers/deliverycontroller');
var orderdetailsController=require('./controllers/orderdetailscontroller');
var paymentController=require('./controllers/paymentcontroller');
var productController=require('./controllers/productcontroller');
var shipperController=require('./controllers/shippercontroller');
var supplierController=require('./controllers/suppliercontroller');
var userController=require('./controllers/usercontroller');



module.exports=function(app){
    app.route('/api/accountss')
       .get(accountController.getAll)  
       .post(accountController.insert);
            
    app.route('/api/accounts/:id')
       .delete(accountController.remove)  
       .put(accountController.accountupdate)   
       .get(accountController.getById) ; 

   

  app.route('/api/categories')
     .get(categoryController.getAll)  
     .post(categoryController.insert); 
            
  app.route('/api/categories/:id')
     .delete(categoryController.remove)  
     .put(categoryController.categoriesupdate)   
     .get(categoryController.getById);
       
       
    app.route('/api/customers')
       .get(customerController.getAll)
       .post(customerController.insert);

    app.route('/api/customers/:id')
       .delete(customerController.remove)  
       .put(customerController.categoriesupdate)   
       .get(customeryController.getById) ; 
     
    app.route('/api/deliveries')
       .get(deliveryController.getAll)
       .post(deliveryController.insert);

    app.route('/api/deliveries/:id')
       .delete(deliveryController.remove)  
       .put(deliveryController.categoriesupdate)   
       .get(deliveryController.getById); 

    app.route('/api/orderdetails')
       .get(orderdetailsController.getAll)
       .post(orderdetailsController.insert);

    app.route('/api/orderdetails/:id')
       .delete(orderdetailsController.remove)  
       .put(orderdetailsController.categoriesupdate)   
       .get(orderdetailsController.getById);


   app.route('/api/payments')
      .get(paymentController.getAll)
      .post(customerController.insert);

   app.route('/api/payments/:id')
      .delete(customerController.remove)  
      .put(customerController.categoriesupdate)   
      .get(customeryController.getById) ; 

};




