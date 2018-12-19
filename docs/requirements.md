---
layout: docs
title: Requirements
order: 20
---

- [node.js 8+](https://nodejs.org/en)
- [PHP 7](http://php.net) - Just need the `php` cli; not the ability to serve full php sites (aka PHP CGI nor Apache needed)


### Hosting & Deployment

Bedrock is a powerful API-first design system builder, and is not a static site, so it needs a bit more than your classic design system hosting.

Bedrock is most easily hosted by a Docker container and we have a [Bedrock Docker on Docker Hub](https://hub.docker.com/r/basaltinc/bedrock) ready to use. Deployment using anything that can deploy Docker is setup by having a `Dockerfile` with this:

```
FROM basaltinc/bedrock:latest
WORKDIR /app
COPY . .
EXPOSE 3999
RUN npm install
RUN npm run build

CMD npm run serve
```

Docker is **not required to run this**, and in fact most devs (and servers!) should be able to run this all with a simple `npm start`. The reason a Docker container is suggested is that most hosting for Node.js server's do not include the `php` command line; which is used for the Twig Renderer. If you're not using that template renderer, then you'll be able to just use a Node.js server. Any server with the above requirements of node 8+ and php 7+ cli should be good to go!

#### Easy hosting with now.sh

A great hosting provider is [now.sh](https://zeit.co/now); make an account then add a `now.json` with the below contents (after setting `name` and `alias`):

```json
{
  "name": "crux",
  "alias": "design.basalt.io",
  "version": 1,
  "type": "docker",
  "scale": {
    "sfo1": {
      "min": 1,
      "max": 1
    }
  },
  "features": {
    "cloud": "v1"
  }
}
```

Then to deploy, run:

```bash
now deploy
now alias
```

You can see a real example with how [Basalt](https://basalt.io) deploys our Design System, Crux, build on Bedrock:

- [Repo here](https://github.com/basaltinc/crux/)
  - [`Dockerfile`](https://github.com/basaltinc/crux/blob/master/Dockerfile)
  - [`.travis.yml`](https://github.com/basaltinc/crux/blob/master/.travis.yml)
- Site deployed to: <https://design.basalt.io>
