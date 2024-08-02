const https = require('https');

exports.getAPI = (urlEndPoint) => {
    return new Promise((resolve, reject) => {
        const options = {
            hostname: 'fakestoreapi.com',
            port: 443,
            path: urlEndPoint,
            method: 'GET',
            headers: {
                'User-Agent': 'node.js'
            }
        };

        const request = https.request(options, (resp) => {
            let data = '';

            // A chunk of data has been received.
            resp.on('data', (chunk) => {
                data += chunk;
            });

            // The whole response has been received.
            resp.on('end', () => {
                try {
                    const parsedData = JSON.parse(data);
                    resolve(parsedData);
                } catch (error) {
                    reject(error);
                }
            });
        });

        request.on('error', (error) => {
            reject(error);
        });

        request.end();
    });
}
