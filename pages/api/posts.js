import Posts from '../../lib/models/posts'

export default async function getAllPosts(req, res) {
    try {
        if (req.method != 'GET') {
            res.status(405).json({message: 'Method not allowed'})
        }
        const p = new Posts()
        let ret = await p.GetAllPosts()

        ret = ret.map(async post => {
            const avatar_url = await getSrc(post.author);
            return {
                avatar_url,
                ...post
            };
        });

        (async () => {
            const r = await Promise.all(ret);
            res.json(r)          
        })();
        
        


    }catch (error) {
        res.status(500).json({'teste': error.message });
        return; 
    }
} 

async function getSrc(author){
    const res = await fetch("https://api.github.com/users/" + author)
    const resJson = await res.json()
    return resJson.avatar_url
}