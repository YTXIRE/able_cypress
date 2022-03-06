FROM ubuntu/apache2:latest

RUN apt-get update -y && apt-get upgrade -y && apt-get install -y nodejs npm libgtk2.0-0  \
    libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb

WORKDIR /app

RUN chmod 777 /app

COPY package.json ./
COPY package-lock.json ./

RUN npm i

COPY . .

CMD npm run test