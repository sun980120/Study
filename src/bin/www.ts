import App from '../index'
import { AppDataSource } from '../data-source';
import { AuthController } from '../api/auth/auth.controller';
async function startServer() {
    await AppDataSource.initialize().catch((e) => console.log(e)); // Entity의 형식대로 DB 생성
    const app = new App([new AuthController()]);
    app.listen();
}
startServer();