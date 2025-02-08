### Users ER Diagram

```mermaid
erDiagram
    Users {
        String _id PK
        String firstName
        String lastName
        String profilePhoto
        String email
        String hashedPassword
        Boolean verified
        String userRole
        Date createdAt
        Date updatedAt
    }
```

```mermaid
erDiagram
    UserAccountSecurity {
        String _id PK
        String userId FK
        String refreshToken
        String resetToken
        Date lastPasswordChange
        Date lastEmailChange
        Date lastAccountChange
        Date createdAt
        Date updatedAt
    }
```

```mermaid
erDiagram
    UserPreferences {
        String _id PK
        String userId FK
        String theme
        String language
        Boolean notificationSettings_emailNotifications
        Boolean notificationSettings_smsNotifications
        Date createdAt
        Date updatedAt
    }
```

```mermaid
erDiagram
    UserSessions {
        String _id PK
        String userId FK
        String sessionId
        String ipAddress
        String userAgent
        Date loginTime
        Date logoutTime
        Boolean isAnonymous
        Date createdAt
        Date updatedAt
    }
```

```mermaid
erDiagram
    UserSecurityAnswers {
        String _id PK
        String userId FK
        Number questionId
        String answerHash
        Date createdAt
        Date updatedAt
    }
````

```mermaid
erDiagram
    UserSecurityQuestions {
        String _id PK
        String userId FK
        Number questionId
        String answerHash
        Date createdAt
        Date updatedAt
    }
```

```mermaid
erDiagram
    UserInteractions {
        String _id PK
        String userId FK
        String interactionType
        Mixed interactionDetails
        Date timestamp
        Date createdAt
        Date updatedAt
    }
```

```mermaid
erDiagram
    UserSubscriptions {
        String _id PK
        String userId FK
        String subscriptionType
        Number creditsUsed
        Number creditsRemaining
        Date subscriptionStart
        Date subscriptionEnd
        Date createdAt
        Date updatedAt
    }
```

```mermaid
erDiagram
    UserPayments {
        String _id PK
        String userId FK
        String paymentMethod
        Number amount
        Date paymentDate
        String billingAddress
        String cardLastFourDigits
        Date createdAt
        Date updatedAt
    }
```

```plaintext

    %% Relations
    UserAccountSecurity ||--|| Users : "belongs to"
    UserPreferences ||--|| Users : "belongs to"
    UserSessions ||--|| Users : "belongs to"
    UserSecurityAnswers ||--|| Users : "belongs to"
    UserSecurityQuestions ||--|| Users : "belongs to"
    UserInteractions ||--|| Users : "belongs to"
    UserSubscriptions ||--|| Users : "belongs to"
    UserPayments ||--|| Users : "belongs to"
```
