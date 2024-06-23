const Hapi = require('@hapi/hapi')
const routes = require('./routes')

async function init() {
    const server = Hapi.server({
        port: 8000,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['*']
            }
        }
    })

    server.route(routes)
    await server.start()
    console.log(`Server berjalan pada ${server.info.uri}`)
}

init()