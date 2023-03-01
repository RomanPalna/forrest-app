export const ROUTES = [
  {
    title: "Пиво",
    types: ["Пиво", "Пиво б/а"],
    route: "/beer",
    format: "single",
  },
  {
    title: "Коньяк, Бренді",
    types: ["Коньяки", "Бренді"],
    route: "/brandy-cognac",
    format: "fifty",
  },
  {
    title: "Віскі",
    types: ["Віскі"],
    route: "/whisky",
    format: "fifty",
  },
  {
    title: "Кава, чай",
    types: ["Кава/Чай"],
    route: "/coffee-tea",
    format: "single",
  },
  {
    title: "Холодні напої",
    types: ["Холодні напої"],
    route: "/cold-drinks",
    format: "single",
  },
  {
    title: "лимонади та фреші",
    types: ["Фреші/лимонади"],
    route: "/lemonades",
    format: "single",
  },
  {
    title: "Горілка",
    types: ["Горілка"],
    route: "/gorilka",
    format: "fifty",
  },
  {
    title: "білі вина",
    types: ["Білі"],
    route: "/white-wine",
    format: "wine",
    path: "white-wine",
  },
  {
    title: "Червоні вина",
    types: ["Червоні"],
    route: "/red-wine",
    format: "wine",
    path: "red-wine",
  },
  {
    title: "шампанське, ігристі вина",
    types: ["Ігристі", "Шампанське"],
    route: "/sparkling-wine",
    format: "wine",
    path: "sparkling-wine",
  },
  {
    title: "Ром, Вермут, Текіла, Джин, Настоянки, Лікери",
    types: ["Роми", "Вермути", "Джини", "Текіли", "Лікери"],
    route: "/other-alco",
    format: "fifty",
  },
  {
    title: "коктейлі",
    types: ["Коктейлі алкогольні"],
    route: "/cocktails",
    format: "single",
    path: "cocktails",
  },
  {
    title: "Вино на розлив",
    types: ["Вино розлив"],
    route: "/glass-wine",
    format: "glass",
    path: "glass-wine",
  },
];
