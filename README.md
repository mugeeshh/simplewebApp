# simplewebApp
simple node js with docker 

# build along with tag mugeesh
sudo docker build -t  mugeesh/simpleweb:latest .

#Run the docker container 
docker run -p 3000:8080 mugeesh/simpleweb

#check browser
http://localhost:3000/
