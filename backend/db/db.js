var mongoose=require('mongoose')

mongoose.connect('YOUR MONGODB URL LINK',{ useNewUrlParser: true },{ 
    useUnifiedTopology: true } )

const conn=mongoose.connection

conn.on('connected',()=>{
    console.log('db connects successfully!')
})

//login data
const adminSchema=mongoose.Schema({
    username:{type:String, required:true},
    password:{type:String, required:true}
})

const AdminModel = mongoose.model('user',adminSchema)

exports.AdminModel=AdminModel

//add article
const addArticle= mongoose.Schema({
    title:{type:String,required:true},
    type:{type:String,required:true},
    url:{type:String,required:true},
    url1:{type:String,required:true},
    url2:{type:String,required:true},
    content:{type:String,required:true},
})

const ArticleModel = mongoose.model('article',addArticle)

exports.ArticleModel=ArticleModel