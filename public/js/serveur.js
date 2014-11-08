var express= require('express');
var app= express();

var js = document.createElement("script");
js.type = "text/javascript";
js.src = "db.js";

var data= [
 {'id': '1','nom': 'Annick', 'image': 'static/img/annick.jpg','mac':'124.454.245','lieu':'ValFleury','state':'DISCONNECTED','nbF':'2'},
 {'id': '2','nom': 'Annegrete', 'image': 'static/img/annegrete.jpg','mac':'524.888.247','lieu':'Landerneau','state':'OFF','nbF':'3'},
 {'id': '3','nom': 'Agathe', 'image': 'static/img/agathe.jpg','lieu':'NullePart','mac':'136.781.245','state':'FREE','nbF':'1'},
 {'id': '4','nom': 'Antoinette', 'image': 'static/img/antoinette.jpg','mac':'777.454.458','lieu':'Quimper','state':'TAG','nbF':'2'},
 {'id': '5','nom': 'Augustine', 'image': 'static/img/augustine.jpg','mac':'444.111.245','lieu':'Brest','state':'FREE','nbF':'3'}
 ];

app.get('/', function(req, res){
  console.log('envoi de lacceuil ');
  res.sendFile(__dirname+'/index.html');  
});

app.get('/data', function(req, res){
	console.log('envoi des données json ');
	res.json(data);	
});

app.get('/detail/:id',function(req,res){
	console.log('envoi des détail de la table '+req.param('id'));
	res.json(data[req.param('id')-1]);
});

app.use(express.static(__dirname + '/public'));
app.listen(3000);