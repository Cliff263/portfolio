import devopsAmplify from '/public/image/devops-amplify.jpg';  // Placeholder image for CI/CD to AWS Amplify
import devopsLambda from '/public/image/devops-lambda.jpg';  // Placeholder image for CI/CD to Lambda and S3
import laravelProject from '/public/image/laravel-project.jpg';  // Placeholder image for Laravel project
import awsEks from '/public/image/aws-eks.jpg';  // Placeholder image for AWS EKS and Terraform project

export const projectsData = [
    {
        id: 1,
        name: 'CI/CD Pipeline - Deploying to AWS Amplify',
        description: 'I configured a CI/CD pipeline to automate the deployment of a web application to AWS Amplify. This involved setting up GitHub Actions to trigger automatic builds and deployments on every code push. AWS Amplify was used for hosting the front-end, and the entire process was streamlined with version control and continuous integration.',
        tools: ['GitHub Actions', 'AWS Amplify', 'GitHub', 'AWS S3', 'AWS CloudFront'],
        role: 'DevOps Engineer',
        code: '',
        demo: '',
        image: devopsAmplify,
    },
    {
        id: 2,
        name: 'CI/CD Pipeline with CloudFormation - Deploying Lambda and S3',
        description: 'I developed a CI/CD pipeline using AWS CloudFormation and GitHub Actions to automate the deployment of a serverless application. This included deploying AWS Lambda functions and uploading static files to an S3 bucket. I also used CloudFormation templates to provision and manage the infrastructure as code, ensuring efficient and scalable deployments.',
        tools: ['AWS CloudFormation', 'AWS Lambda', 'AWS S3', 'GitHub Actions', 'CloudWatch', 'API Gateway'],
        role: 'DevOps Engineer',
        code: '',
        demo: '',
        image: devopsLambda,
    },
    {
        id: 3,
        name: 'Performance Appraisal System - PHP Laravel and Tailwind CSS',
        description: 'I built a performance appraisal system using PHP Laravel for the backend and Tailwind CSS for the frontend. The system allows HR teams to evaluate employee performance, generate reports, and manage feedback. Tailwind CSS ensured a modern and responsive UI, while Laravel handled business logic, database management, and security.',
        tools: ['PHP', 'Laravel', 'Tailwind CSS', 'MySQL', 'Docker', 'Nginx'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: laravelProject,
    },
    {
        id: 4,
        name: 'AWS EKS Cluster Setup with Terraform',
        description: 'I provisioned a complete AWS infrastructure using Terraform, including setting up an AWS EKS cluster. This project involved deploying and managing Kubernetes clusters on AWS using EKS, configuring VPC, subnets, security groups, and other networking components. Terraform was used for infrastructure-as-code, making the setup highly reproducible and scalable.',
        tools: ['AWS EKS', 'Terraform', 'AWS VPC', 'ELB', 'EC2', 'IAM', 'Kubernetes'],
        role: 'DevOps Engineer',
        code: '',
        demo: '',
        image: awsEks,
    }
];



// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },