const http = require('node:http');
const fs = require('node:fs/promises');

const PORT = 3000;

const requestListener = async (req, res) => {
  const { url } = req;

  if(url === '/index.html/'){
    try{
      const data = await fs.readFile('./views/index.html', 'utf-8');
      res.end(data);
    } catch(error){
      res.statusCode = 404;
      res.end(error)
    }
  } else if(url === '/index.html/style.css'){
    try{
      const data = await fs.readFile('./views/style.css', 'utf-8');
      res.end(data);
    } catch(error){
      res.statusCode = 404;
      res.end(error);
    }
  } else{
    res.statusCode = 404;
    res.end();
  }

}

const server = http.createServer(requestListener);

server.listen(PORT);