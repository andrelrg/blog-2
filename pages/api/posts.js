import Posts from '../../lib/models/posts'

export default async  function getAllPosts(req, res) {
    try {
        if (req.method != 'GET') {
            res.status(405).json({message: 'Method not allowed'})
        }
        const p = new Posts()
        await p.GetAllPosts()
        .then((ret) => res.json({ data: ret }))
        
    }catch (error) {
        res.status(500).json({'teste': error.message });
        return; 
    }
} 


