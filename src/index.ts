import 'express-async-errors'
import express from 'express'
import { AppDataSource } from './data-source'
import { errorMiddleware } from './middlewares/error'
import userRoutes from './routes/userRoutes'

AppDataSource.initialize().then(() => {
	const app = express()

	app.use(express.json())

	app.use("/api/users", userRoutes);

	app.use(errorMiddleware)

	const PORT = process.env.PORT || 3000;
	//return app.listen(process.env.PORT)
	app.listen(PORT, () => {
		console.log(`Server listening on port: ${PORT}`);
	  });
})
