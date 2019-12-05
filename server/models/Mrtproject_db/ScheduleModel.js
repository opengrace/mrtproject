import ScheduleModelGenerated from "./generated/ScheduleModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ScheduleModelGenerated.init();
  
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
      return await ScheduleModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ScheduleModelGenerated,
  ...customModel
};
