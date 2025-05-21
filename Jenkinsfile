pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = credentials('dockerhub-creds')
        IMAGE_CLIENT = "burakkutluk/ai-client:latest"
        IMAGE_SERVER = "burakkutluk/ai-server:latest"
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/burakkutluk/AI-image-generator.git'
            }
        }

        stage('Build Client') {
            steps {
                sh 'docker build -t $IMAGE_CLIENT ./client'
            }
        }

        stage('Build Server') {
            steps {
                sh 'docker build -t $IMAGE_SERVER ./server'
            }
        }

        stage('Push Images') {
            steps {
                withDockerRegistry([credentialsId: 'dockerhub-creds', url: '']) {
                    sh 'docker push $IMAGE_CLIENT'
                    sh 'docker push $IMAGE_SERVER'
                }
            }
        }

        stage('Sync ArgoCD') {
            steps {
                sh 'curl -X POST http://argocd-server.argocd.svc.cluster.local:8080/api/v1/applications/ai-image-generator/sync'
            }
        }
    }
}
