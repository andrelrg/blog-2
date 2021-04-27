import faunadb, { query as q } from 'faunadb';

export default class Fauna {
    constructor(){
        this.collection = null
        let secret = process.env.FAUNADB_SECRET || 'fnAEHqTsFJACAof9Wih7ohb6GwTSxFmtMDlgJ48Q'
        this.client = new faunadb.Client({ secret: secret })
    }

    checkCollection(){
        if (this.collection == null){
            throw Error('collenction should be defined')
        }
    }

    async CreateCollection(){
        this.checkCollection()
        return await this.client.query(
            q.CreateCollection({ name: this.collection })
        )
       
    }

    async CreateIndex(name, terms, values = []){
        this.checkCollection()
        return await this.client.query(
          q.CreateIndex({
            name: name,
            source: q.Collection(this.collection),
            terms: terms,
            values: values,
          })
        )
       
    }

    async Insert(data){
        this.checkCollection()
        return await this.client.query(
            q.Create(q.Collection('posts'), { data: data })
        )
        
    }

    async Select(index, filter){
        this.checkCollection()
        return await this.client.query(
            q.Get(
                q.Match(q.Index(index), filter)
            )
        )
    }

    async Select(index){
        this.checkCollection()
        return await this.client.query(
            q.Get(
                q.Match(q.Index(index))
            )
        )
    }

    async Update(filter, data){
        this.checkCollection()
        return await this.client.query(
            q.Update(
                q.Match(q.Collection(this.collection), filter),
                { data: data },
            )
        )
    }
}