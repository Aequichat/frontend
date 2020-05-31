module.exports = {
    API_PORT: process.env.PORT || 3000,
    DB_ENDPOINT: process.env.DB_ENDPOINT || 'cluster0-53wsc.mongodb.net',
    DB_USERNAME: process.env.DB_USERNAME || 'globhack',
    DB_PASSWORD: process.env.DB_PASSWORD || 'globhack',
    DB_NAME: process.env.DB_NAME || 'globhack-dev',
    CORS_ORIGINS: [
        'http://localhost:4200',
        'https://aequichatglobhack.herokuapp.com/'
    ],
    emailAuth: {
        address: process.env.EMAIL_ADDRESS || 'jose42829@gmail.com',
        password: process.env.EMAIL_PASSWORD || 'luakhdgrcwdfgqqd',
    },
};
