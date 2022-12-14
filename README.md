# Second Profit - User Tracking

Second Profit  - User Tracking task

## Table of content

- [Second Profit - User Tracking](#second-profit---user-tracking)
  - [Table of content](#table-of-content)
  - [Development](#development)
    - [Prerequisites](#prerequisites)
    - [Configuration](#configuration)
    - [Run instructions](#run-instructions)
  - [Docker instructions](#docker-instructions)
    - [For development](#for-development)
    - [For production](#for-production)
    - [Helpful commands](#helpful-commands)

## Development

### Prerequisites

- Node.js v16.13.1 or higher
- Postgresql v15.1 or higher
- Yarn v1.22.15 or higher

### Configuration

Copy [example.dev.env](./example.dev.env) to dev.env and adapt you variables if needed

- Database (Postgresql)

```env
POSTGRES_USER=${USER}
POSTGRES_PASSWORD=${PASSWORD}
POSTGRES_DATABASE=${DATABASE}
POSTGRES_PORT=${PORT}
POSTGRES_HOST=${HOST}
```

- Ports

```env
NODE_PORT=${PORT}
```

- Tokens

```env
IP_STACK_TOKEN=${TOKEN}
```

### Run instructions

- Install the dependencies of server

```sh
cd server
yarn
```

- You need to load env variables for the server from dev.env

```sh
# For windows (use Gitbash)
set -a && source ../dev.env && set +a

# For linux
source ../dev.env

```

- Run the server

```sh
yarn start
```

- Verify - endpoints

```sh
# / Is the main route - will fetch user env and save it
get /
# /user/env - will return user env as json
get /user/env
```

## Docker instructions

### For development

- Copy [example.dev.env](./example.dev.env) to .env and adapt you variables [See configuration section](#configuration)

- To run docker-compose file

```sh
docker-compose -f docker-compose.dev.yml --env-file .env up -d
```

### For production

- Copy [example.env](./example.env) to .env and adapt you variables [See configuration section](#configuration)

- Build and Publish server image

```sh
cd server
make build
make publish
```

- Test it

```sh
docker-compose -f docker-compose.yml --env.file .env up -d
```

### Helpful commands

- To connect to it server's or client's terminal

```sh
docker-compose -f docker-compose.dev.yml --env-file dev.env exec server /bin/bash
```

- Verify logs file for the server or client

```sh
docker-compose -f docker-compose.dev.yml --env-file dev.env logs server
```
