# CampusBite Deployment Guide

This guide will help you deploy the CampusBite application to Vercel.

## Architecture

- **Frontend**: React app deployed to Vercel
- **Backend**: Node.js API deployed as Vercel serverless functions
- **Database**: MongoDB Atlas (cloud)

## Prerequisites

1. [Vercel Account](https://vercel.com)
2. [MongoDB Atlas Account](https://www.mongodb.com/atlas)
3. GitHub repository

## Local Development Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd campus
   ```

2. **Install dependencies**
   ```bash
   # Frontend dependencies
   npm install

   # Backend dependencies  
   cd server
   npm install
   cd ..
   ```

3. **Environment Setup**
   
   Create `.env.local` in the root directory:
   ```env
   REACT_APP_API_URL=http://localhost:3333
   ```

   Create `server/.env`:
   ```env
   PORT=3333
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_super_secret_jwt_key_here
   NODE_ENV=development
   FRONTEND_URL=http://localhost:3000
   ```

4. **Start development servers**
   ```bash
   # Terminal 1: Start backend
   cd server
   npm start

   # Terminal 2: Start frontend
   npm start
   ```

## Production Deployment on Vercel

### Step 1: Prepare Your Repository

1. Ensure all environment variables are configured properly
2. Test locally to make sure everything works
3. Commit and push your changes to GitHub

### Step 2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your GitHub repository
4. Choose the root directory (where package.json is located)

### Step 3: Configure Environment Variables

In your Vercel project settings, add these environment variables:

#### Frontend Environment Variables:
```
REACT_APP_API_URL = https://your-vercel-app-name.vercel.app
```

#### Backend Environment Variables:
```
MONGODB_URI = your_mongodb_atlas_connection_string
JWT_SECRET = your_super_secret_jwt_key_here_different_from_dev
NODE_ENV = production
FRONTEND_URL = https://your-vercel-app-name.vercel.app
```

### Step 4: MongoDB Atlas Setup

1. **Create MongoDB Atlas Account** (if you don't have one)
   - Go to [mongodb.com/atlas](https://www.mongodb.com/atlas)
   - Sign up for a free account

2. **Create a Cluster**
   - Choose "Build a Database"
   - Select "Free" tier
   - Choose a region close to your users
   - Create cluster

3. **Create Database User**
   - Go to "Database Access"
   - Add a new user with password authentication
   - Give the user "Atlas Admin" or "Read and write to any database" permissions
   - Note down username and password

4. **Configure Network Access**
   - Go to "Network Access" 
   - Add IP Address: `0.0.0.0/0` (allow access from anywhere)
   - **Note**: In production, you should whitelist specific IPs for security

5. **Get Connection String**
   - Go to your cluster and click "Connect"
   - Choose "Connect your application"
   - Copy the connection string
   - Replace `<password>` with your database user's password
   - This is your `MONGODB_URI`

### Step 5: Update Environment Variables

Update your environment variables in Vercel:

1. Go to your Vercel project dashboard
2. Click on "Settings" tab  
3. Click on "Environment Variables"
4. Add the production environment variables listed above

### Step 6: Deploy

1. Vercel will automatically deploy when you push to your main branch
2. You can also trigger manual deployments from the Vercel dashboard
3. Monitor the deployment logs for any issues

### Step 7: Test Your Deployment

1. Visit your Vercel app URL
2. Test user registration (both student and canteen worker)
3. Test login functionality
4. Verify role-based routing works
5. Test the canteen dashboard features

## Troubleshooting

### Common Issues:

1. **CORS Errors**
   - Make sure `FRONTEND_URL` in backend matches your Vercel deployment URL
   - Check that API calls use the correct API URL

2. **Database Connection Issues**  
   - Verify MongoDB connection string is correct
   - Check that database user has proper permissions
   - Ensure network access is configured correctly

3. **Environment Variable Issues**
   - Make sure all required environment variables are set in Vercel
   - Check variable names match exactly (case-sensitive)
   - Redeploy after adding/changing environment variables

4. **API Route Issues**
   - Verify API routes are accessible at `/api/endpoint`
   - Check Vercel function logs in the dashboard

### Debug Steps:

1. **Check Vercel Function Logs**
   - Go to your project in Vercel dashboard
   - Click on "Functions" tab
   - Check logs for errors

2. **Test API Endpoints Directly**
   ```bash
   # Test registration
   curl -X POST https://your-app.vercel.app/api/register \
     -H "Content-Type: application/json" \
     -d '{"name":"Test User","email":"test@test.com","password":"password123","role":"student","major":"Computer Science","studentID":"ST001"}'

   # Test login  
   curl -X POST https://your-app.vercel.app/api/login \
     -H "Content-Type: application/json" \
     -d '{"email":"test@test.com","password":"password123"}'
   ```

3. **Check Network Tab in Browser**
   - Open developer tools
   - Check if API calls are going to correct URLs
   - Look for CORS errors or failed requests

## Security Considerations for Production

1. **JWT Secret**: Use a strong, unique JWT secret for production
2. **MongoDB**: Don't use the same database for development and production
3. **CORS**: Consider restricting CORS to specific domains instead of allowing all
4. **Environment Variables**: Never commit `.env` files to version control
5. **HTTPS**: Vercel automatically provides HTTPS, but ensure all API calls use HTTPS

## Continuous Deployment

Once set up, your app will automatically deploy when you:
1. Push changes to your main branch
2. The deployment will build both frontend and backend
3. New environment variables or configuration changes may require manual redeployment

## Monitoring and Maintenance

1. **Monitor Vercel Analytics**: Check for performance and usage metrics
2. **Database Monitoring**: Monitor MongoDB Atlas usage and performance  
3. **Error Tracking**: Consider adding error tracking (Sentry, etc.)
4. **Backups**: Set up regular MongoDB backups in Atlas