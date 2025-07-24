# Enable BuildKit for docker builds
export DOCKER_BUILDKIT=1

.PHONY: deploy-prod deploy-local deploy-ckqa help verify-local-context verify-prod-context verify-ckqa-context create-prod-secrets

# Default target when just 'make' is run
help:
	@echo "Available targets:"
	@echo "  deploy-local        - Deploy to local Kind cluster"
	@echo "  deploy-prod         - Deploy to production environment"
	@echo "  deploy-ckqa         - Deploy to AWS CKQA environment"

# Helper functions to verify kubectl context
verify-local-context:
	@if ! kubectl config current-context | grep -q "kind-"; then \
		echo "Error: Wrong kubectl context!"; \
		echo "Current context: $$(kubectl config current-context)"; \
		echo "Expected: A Kind cluster context (should contain 'kind-')"; \
		echo "To switch context, run:"; \
		echo "  kubectl config get-contexts"; \
		echo "  kubectl config use-context <kind-context-name>"; \
		exit 1; \
	fi

verify-prod-context:
	@if ! kubectl config current-context | grep -q "ck-aws-prod"; then \
		echo "Error: Wrong kubectl context!"; \
		echo "Current context: $$(kubectl config current-context)"; \
		echo "Expected: Production cluster context (should contain 'ck-aws-prod')"; \
		echo "To switch context, run:"; \
		echo "  kubectl config get-contexts"; \
		echo "  kubectl config use-context <prod-context-name>"; \
		exit 1; \
	fi

verify-ckqa-context:
	@if ! kubectl config current-context | grep -q "ck-qa"; then \
		echo "Error: Wrong kubectl context!"; \
		echo "Current context: $$(kubectl config current-context)"; \
		echo "Expected: AWS CKQA cluster context (should contain 'ck-qa')"; \
		echo "To switch context, run:"; \
		echo "  kubectl config get-contexts"; \
		echo "  kubectl config use-context <prod-context-name>"; \
		exit 1; \
	fi

# Common deployment logic - checks, deletes if exists, and applies
deploy-common:
	@sleep 2
	@echo "Checking if deployment exists in codekarma namespace..."
	@if kubectl get -f k8s-deployment.yaml -n codekarma >/dev/null 2>&1; then \
		echo "Existing deployment found, deleting..."; \
		kubectl delete -f k8s-deployment.yaml -n codekarma; \
		echo "Deployment deleted successfully"; \
	else \
		echo "No existing deployment found, proceeding with fresh installation..."; \
	fi
	@sleep 2
	@echo "Applying new deployment..."
	kubectl apply -f k8s-deployment.yaml -n codekarma
	@echo "ck-website deployed successfully"

# Production deployment
deploy-prod: verify-prod-context deploy-common

# CKQA deployment  
deploy-ckqa: verify-ckqa-context deploy-common

# Local deployment
deploy-local: verify-local-context deploy-common 

