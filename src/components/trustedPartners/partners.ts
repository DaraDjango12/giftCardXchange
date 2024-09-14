import cambridge from "@assets/logos/cambridge.jpeg"
import florida from "@assets/logos/florida.png"
import havard from "@assets/logos/havard.png"
import oxford from "@assets/logos/oxford.png"
import SDSTATE from "@assets/logos/SDSTATE.jpeg"
import texas from "@assets/logos/texas.png"
import toronto from "@assets/logos/toronto.png"

export type partner = {
    id: string,
    name: string,
    logo: string
}

export const partners: partner[] = [
    {
        id: "001",
        name: "Cambridge",
        logo: cambridge
    },
    {
        id: "002",
        name: "Havard",
        logo: havard
    },
    {
        id: "003",
        name: "cambridge A",
        logo: cambridge
    },
    {
        id: "004",
        name: "Florida",
        logo: florida
    },
    {
        id: "005",
        name: "Havard",
        logo: havard
    },
    {
        id: "006",
        name: "SDSTATE",
        logo: SDSTATE
    },
    {
        id: "007",
        name: "Oxford",
        logo: oxford
    },
    {
        id: "008",
        name: "SDSTATE",
        logo: SDSTATE
    },
    {
        id: "009",
        name: "Texas",
        logo: texas
    },
    {
        id: "010",
        name: "Toronto",
        logo: toronto
    },
]