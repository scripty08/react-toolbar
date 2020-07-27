import { Server, IndexController } from '@scripty/server';
import dotenv from 'dotenv'

const init = async () => {
    dotenv.config();

    let server = new Server();
    await server.addController(new IndexController({ title: '@scripty/react-toolbar' }));
    server.start(3015);
};

init().catch((err) => {
    console.error(err.message);
});
