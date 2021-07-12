const req01 = function(url, callback){      // req01: db.query, $.ajax 와 유사
    console.log('req01 [' + url + ']');
    setTimeout(function(){
        const resp = {
            data: "Hello World"
        }
        callback(resp);
    }, 3000);
}

req01("http://www.kickscar.com/api", function(response){
    console.log(response);
});