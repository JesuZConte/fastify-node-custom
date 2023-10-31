if(!process.env.POSTGRES_URI) {
    process.env.POSTGRES_URI = 'postgres://postgres:password@localhost:5332/db'
}