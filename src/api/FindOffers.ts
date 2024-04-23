export function FindOffers(data: any, filters: any) {
    return data.filter((offer: { role: string; level: string; languages: string[]; tools: string[]; }) => {
        let matches = true;
        
        // Check each filter type
        for (const filter in filters) {
          if (filters[filter] && !matches) break; // Early exit if already doesn't match
          switch (filter) {
            case "role":
                matches = offer.role.includes(filters[filter]);
                break;
            case "level":
                matches = offer.level.includes(filters[filter]);
                break;
            case "contract":
            case "location":
            case "languages":
              matches = filters[filter].every((lang:any) => {
                return offer.languages.includes(lang);
              });
              if(offer.languages.length === 0 && filters[filter].length === 0) matches = true;
              break;
            case "tools":
              matches = filters[filter].every((tool:any) => {
                return offer.tools.includes(tool);
              });
              console.log(matches);
              break;
            default:
              break;
          }
          
        }
        
        return matches;
      });

}