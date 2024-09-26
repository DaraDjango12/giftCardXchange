import itunes from "@assets/logos/apple 1 (1).svg";
import ebay from "@assets/logos/ebay 1.svg";
import google from "@assets/logos/google 1.svg";
import amazon from "@assets/logos/amazon 1.svg";
import ninetendo from "@assets/logos/nintendo 1.svg";
import razor from "@assets/logos/razor 1.svg";
import xbox from "@assets/logos/xbox 1.svg";
import steam from "@assets/logos/steam 1.svg";
import royale from "@assets/logos/clash royale 1.svg";
import roblox from "@assets/logos/roblox 1.svg";

export type giftcard = {
  id: string;
  name: string;
  logo: string;
};

export const giftcards: giftcard[] = [
  {
    id: "001",
    name: "itunes",
    logo: itunes,
  },
  {
    id: "002",
    name: "ebay",
    logo: ebay,
  },
  {
    id: "003",
    name: "google",
    logo: google,
  },
  {
    id: "004",
    name: "amazon",
    logo: amazon,
  },
  {
    id: "005",
    name: "ninetendo",
    logo: ninetendo,
  },
  {
    id: "006",
    name: "razor",
    logo: razor,
  },
  {
    id: "007",
    name: "xbox",
    logo: xbox,
  },
  {
    id: "008",
    name: "royale",
    logo: royale,
  },
  {
    id: "009",
    name: "steam",
    logo: steam,
  },
  {
    id: "010",
    name: "roblox",
    logo: roblox,
  },
];
