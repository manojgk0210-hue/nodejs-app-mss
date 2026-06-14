const scanner = require('sonarqube-scanner');

scanner.default({
  serverUrl: 'http://3.111.30.242:9000/',
  options: {
    'sonar.projectDescription': 'This is a Node JS application',
    'sonar.projectName': 'Node JS Application - Sample',
    'sonar.projectKey': 'NodeJsMSS',
    'sonar.token': 'squ_d9c9946a0c6fd9b02a0caeb93a38c1e174c4f360',
    'sonar.projectVersion': '1.0',
    'sonar.sources': '.'
  }
}, () => {});
