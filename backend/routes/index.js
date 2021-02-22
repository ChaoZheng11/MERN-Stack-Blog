var express = require('express');
var router = express.Router();

const {AdminModel, ArticleModel}=require('../db/db');

/* GET home page. */
router.post('/',function(req,res){

  ArticleModel.find(function(err,doc){
    res.send(doc)
    
  })
})



//login
router.post('/login',function(req,res){

  let {username,password}=req.body

  AdminModel.findOne({username,password},function(err,user){
    if(user){
      res.send('success')
    }else{
      res.send('fail')
    }
  })

})

//add articles
router.post('/admin/manage/add',function(req,res){
  let {title,type,content,url,url1,url2}=req.body

  console.log(req.body)

  ArticleModel.findOne({title,content},function(err,doc){
    if(doc){
      res.send('conflict')
    }
    else if(err){
      console.log(err)
    }
    else{
      ArticleModel.create({
        title:title,
        type:type,
        url:url,
        url1:url1,
        url2:url2,
        content:content,

      }, function(err,data){
        if(data){
          res.send('success')
        }
        else{
          res.send('fail')
        }
      })
    }
  })
  
})

//view articles
router.post('/admin/articles',function(req,res){

  ArticleModel.find(function(err,doc){
    res.send(doc)
    
  })
})

router.post('/list',function(req,res){

  ArticleModel.find(function(err,doc){
    res.send(doc)
    
  })
})

router.post('/types',function(req,res){

  ArticleModel.find(function(err,doc){
    res.send(doc)
    
  })
})







module.exports = router;
