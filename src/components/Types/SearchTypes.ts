export enum SearchVariant {
    Title,
    Genre,
    Rate,
    ProductionYear
}

export type SearchType = {
    searchCriteria: string,
    searchVariant: SearchVariant
}