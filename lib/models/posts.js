import Fauna from '../database/fauna'

export default class Posts extends Fauna {
    constructor(){
        super()
        this.collection = 'posts'
    }

    async GetAllPosts(){
        const ret = await this.Select('all_posts')
        const data = []
        ret.data.map(i => data.push(i.data))
        return data
    }
}