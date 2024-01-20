import express from "express";
import { courseModels } from "./models/CourseList.js";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.get("/api/courses", (req, res) => {
  res.json(courseModels);
});

// Route to get a specific course by ID
app.get("/api/courses/:id", (req, res) => {
  const courseId = parseInt(req.params.id);
  const course = courseModels.find((c) => c.id === courseId);

  if (!course) {
    return res.status(404).json({ error: "Course not found" });
  }

  res.json(course);
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
