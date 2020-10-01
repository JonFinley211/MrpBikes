module.exports = function(app){
    app.get('/', function(req,res){
        res.send('Hello from simple-react projects');
    });
}