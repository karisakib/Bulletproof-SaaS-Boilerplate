interface User {
 id: string,
 firstName: string,
 lastName: string,
 profilePhoto?: string,
 email: string,
 username: string
 hashedPassword: string,
 verified: boolean,
 userRole: string,
 refreshToken: string,
 resetToken: string,
 subscription: string,
 creditsUsed: number,
 creditsRemaining: number,
 usage: number // This is a Developer API account example of rate limiting
}

