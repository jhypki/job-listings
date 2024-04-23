export function FindOffers(data:any, filters:string[]){
    return data.filter((offer: { role: string; level: string; languages: string[]; tools: string[]; }) => {
        const offerTags = [offer.role, offer.level, ...offer.languages, ...offer.tools];
        const lowerCaseOfferTags = offerTags.map((tag) => tag.toLowerCase());
        const lowerCaseFilters = filters.map((filter) => filter.toLowerCase());
        return lowerCaseFilters.every((filter) => lowerCaseOfferTags.includes(filter));
    });
}