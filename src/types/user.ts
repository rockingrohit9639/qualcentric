export type User = {
  id: {
    name: string;
    value: string;
  };
  name: {
    first: string;
    last: string;
    title: string;
  };
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  gender: string;
  email: string;
  dob: {
    age: number;
    date: string;
  };
  location: {
    city: string;
    country: string;
    postcode: string;
    state: string;
    street: {
      name: string;
      number: number;
    };
  };
};

export type PaginationOptions = {
  page: number;
  results: number;
};

export type GetUserQueryResult = {
  results: User[];
};
