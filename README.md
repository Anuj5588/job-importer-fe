## Project Overview

The **Job Importer Frontend** is part of a full-stack system designed to support a **scalable job import pipeline with queue-based background processing and import history tracking**.

This application serves as an **admin UI** built with **Next.js**, allowing users to monitor and visualize job import operations executed by the backend system. The backend fetches job data from multiple external job feed APIs (XML format), processes them asynchronously using **Redis + BullMQ**, and stores the results in **MongoDB** using efficient upsert logic.

The frontend focuses on presenting **import history and statistics**, including:
- Total jobs fetched per import run  
- Number of new jobs created  
- Number of jobs updated  
- Number of failed records with error reasons  

## Folder Structure

job-importer-fe/
├─ app/ # Next.js App Router directory
├─ public/ # Static assets
├─ styles/ # Global styles
├─ .gitignore
├─ next.config.mjs
├─ package.json
└─ README.md

## Prerequisites

Make sure you have the following installed:

- **Node.js** (v20 or newer)  
- **npm** (v9 or newer)  
- **Docker** (optional, only if using Docker)  

## 1. Clone the repository

git clone https://github.com/Anuj5588/job-importer-fe.git
cd job-importer-fe

## 2.Install dependencies
npm install

## 3.Start the development server
npm run dev
## 4. Builds the app for production
npm run build

## 5.Starts the production server
 npm start

