# Weather-application

Application built for Docker course's final project

## Changes to original version

In this version user is able to search for any city and see it's weather. Also the project is updated to react and react-dom to version 16.12.0.

## Pulling the application

First you should have Docker installed. Clone this repository and build the docker images.

### Building images

You need to build two images. Dockerfiles lay in frontend and backend directories.
```
docker build -t <image-name> <Path where dockerfile lays>  
```

## Deployment to minikube

This application can be deployed to minikube using kubernetes. See deployment for notes on how to deploy the project on your system.

### Prerequisites

#### Installing kubernetes on ubuntu
```
curl -s https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo apt-key add -
sudo touch /etc/apt/sources.list.d/kubernetes.list
echo "deb http://apt.kubernetes.io/ kubernetes-xenial main" | sudo tee -a /etc/apt/sources.list.d/kubernetes.list
sudo apt-get update○sudoapt-get install-y kubectl socat
```

#### Starting minikube vm
```
sudo minikube start --vm-driver=none
```

#### To access dashboard
```
sudo minikube dashboard
kubectl port-forward -n kubernetes-dashboard service/kubernetes-dashboard --address 0.0.0.0 <port>:80
```

#### Deployment
```
kubectl run <name> --image=<image-name>:<image-tag>
kubectl port-forward service/<name> --address 0.0.0.0 <port>:<external-port>
```

### Using it

Now you should be able to access the application in http://localhost:port
