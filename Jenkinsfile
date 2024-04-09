pipeline {
    agent any
    
    environment {
        NVM_DIR = "$HOME/.nvm"
    }
    
    stages {
        stage('Preparation') {
            steps {
                sh '''
                curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
                . "$HOME/.nvm/nvm.sh"
                '''
            }
        }
        
        stage('Debugging') {
            steps {
                // Add debugging steps here if needed
                echo 'Debugging stage'
            }
        }
    }
    
    post {
        always {
            deleteDir()
        }
    }
}