export const users = [
  {
    id: "usr_001",
    fullName: "Karim Boudjemaa",
    email: "karim.boudjemaa@email.com",
    phone: "+213661234567",
    address: "Rue des Frères Mahmoud, El Harrach, Alger",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.WyQivxc3OUs-9lGvez04igHaFj%26pid%3DApi&f=1&ipt=13d0d6b7573e5b1a80e6b3c3a464a6d8ad39da6a3a68b6f060584e6617b351e2&ipo=images",
    createdAt: "2025-02-12",
    vehicles: [
      {
        id: "veh_001",
        brand: "Renault",
        model: "Clio 4",
        year: 2019,
        mileage: 78500,
        licensePlate: "1234-115-16",
        lastServiceDate: "2025-03-15",
        nextServiceDueInKm: 3000,
      },
    ],
    appointments: [
      {
        id: "apt_001",
        date: "2025-03-15",
        service: "Vidange moteur + filtre",
        status: "Terminé",
        estimatedPrice: 4500,
      },
    ],
    reviews: [
      {
        id: "rev_001",
        comment:
          "Service rapide et efficace, le mécanicien était pro et honnête. Je recommande.",
        rating: 4,
        date: "2025-03-16",
      },
    ],
  },
  {
    id: "usr_002",
    fullName: "Samira Merabet",
    email: "samira.merabet@email.com",
    phone: "+213662987654",
    address: "Avenue de l’ALN, Oran",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.xet2V-2TkXPfD9zN6f-ongHaE8%26pid%3DApi&f=1&ipt=9ec0d0ebf4fc881462945930399d1b03afc608bde484cdfc567b91a891cfcc65&ipo=images",
    createdAt: "2025-01-28",
    vehicles: [
      {
        id: "veh_002",
        brand: "Hyundai",
        model: "i20",
        year: 2017,
        mileage: 102000,
        licensePlate: "5678-119-31",
        lastServiceDate: "2025-02-10",
        nextServiceDueInKm: 5000,
      },
    ],
    appointments: [
      {
        id: "apt_002",
        date: "2025-02-10",
        service: "Changement de courroie",
        status: "Terminé",
        estimatedPrice: 8500,
      },
      {
        id: "apt_003",
        date: "2025-04-02",
        service: "Révision générale",
        status: "À venir",
        estimatedPrice: 12000,
      },
    ],
    reviews: [
      {
        id: "rev_002",
        comment: "Très bon service, prise en charge rapide.",
        rating: 5,
        date: "2025-02-11",
      },
    ],
  },
  {
    id: "usr_003",
    fullName: "Yacine Rahmani",
    email: "yacine.rahmani@email.com",
    phone: "+213665998877",
    address: "Cité 5 Juillet, Constantine",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qpousYiXWN72oOfscxQLdAHaE5%26pid%3DApi&f=1&ipt=d7993338c548f5824778d54c8b1c71033e30fd3d9a48a1999ea737a6b05c10d9&ipo=images",
    createdAt: "2024-12-05",
    vehicles: [
      {
        id: "veh_003",
        brand: "Peugeot",
        model: "208",
        year: 2020,
        mileage: 64500,
        licensePlate: "4321-116-25",
        lastServiceDate: "2025-03-01",
        nextServiceDueInKm: 7000,
      },
      {
        id: "veh_004",
        brand: "Dacia",
        model: "Logan",
        year: 2015,
        mileage: 130000,
        licensePlate: "9876-115-25",
        lastServiceDate: "2024-11-20",
        nextServiceDueInKm: 2000,
      },
    ],
    appointments: [
      {
        id: "apt_004",
        date: "2025-03-01",
        service: "Changement filtre à air",
        status: "Terminé",
        estimatedPrice: 2500,
      },
    ],
    reviews: [
      {
        id: "rev_003",
        comment: "Bon rapport qualité/prix. Je reviendrai pour la Logan.",
        rating: 4,
        date: "2025-03-02",
      },
    ],
  },
];
