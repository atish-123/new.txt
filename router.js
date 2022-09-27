var categoryController=require('./controllers/categorycontroller');

//HTTP request mapping is done using routing technique
module.exports=function(app){
   /*  app.route('/api/accountss')
       .get(accountController.getAll)  
       .post(accountController.insert) 
            
       app.route('/api/accounts/:id')
             .delete(accountController.remove)  
             .put(accountController.update)   
             .get(accountController.getById)  
*/
    

  app.route('/api/categories')
            .get(categoryController.getAll)  
          /*  .post(accountController.insert) 
            
    app.route('/api/accounts/:id')
             .delete(accountController.remove)  
             .put(accountController.update)   
             .get(accountController.getById)  
             */
};




