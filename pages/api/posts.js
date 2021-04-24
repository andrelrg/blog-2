import faunadb, { query as q } from 'faunadb';

export default async  function getAllPosts(req, res) {
    const { FAUNADB_SECRET: secret } = process.env;

    let client;
    console.log(process.env);

    if (secret) {   
        client = new faunadb.Client({ secret });
    }
    let collections = [];
    
    if (req.method != 'GET') {
        res.status(405).json({message: 'Method not allowed'})
    }
    try {
        if (!client) {
            return res.status(500).json({ error: new Error('Missing secret to connect to FaunaDB') });
        }
    
        await client
        .paginate(q.Collections())
        .map(ref => q.Get(ref))
        .each(page => {
            collections = collections.concat(page);
        });
    }catch (error) {
        res.status(500).json({ error });
    }
    

    res.json({ collections });

} 
