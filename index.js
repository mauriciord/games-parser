const fs = require('fs');
const requester = require('request');
const cheerio = require('cheerio');
const fastify = require('fastify')();

fastify.get('/', function (request, reply) {
  // reply.send({ hello: 'world' })

  requester('https://www.hltv.org/matches', (error, response, html) => {

    // First we'll check to make sure no errors occurred when making the request

    if (!error) {
      // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality

      const $ = cheerio.load(html);

      // Finally, we'll define the variables we're going to capture

      let title, release, rating;
      const json = { title: "", release: "", rating: "" };

      $('.match-day').filter(function () {

        // Let's store the data we filter into a variable so we can easily see what's going on.

        const data = $(this);

        console.log(data);

      })
    } else {
      console.log(error)
    }
  })
})

fastify.listen(3000, function (err) {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})