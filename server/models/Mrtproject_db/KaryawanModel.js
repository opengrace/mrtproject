import KaryawanModelGenerated from "./generated/KaryawanModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = KaryawanModelGenerated.init();
  
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
      return await KaryawanModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...KaryawanModelGenerated,
  ...customModel
};
