pipeline {
  agent any
//   agent { docker { image 'bmanning1/todo-ui' } }

  tools {
      nodejs "NodeJS 14"
  }

  stages {
    stage('Cloning git') {
      steps {
        echo 'Cloning repo from git **********'
        // git 'https://github.com/bmanning1/todo-ui.git'
        sh 'ls'
      }
    }

    stage('Install') {
      steps {
        echo 'Installing packages **********'
        sh 'npm install'
      }
    }

    stage('Build') {
      steps {
        echo 'Building **********'
        sh 'npm run build'
      }
    }
  }
}