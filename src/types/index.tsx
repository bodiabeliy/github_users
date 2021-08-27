export interface I_Repository {
    reponame: string
    forks: number;
    stars: number
}

export interface I_Users {
    id: number
    username: string;
    email?: string;
    image:string;
    location?: string;
    join_date?: string;
    follower?: number;
    following?: number;
    repo: I_Repository;
} 