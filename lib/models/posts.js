import Fauna from '../database/fauna'

export default class Posts extends Fauna {
    constructor(){
        super()
        this.collection = 'posts'
    }

    async GetAllPosts(){
        const ret = await this.Select('all_posts')
        const data = Array.isArray(ret.data) ? ret.data : [ret.data]
        return data
    }
}