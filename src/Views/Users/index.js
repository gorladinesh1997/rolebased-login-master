import React, { useContext } from "react";
import Hoc from "../../Components/Hoc";
import { UserContext } from "../../Context";
import TextInput from "../../Components/TextInput";
import DataTable from "react-data-table-component";

const Users = () => {
  const { userDetails, setUserDetails } = useContext(UserContext);

  const handleChange = (e) => {
    const { value } = e.target;
    setUserDetails({ username: value });
  };

  const columns = [
    {
      name: "Title",
      selector: (row) => row.Title,
      sortable: true,
    },
    {
      name: "Director",
      selector: (row) => row.Director,
      sortable: false,
    },
    {
      name: "Year",
      selector: (row) => row.Year,
      sortable: false,
    },
  ];

  const data = [
    {
      Title: "Land Rover",
      Director: "Defender",
      Year: 1994,
    },
    {
      Title: "Chrysler",
      Director: "300",
      Year: 2007,
    },
    {
      Title: "GMC",
      Director: "Yukon XL 2500",
      Year: 2002,
    },
    {
      Title: "Mercury",
      Director: "Montego",
      Year: 2005,
    },
    {
      Title: "Ford",
      Director: "Mustang",
      Year: 1995,
    },
    {
      Title: "Buick",
      Director: "LeSabre",
      Year: 2000,
    },
    {
      Title: "Toyota",
      Director: "Avalon",
      Year: 1996,
    },
    {
      Title: "Lamborghini",
      Director: "Gallardo",
      Year: 2003,
    },
    {
      Title: "Mazda",
      Director: "RX-7",
      Year: 1987,
    },
    {
      Title: "Daewoo",
      Director: "Nubira",
      Year: 1999,
    },
    {
      Title: "Volkswagen",
      Director: "Routan",
      Year: 2011,
    },
    {
      Title: "Land Rover",
      Director: "Discovery",
      Year: 1994,
    },
    {
      Title: "Buick",
      Director: "Skylark",
      Year: 1986,
    },
    {
      Title: "Cadillac",
      Director: "Escalade",
      Year: 2006,
    },
    {
      Title: "Scion",
      Director: "tC",
      Year: 2009,
    },
    {
      Title: "Hyundai",
      Director: "Sonata",
      Year: 2004,
    },
    {
      Title: "Chrysler",
      Director: "Town & Country",
      Year: 1993,
    },
    {
      Title: "Pontiac",
      Director: "Bonneville",
      Year: 1965,
    },
    {
      Title: "Cadillac",
      Director: "Fleetwood",
      Year: 1995,
    },
    {
      Title: "GMC",
      Director: "Sierra 2500",
      Year: 1999,
    },
    {
      Title: "Suzuki",
      Director: "Swift",
      Year: 1992,
    },
    {
      Title: "Suzuki",
      Director: "Swift",
      Year: 2001,
    },
    {
      Title: "Mitsubishi",
      Director: "Galant",
      Year: 1993,
    },
    {
      Title: "Ford",
      Director: "Edge",
      Year: 2011,
    },
    {
      Title: "Volvo",
      Director: "S80",
      Year: 2005,
    },
    {
      Title: "Nissan",
      Director: "Stanza",
      Year: 1992,
    },
    {
      Title: "Ford",
      Director: "Expedition",
      Year: 2000,
    },
    {
      Title: "Suzuki",
      Director: "Vitara",
      Year: 2002,
    },
    {
      Title: "Ford",
      Director: "Fiesta",
      Year: 2011,
    },
    {
      Title: "Mercury",
      Director: "Sable",
      Year: 2000,
    },
    {
      Title: "Oldsmobile",
      Director: "Intrigue",
      Year: 2002,
    },
    {
      Title: "Buick",
      Director: "Skylark",
      Year: 1995,
    },
    {
      Title: "Mitsubishi",
      Director: "Galant",
      Year: 2001,
    },
    {
      Title: "Chrysler",
      Director: "Sebring",
      Year: 2005,
    },
    {
      Title: "Cadillac",
      Director: "Seville",
      Year: 2004,
    },
    {
      Title: "Audi",
      Director: "RS4",
      Year: 2007,
    },
    {
      Title: "Honda",
      Director: "Accord",
      Year: 2008,
    },
    {
      Title: "Chrysler",
      Director: "New Yorker",
      Year: 1994,
    },
    {
      Title: "Ford",
      Director: "E-Series",
      Year: 2003,
    },
    {
      Title: "Jaguar",
      Director: "XJ Series",
      Year: 2002,
    },
    {
      Title: "Volvo",
      Director: "XC70",
      Year: 2011,
    },
    {
      Title: "Mercedes-Benz",
      Director: "E-Class",
      Year: 2009,
    },
    {
      Title: "Lincoln",
      Director: "Mark VII",
      Year: 1984,
    },
    {
      Title: "Chevrolet",
      Director: "Cavalier",
      Year: 1992,
    },
    {
      Title: "Nissan",
      Director: "Altima",
      Year: 1998,
    },
    {
      Title: "Plymouth",
      Director: "Voyager",
      Year: 1996,
    },
    {
      Title: "Mazda",
      Director: "Miata MX-5",
      Year: 1997,
    },
    {
      Title: "Suzuki",
      Director: "Daewoo Magnus",
      Year: 2004,
    },
    {
      Title: "Aston Martin",
      Director: "DBS",
      Year: 2011,
    },
    {
      Title: "Chevrolet",
      Director: "Impala",
      Year: 2004,
    },
  ];
  return (
    <div className="p-5">
      {/* <h6>{userDetails?.username}</h6>
    <TextInput
          placeHolder="change text"
          onChange={handleChange}
          value={userDetails.username}
          name={"user details"}
          label="user name"
        /> */}
      <DataTable columns={columns} data={data} pagination />
    </div>
  );
};

export default Hoc(Users);
