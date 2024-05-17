export interface fastRepo {
    name: string
    description: string
    createdAt: Date
    collaborators: Array<{
        name: string
        avatar_url: string
        profile: string
    }>
    languages: []
}