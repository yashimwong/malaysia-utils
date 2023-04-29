export type StateData = {
  name: State;
  capital: string;
  royal_capital: string;
  abbreviation: string;
  iso_code: string;
};

export enum State {
  Johor = "Johor",
  Kedah = "Kedah",
  Kelantan = "Kelantan",
  Melaka = "Melaka",
  NegeriSembilan = "Negeri Sembilan",
  Pahang = "Pahang",
  Penang = "Penang",
  Perak = "Perak",
  Perlis = "Perlis",
  Selangor = "Selangor",
  Terengganu = "Terengganu",
  Sabah = "Sabah",
  Sarawak = "Sarawak",
}

export const states: StateData[] = [
  {
    name: State.Johor,
    capital: "Johor Bahru",
    royal_capital: "Muar",
    abbreviation: "JHR",
    iso_code: "MY-01",
  },
  {
    name: State.Kedah,
    capital: "Alor Setar",
    royal_capital: "Anak Bukit",
    abbreviation: "KDH",
    iso_code: "MY-02",
  },
  {
    name: State.Kelantan,
    capital: "Kota Bharu",
    royal_capital: "Kubang Kerian",
    abbreviation: "KTN",
    iso_code: "MY-03",
  },
  {
    name: State.Melaka,
    capital: "Bandar Melaka",
    royal_capital: "",
    abbreviation: "MLK",
    iso_code: "MY-04",
  },
  {
    name: State.NegeriSembilan,
    capital: "Seremban",
    royal_capital: "Seri Menanti",
    abbreviation: "NSN",
    iso_code: "MY-05",
  },
  {
    name: State.Pahang,
    capital: "Kuantan",
    royal_capital: "Pekan",
    abbreviation: "PHG",
    iso_code: "MY-06",
  },
  {
    name: State.Penang,
    capital: "George Town",
    royal_capital: "",
    abbreviation: "PNG",
    iso_code: "MY-07",
  },
  {
    name: State.Perak,
    capital: "Ipoh",
    royal_capital: "Kuala Kangsar",
    abbreviation: "PRK",
    iso_code: "MY-08",
  },
  {
    name: State.Perlis,
    capital: "Kangar",
    royal_capital: "Arau",
    abbreviation: "PLS",
    iso_code: "MY-09",
  },
  {
    name: State.Selangor,
    capital: "Shah Alam",
    royal_capital: "Klang",
    abbreviation: "SGR",
    iso_code: "MY-10",
  },
  {
    name: State.Terengganu,
    capital: "Kuala Terengganu",
    royal_capital: "Kuala Terengganu",
    abbreviation: "TRG",
    iso_code: "MY-11",
  },
  {
    name: State.Sabah,
    capital: "Kota Kinabalu",
    royal_capital: "",
    abbreviation: "SBH",
    iso_code: "MY-12",
  },
  {
    name: State.Sarawak,
    capital: "Kuching",
    royal_capital: "",
    abbreviation: "SWK",
    iso_code: "MY-13",
  },
];
