import { Router } from "express";
//import del service para Courses.
//import CourseService from '../services/filesystem/courses.service.js';
import { getAll, saveCourse } from "../controllers/courses.controller.js";
import { addLogger } from "../config/logger.js";

const router = Router();

router.get("/", addLogger, getAll);

router.post("/", addLogger, saveCourse);

export default router;
