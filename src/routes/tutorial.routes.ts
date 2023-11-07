import { Router } from "express";
import TutorialController from "../controllers/tutorial.controller";

class TutorialRoutes {
  router = Router();
  controller = new TutorialController();

  constructor() {
    this.initializeRoutes();
  }

  initializeRoutes() {
    // create a new tutorial
    this.router.post("/", this.controller.create);

    // Retrieve all tutorials
    this.router.get("/", this.controller.findAll);

    // Retrieve a single tutorial with id
    this.router.get("/:id", this.controller.findOne);

    // Update a tutorial with id
    this.router.put("/:id", this.controller.update);

    // Delete a tutorial with id
    this.router.delete("/:id", this.controller.delete);
  }
}

export default new TutorialRoutes().router;
