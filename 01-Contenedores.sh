#Comandos para levantar contenedores
#Autor: Felipe Anaya 


docker run <Imagen del contenedor>
docker run hello-world

docker run  -d -p 8080:80 docker/getting-started || docker container run  -d -p 8080:80 docker/getting-started

docker stop <id> || docker container stop <id>
docker start <id>|| docker container start <id>
docker ps -a || docker container ls -a  #Comando para ver todos los contenedores 

docker rm -fv <id> || docker container rm -fv <id>  #tiene que estar detenido, si le agregas -fv si puede eliminarlo aunq este corriendo

docker container run --name=ubuntu -d ubuntu



 docker container run --name=ubuntu -d ubuntu sleep 3600 #corrimos ubuntu 
  docker exec -it ubuntu bash #entramos a ubuntu





  