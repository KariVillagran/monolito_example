const dataService = require('../services/dataService');

async function getData(req, res) {
    try {
        const clientType = req.query.client || (req.headers['user-agent'].includes('Mobile') ? 'mobile' : 'web');
        const data = await dataService.getData();

        // Personalizar respuesta según el cliente
        let transformedData;
        if (clientType === 'web') {
            transformedData = data.map(item => ({
                id: item.id,
                title: item.title,
                content: item.content,
                image: item.imageUrl
            })).slice(0, 150); // Contenido completo para web
        } else {
            transformedData = data.map(item => ({
                id: item.id,
                title: item.title,
                summary: item.content,
                image: item.thumbnailUrl // Imagen pequeña para móviles
            })).slice(0, 50); // Contenido resumido para mobile
        }

        res.json(transformedData);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching data' });
    }
}

module.exports = { getData };