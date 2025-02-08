# Bulletproof SaaS Boilerplate

## Overview
The **Bulletproof SaaS Boilerplate** is a fully scalable, production-grade foundation for building SaaS applications. It follows best practices, enforces strong security, and integrates essential third-party services to accelerate development and deployment.

## Tech Stack
### Frontend
| Technology | Purpose |
|------------|---------|
| **React** | UI Framework |
| **TailwindCSS** | Styling |
| **Zustand** | State Management |
| **React Router 7** | Navigation |
| **React Query** | Data Fetching |

### Backend
| Technology | Purpose |
|------------|---------|
| **Express.js** | Server Framework |
| **Prisma** | ORM for MongoDB & PostgreSQL |
| **Redis** | Caching |
| **Stripe** | Payments |
| **Swagger Docs** | API Documentation |
| **Jest & Supertest** | Testing |
| **Playwright** | E2E Testing |
| **PostHog** | Analytics & Event Tracking |
| **PM2** | Process Management |

### Infrastructure & DevOps
| Technology | Purpose |
|------------|---------|
| **Docker** | Containerization |
| **GitHub Actions** | CI/CD Pipeline |
| **AWS S3** | File Storage |
| **Mailgun** | Transactional Emails |
| **Twilio** | SMS & Communication |
| **BunnyCDN** | Content Delivery Network (CDN) |

## Features
### Frontend
| Feature | Description |
|---------|-------------|
| **Admin Dashboard** | View MMR and other income metrics, superuser features accessible only to admins |
| **Superuser Registration** | Registration for users with superuser permissions under admin level |
| **Blog Entry Portal** | Allows publishing of blog entries |

### Backend
| Feature | Description |
|---------|-------------|
| **Authentication** | Supports U/P, OAuth, OTP, RBAC, and API Key Provisioning |
| **Database** | Uses PostgreSQL, MongoDB, and Redis |
| **Logging** | Implements dev, stage, and production logging |
| **CDN** | BunnyCDN integration for optimized content delivery |
| **Payments** | Stripe integration for secure transactions |
| **SMS** | Twilio for SMS communication |
| **Transactional Emails** | Mailgun for sending transactional emails |
| **Testing** | Playwright API test suite for comprehensive backend testing |
| **Deployment** | PM2 for efficient process management |
| **Containerization** | Entire application dockerized for portability |
| **CI/CD** | GitHub Actions configured for automated deployment workflows |

