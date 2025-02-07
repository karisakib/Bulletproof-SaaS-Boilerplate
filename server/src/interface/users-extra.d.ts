interface User {
 id: string,
 refreshToken: string,
 resetToken: string,
 subscription: string,
 creditsUsed: number,
 creditsRemaining: number,
 usage: number // This is a Developer API account example of rate limiting
}

