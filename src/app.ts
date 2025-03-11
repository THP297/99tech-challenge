import express, { Request, Response } from 'express';
import sequelize from './models/db';
import resourceRoutes from './routes/resourceRoutes';

const app = express();
app.use(express.json());

app.use('/api/resources', resourceRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

sequelize.sync().then(() => {
  console.log("Database synced!");
});
