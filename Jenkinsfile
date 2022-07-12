pipeline {
    agent any

    stages {
        stage('Clonar o repositorio') {
            steps {
                git branch: 'main', url: 'https://github.com/programadornovato2021/ui_ebac.git'
            }
       

        stage('Executar Testes') {
            steps {
              bat 'npm install'
            }
            
        }

        stage('Executar Testes') {
            steps {
              bat 'npm run cy:run'
            }
        }
        
        
    }