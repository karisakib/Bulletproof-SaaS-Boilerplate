interface Application {
 id: string, // uuid 4
 userId: string,
 platform: string,
 url: string,
 externalJobId: string,
 jobTitle: string, // or 'title'
 jobPoster: string, // or 'postedBy'
 jobPosterAgent: string, //
 jobDescription: string, // or description
 compensation: string,
 perks: string,
 location: string,
 remote: boolean,
 employmentType: string,
 requiredSkills: Array
 dateApplied: Date,
}