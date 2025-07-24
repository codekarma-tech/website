To deploy 
=========
1. We need to push the image 

docker buildx build --platform linux/amd64,linux/arm64 \
  -t ghcr.io/sabareesh-ckt/ck-website/ck-website:latest \
  --push .


2. Deploy 
Go to the project root folder 
kubectl apply -f k8s-deployment.yaml -n codekarma


3. Remove Deployment 
Go to the project root folder 
kubectl delete -f k8s-deployment.yaml -n codekarma


Additional Info 
----------------
Ensure   ckn-ghcr-secret in codekarma namespace is present else create secret using 
kubectl create secret docker-registry ckn-ghcr-secret --docker-server=ghcr.io --docker-username=sabareesh-ckt --docker-password=<password take from sabu> --docker-email=sabareesh@codekarma.tech --namespace=codekarma