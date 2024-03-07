const arr = [
  {
    _id: "65e38550338ea54d5a830bf9",
    nome: "Angelica Santos",
  },
  {
    _id: "65e38550338ea54d5a830bc02",
    nome: "Maria Santos",
  },
];

const filter = arr.filter((item) => item._id !== "65e38550338ea54d5a830bc02");
console.log(filter);
