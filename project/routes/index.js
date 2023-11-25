var express = require('express');
var router = express.Router();
var studentschema = require('../module/module1.js');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/details');
var schema = require('../module/module.js');
var aadharschema = require('../module/aadharmodule.js');
var aadhardb = require('../module/aadhardb.js');
var arr1=[];
var aadharfcv= require('../module/aadharfcv.js');
var arr=[];
var aarr=[];
var counta=1;
var count=1;
var count1=1;
router.get('/purchaseaadhar',function(req,res,next){
  res.render('aadharpur',{title:'aadharpurchase'})
})
router.get('/purchasedetails',function(req,res,next){
  res.render('purchasedetails',{title:'purchasedetails'});
})
router.get('/avail',function(req,res,next) {
  res.render('history',{title:'express'});
});
router.get('/historynf',function(req,res,next){
  res.render('availb',{title:'express'});
})
router.get('/date',function(req,res,next){
  res.render('reportnonfcv',{title:'express'});
})
router.get('/reportnfcv',function(req,res,next){
  res.render('report',{title:'express'});
});
router.get('/nfpurchase',function(req,res,next){
  res.render('purchasenon',{title:'aadhar purchase'})
})
router.get('/tobacco',function(req,res,next){
  res.render('fnf',{title:'tobacco'})
});
router.get('/nonfcv',function(req,res,next){
  res.render('nonfcv',{title:'nonfcv'})
});
router.get('/login',function(req,res,next){
  res.render('login',{title:'express'});
});
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/home',function(req,res,next){
  res.render('home',{title:'home'});
});
router.get('/fcv_seed',function(req,res,next) {
  res.render('fcv_seed',{title:'fcv_seed'});
})
router.get('/fcv_user',function(req,res,next){
  res.render('FCV_users_doc',{title:'FCV_users_doc'})
});
router.get('/reportsdate',function(req,res,next){
  res.render('reportdate',{title:'reports'})
});
router.get('/purchase',function(req,res,next){
  res.render('purchase',{title:'Payments'})
});
router.get('/senddata',function(req,res){ 
  studentschema.find({},function(err,data){
    if(data){
      res.send(data);
    }
    else{
      res.send(err);
    }
  })
});
router.post('/number',function(req,res){
  studentschema.find({'TBGRNO':req.body.tbgrno},function(err,data){
    if(data){
      res.send(data);
    }else{
      res.send(err);
    }
  })
});
router.post('/purdataa',function(req,res){
  counta=req.body.count;
  aarr[counta]=req.body;
  
});
router.post('/purdata',function(req,res){
  count=req.body.count;
  arr[count]=req.body;
  
});
router.post('/savee',function(req,res){
  for(let x=1;x<=req.body.count;x++){
     var sche = new schema({
      tbgrno:aarr[x].aadhar,
      seedname:aarr[x].seedname,
      quantities:aarr[x].qun,
      cost:aarr[x].kgs,
      total:aarr[x].total,
      date:aarr[x].date
     })
     sche.save(function(err,data){
     });
  }
});
router.post('/save',function(req,res){
  for(let x=1;x<=req.body.count;x++){
     var sche = new schema({
      tbgrno:arr[x].tbgrno,
      seedname:arr[x].seedname,
      quantities:arr[x].qun,
      cost:arr[x].kgs,
      total:arr[x].total,
      date:arr[x].date
     })
     sche.save(function(err,data){
     });
  }
});

router.post('/search',function(req,res){
  schema.find({'tbgrno':req.body[0].TBGRNO}).sort({TBGRNO:1}).exec(function(err,data){
    if(data){
      //console.log(data);
      res.send(data);
    }
    else{
      res.send(err);
    }
  })
})
router.post('/searchh',function(req,res){
  schema.find({'tbgrno':req.body[0].aadhar}).sort({TBGRNO:1}).exec(function(err,data){
    if(data){
      //console.log(data);
      res.send(data);
    }
    else{
      res.send(err);
    }
  })
})


router.post('/date',function(req,res){
  schema.find({
    'date':{
      $gte : req.body.start,
      $lte: req.body.end,
    }
  },function(err,data){
    if(data){
      res.send(data);
    }
    else{
      res.send(err);
    }
  })
});

router.get('/getdata',function(req,res){
  schema.find({}).sort({TBGRNO:1}).exec(function(err,data){
    if(data){
      res.send(data);
    }
    else{
      res.send(err);
    }
  })
});


router.post('/aadhar',function(req,res){
  aadharschema.find({aadhar:req.body.number},function(err,data){
    if(data){
      res.send(data);
    }else{
      res.send(err);
    }
  })
});

router.post('/npurchase',function(req,res){
 /* console.log(req.body.count);
  arr1[req.body.count]=req.body;
  for(let x in arr){
    console.log(arr[x]);
  }*/
  count1=req.body.count;
  arr1[count1]=req.body;
});
router.post('/savenf',function(req,res){
  for(let x=1;x<=req.body.count;x++){
    var aadhard = new aadhardb({
      aadhar:arr1[x].aadhar,
      seedname:arr1[x].seedname,
      date:arr1[x].date,
      quantities:arr1[x].qun,
      kgs:arr1[x].kgs,
      total:arr1[x].total
    })
    aadhard.save(function(err,data){
      
    })
  }
});
router.get('/getnf',function(req,res){
  aadhardb.find({},function(err,data){
    if(data){
      //console.log(data);
      res.send(data);
    }
    else{
      res.send(err);
    }
  })
});
router.post('/postnf',function(req,res){
  aadhardb.find({
    'date':{
      $gte:req.body.start,
      $lte:req.body.end
    }
  },function(err,data){
    if(data){
      res.send(data);
    }else{
      res.send(err);
    }
  })
})
router.post('/searching',function(req,res){
  aadhardb.find({'aadhar':req.body[0].aadhar},function(err,data){
    if(data){
      res.send(data);
    }
    else{
      res.send(err);
    }
  })
});
router.post('/aadharsend',function(req,res){
  aadharfcv.find({'aadhar':req.body.number},function(err,data) {
    console.log(data)
    res.send(data)
  });
});



router.get('/senddd',(req,res)=>{
  res.send(req);
})
module.exports = router;
