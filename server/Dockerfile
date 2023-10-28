FROM node:18 as base

# create app directory
WORKDIR  /app

# install app depentancies
COPY  package*.json ./

# npm install 
RUN npm install 

#bundle app source 
COPY  . .

# envirionment

RUN npm run build

# port
EXPOSE 4000

# execute command

CMD [ "npm","start" ]