nodejs-rss-spider
=================

## How to get it working:

**Install Node.js**

**Install MongoDB, make sure mongod runs on default port (localhost:27017)**

**Install the following npm packages:**
```sh
        npm install -g bower
        npm install -g grunt-cli
```

**Install dependencies:**
```sh
npm install
bower install
```

**Run local server which will launch a nodejs server on port 3000:**
```sh
grunt server
```

##Using the API to crawl RSS feeds

Post a JSON to localhost:3000/crawl, using the following structure:

```
{
	"url": "http://rss.cnn.com/rss/edition.rss"
}
```