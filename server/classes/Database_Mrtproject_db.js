// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import UserModel from "../models/Mrtproject_db/UserModel";
import KaryawanModel from "../models/Mrtproject_db/KaryawanModel";
import ScheduleModel from "../models/Mrtproject_db/ScheduleModel";
import ShiftModel from "../models/Mrtproject_db/ShiftModel";

// End Import Models

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.mrtproject_db_dbUrl);

    // Start Init Models

		UserModel.init();
		KaryawanModel.init();
		ScheduleModel.init();
		ShiftModel.init();
 // End Init Models
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_mrtproject_db = await mongoose.connect(
        "mongodb://" + properties.mrtproject_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_mrtproject_db;
  }
}

export default new Database();
