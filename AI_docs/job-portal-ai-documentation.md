# Job Portal Development Documentation

This documentation is optimized for both human developers and AI agents working on the Career Harmony job portal project.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Data Architecture](#data-architecture) 
3. [API Specifications](#api-specifications)
4. [Frontend Schema Validation](#frontend-schema-validation)
5. [Database Design](#database-design)
6. [Implementation Guidelines](#implementation-guidelines)

---

## Project Overview

**Project Name:** Career Harmony Job Portal
**Philosophy:** Human-centered design that treats job seekers with dignity and empowers rather than exploits
**Tech Stack:** Python FastAPI + MongoDB + Next.js + TypeScript + Tailwind CSS

### Core User Types
- **Job Seekers**: Create profiles, search jobs, apply, track applications, receive AI recommendations
- **Employers**: Post jobs, review applications, schedule interviews, manage hiring pipeline

### Unique Features
- **Healthy Reminders™**: Wellbeing-focused messages for job seekers
- **AI-Powered Matching**: Personality and culture fit matching beyond just skills
- **Human-Centered Interface**: Supportive messaging, worth affirmation, realistic process expectations

---

## Data Architecture

### Core Entities Relationship Map

```
User (Auth) → JobSeekerProfile → Applications → Jobs
                              → Recommendations → Jobs
                              → DashboardMetrics
                              → HealthyReminders
```

### Entity Details

#### User Authentication
- **Primary Key**: `user_id` (string)
- **Account Types**: `job_seeker` | `employer`
- **Security**: JWT tokens, bcrypt password hashing
- **Tracking**: `last_login`, `created_at`, `updated_at`

#### Job Seeker Profile
- **Primary Key**: `profile_id` (string)
- **Foreign Key**: `user_id` → User
- **Core Fields**: name, email, location, bio, skills[], experience_years
- **File Storage**: `resume_file_url`, `resume_file_name`
- **Preferences**: salary range, job types, remote work, locations
- **Metrics**: `profile_views`, `profile_completion_percentage`

#### Job Applications
- **Primary Key**: `application_id` (string)
- **Foreign Keys**: `job_seeker_id`, `job_id`
- **Status Enum**: Application Submitted → Under Review → Interview Scheduled → [Interviewed|Rejected|Offer Received]
- **Tracking**: `status_history[]`, `next_step`, `interview_scheduled_date`
- **Notes**: User and system notes for application management

#### Job Recommendations
- **Primary Key**: `recommendation_id` (string)
- **Foreign Keys**: `job_seeker_id`, `job_id`
- **AI Data**: `match_percentage`, `reasoning`, `factors[]`
- **User Actions**: `viewed`, `dismissed`, `applied`
- **Matching Factors**: skills_match, location_preference, salary_match, culture_fit

#### Dashboard Metrics
- **Primary Key**: `user_id` (string)
- **Time-based Metrics**: applications_this_week, weekly_activity[]
- **Status Breakdowns**: applications_by_status{}
- **Engagement**: response_rate, average_applications_per_week
- **Real-time**: `calculated_at` timestamp for cache invalidation

---

## API Specifications

### Authentication Endpoints

```http
POST /api/v1/auth/register
Content-Type: application/json
Body: {
  "email": "user@example.com",
  "password": "SecurePass123",
  "confirm_password": "SecurePass123",
  "account_type": "job_seeker",
  "first_name": "Alex",
  "last_name": "Johnson"
}
Response: { "success": true, "data": { "user_id": "...", "token": "..." }}
```

```http
POST /api/v1/auth/login
Content-Type: application/json
Body: { "email": "user@example.com", "password": "SecurePass123" }
Response: { "success": true, "data": { "user_id": "...", "token": "...", "account_type": "job_seeker" }}
```

### Dashboard Data Endpoints

```http
GET /api/v1/dashboard/summary/{user_id}
Authorization: Bearer {jwt_token}
Response: {
  "success": true,
  "data": {
    "metrics": DashboardMetrics,
    "recent_applications": ApplicationWithJobDetails[],
    "top_recommendations": RecommendationWithJobDetails[],
    "upcoming_interviews": ApplicationWithJobDetails[],
    "current_reminder": string
  }
}
```

### Application Management

```http
GET /api/v1/applications/{user_id}
Query Params: ?limit=10&offset=0&status=Under Review&date_from=2024-01-01
Authorization: Bearer {jwt_token}
Response: PaginatedResponse<ApplicationWithJobDetails>
```

```http
POST /api/v1/applications
Content-Type: application/json
Authorization: Bearer {jwt_token}
Body: {
  "job_id": "job_123",
  "notes": "Applied via company website",
  "custom_status": "Application Submitted"
}
Response: { "success": true, "data": JobApplication }
```

```http
PUT /api/v1/applications/{application_id}
Content-Type: application/json
Authorization: Bearer {jwt_token}
Body: {
  "status": "Interview Scheduled",
  "next_step": "Technical interview on Friday",
  "interview_scheduled_date": "2024-12-15T14:00:00Z"
}
```

### Recommendations

```http
GET /api/v1/recommendations/{user_id}
Query Params: ?limit=5&viewed=false&match_threshold=80
Authorization: Bearer {jwt_token}
Response: PaginatedResponse<RecommendationWithJobDetails>
```

```http
POST /api/v1/recommendations/{recommendation_id}/view
Authorization: Bearer {jwt_token}
Response: { "success": true, "message": "Recommendation marked as viewed" }
```

### Healthy Reminders

```http
GET /api/v1/reminders/random
Query Params: ?category=motivation&exclude_recent=true
Response: { "success": true, "data": { "text": "Your worth isn't defined by job responses", "category": "self_worth" }}
```

```http
GET /api/v1/reminders/preferences/{user_id}
Authorization: Bearer {jwt_token}
Response: { "success": true, "data": UserReminderPreferences }
```

### Analytics & Insights

```http
GET /api/v1/analytics/applications/{user_id}
Query Params: ?period=month&start_date=2024-11-01&end_date=2024-11-30
Authorization: Bearer {jwt_token}
Response: {
  "applications_by_status": { "Under Review": 3, "Rejected": 2, "Interview Scheduled": 1 },
  "weekly_trends": DailyActivity[],
  "response_rate": 45.5
}
```

---

## Frontend Schema Validation

### Zod Schema Usage Patterns

#### Form Validation Example
```typescript
import { RegisterSchema, validateEmail, validatePassword } from './schemas/validation';

// Component form validation
const handleRegister = (formData: unknown) => {
  const result = RegisterSchema.safeParse(formData);
  if (!result.success) {
    setErrors(result.error.format());
    return;
  }
  // Proceed with validated data: result.data
};

// Real-time field validation
const handleEmailBlur = (email: string) => {
  const result = validateEmail(email);
  setEmailError(result.success ? null : "Please enter a valid email");
};
```

#### API Response Validation
```typescript
import { DashboardSummarySchema } from './schemas/validation';

const fetchDashboardData = async (userId: string) => {
  const response = await fetch(`/api/v1/dashboard/summary/${userId}`);
  const rawData = await response.json();
  
  // Validate API response structure
  const result = DashboardSummarySchema.safeParse(rawData.data);
  if (!result.success) {
    console.error('Invalid API response:', result.error);
    throw new Error('Invalid dashboard data received');
  }
  
  return result.data; // Type-safe dashboard data
};
```

#### State Management with Validation
```typescript
import { JobApplicationSchema, ApplicationStatus } from './schemas/validation';

// Redux/Zustand store with validation
const updateApplicationStatus = (applicationId: string, newStatus: string) => {
  // Validate status before updating state
  const statusResult = ApplicationStatus.safeParse(newStatus);
  if (!statusResult.success) {
    console.error('Invalid application status:', newStatus);
    return;
  }
  
  // Update store with validated status
  setApplications(prev => 
    prev.map(app => 
      app.id === applicationId 
        ? { ...app, status: statusResult.data }
        : app
    )
  );
};
```

### Key Validation Schemas for Components

#### Dashboard Component Validation
```typescript
// For JobSeekerDashboard component
DashboardSummarySchema // Main dashboard data
DashboardMetricsSchema // Metrics section
ApplicationWithJobDetailsSchema // Recent applications
RecommendationWithJobDetailsSchema // AI recommendations
HealthyReminderSchema // Daily reminders
```

#### Job Search Component Validation
```typescript
// For JobSearchPage component
FilterApplicationsSchema // Search filters
PaginationSchema // Results pagination
JobRecommendationSchema // Job matching data
```

#### Profile Management Validation
```typescript
// For profile forms
JobSeekerProfileSchema // Complete profile
UpdateJobSeekerProfileSchema // Partial updates
JobPreferencesSchema // User preferences
```

---

## Database Design

### MongoDB Collections Structure

#### users Collection
```javascript
{
  _id: ObjectId("..."),
  email: "alex@example.com",
  password_hash: "$2b$12$...",
  account_type: "job_seeker",
  created_at: ISODate("2024-11-06T10:00:00Z"),
  updated_at: ISODate("2024-11-06T10:00:00Z"),
  last_login: ISODate("2024-11-06T15:30:00Z")
}
// Indexes: email (unique), account_type, created_at
```

#### job_seeker_profiles Collection
```javascript
{
  _id: ObjectId("..."),
  user_id: ObjectId("..."), // Reference to users._id
  first_name: "Alex",
  last_name: "Johnson",
  email: "alex@example.com",
  phone: "+1-555-0123",
  location: "Phoenix, AZ",
  bio: "Experienced QA tester transitioning to business analysis...",
  resume_file_url: "https://storage.example.com/resumes/alex_resume.pdf",
  resume_file_name: "Alex_Johnson_Resume_2024.pdf",
  skills: ["Quality Assurance", "Business Analysis", "Agile", "SQL"],
  experience_years: 5,
  education_level: "Bachelor's Degree",
  preferences: {
    desired_salary_min: 65000,
    desired_salary_max: 85000,
    job_types: ["Full-time"],
    remote_ok: true,
    preferred_locations: ["Phoenix, AZ", "Remote"],
    industry_preferences: ["Technology", "Healthcare"],
    company_size_preferences: ["startup", "medium"],
    work_environment_preferences: ["collaborative", "supportive"]
  },
  profile_views: 12,
  profile_completion_percentage: 85,
  created_at: ISODate("..."),
  updated_at: ISODate("...")
}
// Indexes: user_id (unique), location, skills (array), experience_years
// Text indexes: bio, skills for search functionality
```

#### applications Collection
```javascript
{
  _id: ObjectId("..."),
  job_seeker_id: ObjectId("..."), // Reference to job_seeker_profiles._id
  job_id: ObjectId("..."), // Reference to jobs._id
  status: "Interview Scheduled",
  applied_date: ISODate("2024-11-04T09:00:00Z"),
  notes: "Applied through company career page",
  next_step: "Technical interview on Friday at 2 PM",
  interview_scheduled_date: ISODate("2024-11-08T14:00:00Z"),
  rejection_reason: null,
  status_history: [
    {
      status: "Application Submitted",
      changed_at: ISODate("2024-11-04T09:00:00Z"),
      notes: "Initial application submitted",
      changed_by: "user_123"
    },
    {
      status: "Under Review", 
      changed_at: ISODate("2024-11-05T14:30:00Z"),
      notes: "Moved to review by hiring manager",
      changed_by: "system"
    },
    {
      status: "Interview Scheduled",
      changed_at: ISODate("2024-11-06T11:15:00Z"), 
      notes: "Technical interview scheduled",
      changed_by: "employer_456"
    }
  ],
  custom_fields: {
    referral_source: "LinkedIn",
    cover_letter_sent: true,
    follow_up_sent: false
  },
  created_at: ISODate("..."),
  updated_at: ISODate("...")
}
// Indexes: job_seeker_id, job_id, status, applied_date, interview_scheduled_date
// Compound indexes: [job_seeker_id, status], [job_seeker_id, applied_date]
```

#### recommendations Collection  
```javascript
{
  _id: ObjectId("..."),
  job_seeker_id: ObjectId("..."),
  job_id: ObjectId("..."),
  match_percentage: 89,
  reasoning: "Perfect match for your project coordination experience and interest in healthcare technology",
  factors: [
    {
      factor: "skills_match",
      weight: 0.4,
      explanation: "80% overlap with required skills: Business Analysis, Agile, Healthcare",
      score: 85
    },
    {
      factor: "location_preference", 
      weight: 0.2,
      explanation: "Matches preferred location: Phoenix, AZ",
      score: 100
    },
    {
      factor: "salary_match",
      weight: 0.3,
      explanation: "Salary range $65k-$85k aligns with your preferences",
      score: 90
    },
    {
      factor: "culture_fit",
      weight: 0.1, 
      explanation: "Company values collaboration and work-life balance",
      score: 95
    }
  ],
  ai_generated: true,
  viewed: false,
  dismissed: false,
  applied: false,
  created_at: ISODate("...")
}
// Indexes: job_seeker_id, job_id, match_percentage, viewed, dismissed, created_at
// Compound indexes: [job_seeker_id, viewed], [job_seeker_id, match_percentage desc]
```

#### healthy_reminders Collection
```javascript
{
  _id: ObjectId("..."),
  text: "Remember: Every 'no' brings you closer to your perfect 'yes'.",
  category: "motivation",
  active: true,
  usage_count: 247,
  created_at: ISODate("...")
}
// Indexes: category, active, usage_count
```

#### user_reminder_preferences Collection
```javascript
{
  _id: ObjectId("..."),
  user_id: ObjectId("..."),
  enabled: true,
  frequency: "daily",
  categories: ["motivation", "self_worth"],
  last_shown: ISODate("2024-11-06T08:00:00Z"),
  personalized_reminders: [
    "I am qualified and deserving of meaningful work",
    "My bootcamp experience is valuable and relevant"
  ]
}
// Indexes: user_id (unique), enabled, frequency
```

#### dashboard_metrics Collection (Cached)
```javascript
{
  _id: ObjectId("..."),
  user_id: ObjectId("..."),
  // Current period metrics
  applications_this_week: 3,
  interviews_scheduled: 1,
  profile_views: 12,
  new_recommendations: 5,
  // All-time totals
  total_applications: 28,
  total_interviews: 7,
  total_profile_views: 89,
  // Status breakdown
  applications_by_status: {
    "Application Submitted": 3,
    "Under Review": 8,
    "Interview Scheduled": 2,
    "Interviewed": 4,
    "Rejected": 9,
    "Offer Received": 2
  },
  // Weekly activity trend
  weekly_activity: [
    { date: "2024-11-01", applications_sent: 2, profile_views: 3, recommendations_received: 1 },
    { date: "2024-11-02", applications_sent: 1, profile_views: 4, recommendations_received: 2 },
    // ... 7 days of data
  ],
  // Calculated metrics
  average_applications_per_week: 2.8,
  response_rate: 45.5, // Percentage of applications that got responses
  calculated_at: ISODate("2024-11-06T16:00:00Z") // TTL index for cache expiration
}
// Indexes: user_id (unique), calculated_at (TTL: 1 hour)
```

### Database Optimization Strategies

#### Indexing Strategy
```javascript
// Essential indexes for performance
db.applications.createIndex({ "job_seeker_id": 1, "applied_date": -1 }); // Dashboard recent apps
db.applications.createIndex({ "job_seeker_id": 1, "status": 1 }); // Status filtering
db.recommendations.createIndex({ "job_seeker_id": 1, "match_percentage": -1 }); // Top matches
db.recommendations.createIndex({ "job_seeker_id": 1, "viewed": 1, "dismissed": 1 }); // Unviewed recs
db.job_seeker_profiles.createIndex({ "skills": 1 }); // Skill-based matching
db.dashboard_metrics.createIndex({ "calculated_at": 1 }, { expireAfterSeconds: 3600 }); // Cache TTL
```

#### Data Aggregation Pipelines
```javascript
// Dashboard metrics calculation
db.applications.aggregate([
  { $match: { job_seeker_id: ObjectId("...") }},
  { $group: {
    _id: "$status",
    count: { $sum: 1 },
    recent: {
      $sum: {
        $cond: {
          if: { $gte: ["$applied_date", ISODate("2024-11-01")] },
          then: 1,
          else: 0
        }
      }
    }
  }},
  { $group: {
    _id: null,
    applications_by_status: {
      $push: { status: "$_id", count: "$count" }
    },
    applications_this_week: { $sum: "$recent" }
  }}
]);
```

---

## Implementation Guidelines

### Error Handling Standards

#### API Error Responses
```typescript
// Standardized error response format
interface ApiError {
  success: false;
  error: string;
  message: string;
  details?: Record<string, string[]>; // Validation errors
  timestamp: string;
}

// Usage example
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof z.ZodError) {
    return res.status(400).json({
      success: false,
      error: "VALIDATION_ERROR",
      message: "Invalid request data",
      details: error.format(),
      timestamp: new Date().toISOString()
    });
  }
  // Handle other error types...
});
```

#### Frontend Error Handling
```typescript
// Consistent error handling in components
const handleApiError = (error: unknown) => {
  if (error instanceof z.ZodError) {
    setFormErrors(error.format());
  } else if (error instanceof Error) {
    showToast("error", error.message);
  } else {
    showToast("error", "An unexpected error occurred");
  }
};
```

### Security Implementation

#### JWT Token Management
```typescript
// Token structure and validation
interface JWTPayload {
  user_id: string;
  account_type: 'job_seeker' | 'employer';
  exp: number;
  iat: number;
}

// Middleware for protecting routes
const requireAuth = (accountType?: 'job_seeker' | 'employer') => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const token = req.headers.authorization?.replace('Bearer ', '');
      if (!token) throw new Error('No token provided');
      
      const payload = jwt.verify(token, JWT_SECRET) as JWTPayload;
      if (accountType && payload.account_type !== accountType) {
        throw new Error('Insufficient permissions');
      }
      
      req.user = payload;
      next();
    } catch (error) {
      res.status(401).json({
        success: false,
        error: 'UNAUTHORIZED', 
        message: 'Invalid or expired token',
        timestamp: new Date().toISOString()
      });
    }
  };
};
```

#### Data Privacy & GDPR Compliance
```typescript
// Profile view tracking with privacy controls
const trackProfileView = async (viewedUserId: string, viewerData: Partial<ProfileView>) => {
  // Anonymize IP address (remove last octet)
  const anonymizedIP = viewerData.ip_address?.replace(/\.\d+$/, '.0');
  
  return await profileViews.insertOne({
    viewed_user_id: viewedUserId,
    viewer_id: viewerData.viewer_id || null,
    viewer_type: viewerData.viewer_type || 'anonymous',
    viewed_at: new Date().toISOString(),
    ip_address: anonymizedIP,
    user_agent: viewerData.user_agent?.substring(0, 200), // Limit data collection
    referrer: viewerData.referrer?.substring(0, 200)
  });
};
```

### Performance Optimization

#### Caching Strategy
```typescript
// Redis caching for dashboard data
const getCachedDashboardData = async (userId: string): Promise<DashboardSummary | null> => {
  const cacheKey = `dashboard:${userId}`;
  const cached = await redis.get(cacheKey);
  
  if (cached) {
    const data = JSON.parse(cached);
    // Validate cached data structure
    const result = DashboardSummarySchema.safeParse(data);
    return result.success ? result.data : null;
  }
  
  return null;
};

const setCachedDashboardData = async (userId: string, data: DashboardSummary) => {
  const cacheKey = `dashboard:${userId}`;
  await redis.setex(cacheKey, 3600, JSON.stringify(data)); // 1 hour TTL
};
```

#### Database Query Optimization
```typescript
// Optimized dashboard data fetching
const getDashboardData = async (userId: string): Promise<DashboardSummary> => {
  // Check cache first
  const cached = await getCachedDashboardData(userId);
  if (cached) return cached;
  
  // Parallel data fetching for performance
  const [metrics, applications, recommendations] = await Promise.all([
    calculateDashboardMetrics(userId),
    getRecentApplications(userId, 5),
    getTopRecommendations(userId, 5)
  ]);
  
  const summary: DashboardSummary = {
    metrics,
    recent_applications: applications,
    top_recommendations: recommendations,
    upcoming_interviews: applications.filter(app => app.status === 'Interview Scheduled'),
    current_reminder: await getRandomReminder(userId)
  };
  
  // Cache the result
  await setCachedDashboardData(userId, summary);
  return summary;
};
```

### AI Integration Guidelines

#### Recommendation Engine Integration
```typescript
// Interface for AI recommendation service
interface RecommendationEngine {
  generateRecommendations(
    userId: string, 
    userProfile: JobSeekerProfile, 
    availableJobs: Job[]
  ): Promise<JobRecommendation[]>;
  
  explainMatch(
    userProfile: JobSeekerProfile, 
    job: Job
  ): Promise<{
    match_percentage: number;
    reasoning: string;
    factors: RecommendationFactor[];
  }>;
}

// Usage in API endpoint
app.get('/api/v1/recommendations/generate/:userId', requireAuth('job_seeker'), async (req, res) => {
  try {
    const { userId } = req.params;
    const userProfile = await getJobSeekerProfile(userId);
    const availableJobs = await getAvailableJobs();
    
    const recommendations = await recommendationEngine.generateRecommendations(
      userId, 
      userProfile, 
      availableJobs
    );
    
    // Validate and store recommendations
    const validatedRecommendations = recommendations.map(rec => {
      const result = JobRecommendationSchema.safeParse(rec);
      if (!result.success) {
        console.error('Invalid recommendation generated:', result.error);
        return null;
      }
      return result.data;
    }).filter(Boolean);
    
    await storeRecommendations(validatedRecommendations);
    
    res.json({
      success: true,
      data: validatedRecommendations,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    handleApiError(error, res);
  }
});
```

### Testing Guidelines

#### Schema Validation Testing
```typescript
// Test suite for Zod schemas
describe('JobSeekerProfile Schema Validation', () => {
  test('should validate complete profile', () => {
    const validProfile = {
      id: 'profile_123',
      user_id: 'user_123',
      first_name: 'Alex',
      last_name: 'Johnson',
      email: 'alex@example.com',
      location: 'Phoenix, AZ',
      skills: ['QA Testing', 'Business Analysis'],
      profile_views: 0,
      profile_completion_percentage: 85,
      created_at: '2024-11-06T10:00:00Z',
      updated_at: '2024-11-06T10:00:00Z'
    };
    
    const result = JobSeekerProfileSchema.safeParse(validProfile);
    expect(result.success).toBe(true);
  });
  
  test('should reject invalid email', () => {
    const invalidProfile = { ...validProfile, email: 'not-an-email' };
    const result = JobSeekerProfileSchema.safeParse(invalidProfile);
    expect(result.success).toBe(false);
    expect(result.error?.issues[0].path).toEqual(['email']);
  });
});
```

#### API Integration Testing
```typescript
// Test API endpoints with schema validation
describe('Dashboard API', () => {
  test('should return valid dashboard summary', async () => {
    const response = await request(app)
      .get('/api/v1/dashboard/summary/user_123')
      .set('Authorization', `Bearer ${validToken}`);
    
    expect(response.status).toBe(200);
    
    // Validate response structure
    const result = DashboardSummarySchema.safeParse(response.body.data);
    expect(result.success).toBe(true);
    
    // Test specific dashboard requirements
    expect(response.body.data.metrics.applications_this_week).toBeGreaterThanOrEqual(0);
    expect(Array.isArray(response.body.data.recent_applications)).toBe(true);
  });
});
```

### Deployment & Monitoring

#### Health Check Endpoints
```typescript
// System health monitoring
app.get('/api/health', async (req, res) => {
  try {
    // Test database connectivity
    await db.admin().ping();
    
    // Test cache connectivity
    await redis.ping();
    
    // Validate critical schemas are available
    const schemaTest = JobSeekerProfileSchema.safeParse({
      id: 'test',
      user_id: 'test',
      first_name: 'Test',
      last_name: 'User',
      email: 'test@example.com',
      location: 'Test Location',
      profile_views: 0,
      profile_completion_percentage: 0,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    });
    
    res.json({
      status: 'healthy',
      timestamp: new Date().toISOString(),
      services: {
        database: 'connected',
        cache: 'connected',
        schemas: schemaTest.success ? 'valid' : 'invalid'
      }
    });
  } catch (error) {
    res.status(503).json({
      status: 'unhealthy',
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    });
  }
});
```

---

## Development Checklist

### For AI Agents Working on This Project

#### Before Starting Development
- [ ] Review the human-centered design philosophy
- [ ] Understand the "Healthy Reminders" feature importance
- [ ] Familiarize yourself with the application status lifecycle
- [ ] Review the empathetic language requirements ("You have worth!", supportive messaging)

#### Schema Implementation
- [ ] Import and use the provided Zod schemas for all data validation
- [ ] Validate both API requests and responses using schemas
- [ ] Use TypeScript types exported from schemas
- [ ] Implement proper error handling for validation failures

#### Database Operations
- [ ] Follow the MongoDB collection structures exactly
- [ ] Implement the suggested indexes for performance
- [ ] Use the status enums consistently across collections
- [ ] Include proper created_at/updated_at timestamps

#### API Development
- [ ] Follow RESTful conventions for endpoint design
- [ ] Implement JWT authentication for protected routes
- [ ] Use consistent error response format
- [ ] Include proper HTTP status codes
- [ ] Validate request bodies using Zod schemas

#### Frontend Integration
- [ ] Use Zod schemas for form validation
- [ ] Implement proper TypeScript typing
- [ ] Handle loading states for dashboard metrics
- [ ] Show supportive error messages consistent with human-centered design
- [ ] Implement the "You have worth!" badge functionality

#### Testing Requirements
- [ ] Write unit tests for all Zod schemas
- [ ] Test API endpoints with valid and invalid data
- [ ] Test edge cases (empty results, network failures)
- [ ] Validate dashboard calculations are accurate
- [ ] Test the healthy reminders randomization

#### Performance Considerations
- [ ] Implement caching for dashboard metrics
- [ ] Use database indexes for query optimization
- [ ] Consider pagination for large result sets
- [ ] Optimize AI recommendation generation

Remember: This project prioritizes user wellbeing and human dignity. Every technical decision should support the goal of creating an empowering, supportive job search experience that treats users as whole people, not just data points.