function fetchdata(callback){
    setTimeout(() => {
      let data = [1,2,3,4,5]
      callback(data)
    },2000);
    }
    function processdata(data){
    console.log(data.map((item)=> item*2))
    }
    fetchdata(processdata)