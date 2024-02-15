export type Movies = {
    title: string;
    id: number | string;
    poster_path: string;
    vote_average: number;
}

export type MovieComplete = {
    title: string,
    id: number | string,
    poster_path: string,
    vote_average: number,
    tagline: string,
    budget: number,
    revenue: number,
    runtime: number,
    overview: string;
}