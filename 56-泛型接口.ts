interface IdFunc<Type> {
  id: (value: Type) => Type;
  ids: () => Type[];
}

let objjj: IdFunc<number> = {
  id(value) {
    return value;
  },
  ids() {
    return [1, 3, 5];
  },
};
