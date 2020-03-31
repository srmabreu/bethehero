const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('ong_id', ong_id)
            .select('*');

        if (!incident) {
            return response.status(400).json({error: 'Incident not found'});
        }

        return response.json(incident);
    }
}