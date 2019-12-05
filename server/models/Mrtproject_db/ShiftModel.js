import ShiftModelGenerated from "./generated/ShiftModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ShiftModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await ShiftModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ShiftModelGenerated,
  ...customModel
};
