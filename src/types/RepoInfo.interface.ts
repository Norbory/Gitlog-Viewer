export interface RepoInfo {
    name: string;
    commiter: string;
    status: string;
    description: string;
    createdAt: string;
    commitHistory: Array<{
        sha: string;
        commiter: string;
        message: string;
        date: string;
    }>;
}