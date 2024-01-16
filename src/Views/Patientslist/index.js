import DataTable from "react-data-table-component";
import Hoc from "../../Components/Hoc";
import { UserContext } from "../../Context";
import React, { useContext } from "react";

const Patientslist=()=> {
    const { userDetails, setUserDetails } = useContext(UserContext);

    const handleChange = (e) => {
      const { value } = e.target;
      setUserDetails({ username: value });
    };

    const columns = [
        {
            name: 'Id',
            selector: (row) => row.Id,
            sortable: true,
        },
        {
            name: 'Full_Name',
            selector: (row) => row.Full_Name,
            sortable: true,
        },
        {
            name: 'Gender',
            selector: (row) => row.Gender,
            sortable: false,
        },
        {
            name: 'Address',
            selector: (row) => row.Address,
            sortable: false,
        },
        {
            name: 'Status',
            selector: (row) => row.Status,
            sortable: false,
        },
    ];
  
  const data= [ 
    {
    Id: "11-7158151",
    Full_Name: "Reinald Broadfield",
    Gender: "Male",
    Address: "195 Blaine Way",
    Status: true
  }, 
  {
    Id: "36-6622378",
    Full_Name: "Miguel Harrinson",
    Gender: "Male",
    Address: "403 Haas Terrace",
    Status: true
  }, {
    Id: "95-8956143",
    Full_Name: "Chanda Sullivan",
    Gender: "Female",
    Address: "362 Fisk Drive",
    Status: false
  }, {
    Id: "90-4233455",
    Full_Name: "Leisha Allett",
    Gender: "Female",
    Address: "55482 Merchant Court",
    Status: false
  }, {
    Id: "76-8888163",
    Full_Name: "Mal Bilborough",
    Gender: "Genderqueer",
    Address: "24298 3rd Drive",
    Status: true
  }, {
    Id: "55-4259150",
    Full_Name: "Armand Keynes",
    Gender: "Male",
    Address: "68 Springview Pass",
    Status: true
  }, {
    Id: "24-0351655",
    Full_Name: "Sigismondo Harby",
    Gender: "Male",
    Address: "9 Dorton Center",
    Status: false
  }, {
    Id: "23-3970893",
    Full_Name: "Smitty Camilletti",
    Gender: "Male",
    Address: "67176 Mockingbird Hill",
    Status: false
  }, {
    Id: "63-0161496",
    Full_Name: "Stace Thomason",
    Gender: "Female",
    Address: "84 Scott Court",
    Status: true
  }, {
    Id: "71-1162057",
    Full_Name: "Ahmad Pena",
    Gender: "GenderfluId",
    Address: "523 Helena Lane",
    Status: true
  }, {
    Id: "58-4332074",
    Full_Name: "Randolf Panniers",
    Gender: "Non-binary",
    Address: "292 Barnett Pass",
    Status: false
  }, {
    Id: "67-5208847",
    Full_Name: "Murielle Hold",
    Gender: "Female",
    Address: "954 Jay Parkway",
    Status: true
  }, {
    Id: "25-7878829",
    Full_Name: "Lulita Cisson",
    Gender: "Female",
    Address: "3 Roth Parkway",
    Status: false
  }, {
    Id: "14-1361136",
    Full_Name: "Spence Osichev",
    Gender: "Male",
    Address: "196 Kropf Plaza",
    Status: false
  }, {
    Id: "29-9298963",
    Full_Name: "Marta Molines",
    Gender: "BiGender",
    Address: "1442 East Road",
    Status: false
  }, {
    Id: "34-9978660",
    Full_Name: "Nichole Vedekhov",
    Gender: "Male",
    Address: "557 McbrIde Lane",
    Status: false
  }, {
    Id: "02-4935919",
    Full_Name: "Rodina Wrightson",
    Gender: "Female",
    Address: "6545 Grim Pass",
    Status: false
  }, {
    Id: "93-5148708",
    Full_Name: "Janith Odger",
    Gender: "Female",
    Address: "26 4th Junction",
    Status: false
  }, {
    Id: "88-9339804",
    Full_Name: "Clarisse Kubanek",
    Gender: "Female",
    Address: "0011 Corry Circle",
    Status: false
  }, {
    Id: "92-7247579",
    Full_Name: "Giorgio D'Ugo",
    Gender: "Male",
    Address: "054 Aberg Way",
    Status: false
  }, {
    Id: "18-4063882",
    Full_Name: "Darya Oven",
    Gender: "BiGender",
    Address: "8281 Norway Maple Parkway",
    Status: true
  }, {
    Id: "42-1963807",
    Full_Name: "Trevor Kirkpatrick",
    Gender: "Genderqueer",
    Address: "28203 Menomonie Road",
    Status: false
  }, {
    Id: "07-3233576",
    Full_Name: "Artemis Mollett",
    Gender: "Male",
    Address: "8 Corry Lane",
    Status: true
  }, {
    Id: "60-5057979",
    Full_Name: "Louella Kubat",
    Gender: "Female",
    Address: "3485 Reindahl Park",
    Status: false
  }, {
    Id: "02-1864196",
    Full_Name: "Jeanne Mallebone",
    Gender: "Female",
    Address: "288 Pepper Wood Center",
    Status: false
  }, {
    Id: "64-0465386",
    Full_Name: "Jean Tinmouth",
    Gender: "Male",
    Address: "69689 Northwestern Plaza",
    Status: false
  }, {
    Id: "55-6699519",
    Full_Name: "Bran Scarf",
    Gender: "Male",
    Address: "20 Bashford Hill",
    Status: true
  }, {
    Id: "45-6663411",
    Full_Name: "Vernon Ginger",
    Gender: "Male",
    Address: "9011 CoolIdge Street",
    Status: false
  }, {
    Id: "78-5743078",
    Full_Name: "Charil Hexum",
    Gender: "Female",
    Address: "8546 Nova Terrace",
    Status: true
  }, {
    Id: "95-4119601",
    Full_Name: "Mariya Haywood",
    Gender: "Female",
    Address: "100 Summerview Circle",
    Status: false
  }, {
    Id: "69-6793555",
    Full_Name: "Lovell Attfield",
    Gender: "Male",
    Address: "0306 Ilene Drive",
    Status: true
  }, {
    Id: "14-8782480",
    Full_Name: "Claiborne Bankes",
    Gender: "Male",
    Address: "0 American Ash Point",
    Status: true
  }, {
    Id: "67-0520892",
    Full_Name: "Andras Crosston",
    Gender: "PolyGender",
    Address: "22 Rowland Road",
    Status: false
  }, {
    Id: "08-2732848",
    Full_Name: "Veriee Watmore",
    Gender: "Female",
    Address: "44 SunnysIde Hill",
    Status: false
  }, {
    Id: "35-2059118",
    Full_Name: "Bibby O'Duilleain",
    Gender: "Female",
    Address: "4 Oak Pass",
    Status: true
  }, {
    Id: "42-2446450",
    Full_Name: "Pollyanna Creamen",
    Gender: "Female",
    Address: "180 Green Way",
    Status: true
  }, {
    Id: "73-1131758",
    Full_Name: "Carleton Challiss",
    Gender: "Male",
    Address: "22 Dovetail Drive",
    Status: true
  }, {
    Id: "71-7026521",
    Full_Name: "Irwin Kinsley",
    Gender: "Male",
    Address: "01602 Michigan Road",
    Status: true
  }, {
    Id: "01-7906043",
    Full_Name: "Ramsey Hauxby",
    Gender: "Male",
    Address: "203 Sunbrook Drive",
    Status: true
  }, {
    Id: "44-3748866",
    Full_Name: "Salome Marklew",
    Gender: "Female",
    Address: "7694 Duke Alley",
    Status: true
  }, {
    Id: "12-3606194",
    Full_Name: "Yolande McFaul",
    Gender: "Female",
    Address: "772 Birchwood Way",
    Status: true
  }, {
    Id: "12-7682352",
    Full_Name: "Inigo Colliard",
    Gender: "Male",
    Address: "0 Lake View Plaza",
    Status: false
  }, {
    Id: "30-4284748",
    Full_Name: "Elva Szachniewicz",
    Gender: "Female",
    Address: "85834 Bartelt Pass",
    Status: true
  }, {
    Id: "30-3246571",
    Full_Name: "Liuka Beadnall",
    Gender: "Female",
    Address: "70 Mallory Alley",
    Status: true
  }, {
    Id: "74-2792819",
    Full_Name: "Merralee Wigley",
    Gender: "Female",
    Address: "7781 Merrick Way",
    Status: true
  }, {
    Id: "43-8460859",
    Full_Name: "Stacee McInerney",
    Gender: "Male",
    Address: "7145 Colorado Trail",
    Status: true
  }, {
    Id: "86-2505567",
    Full_Name: "Brendan Hightown",
    Gender: "Male",
    Address: "73 Gateway Circle",
    Status: false
  }, {
    Id: "83-5782095",
    Full_Name: "Stepha Ellit",
    Gender: "Female",
    Address: "59679 Fremont Avenue",
    Status: false
  }, {
    Id: "24-4608485",
    Full_Name: "Minette Dasent",
    Gender: "Female",
    Address: "0 Duke Park",
    Status: false
  }, {
    Id: "74-9654560",
    Full_Name: "Roseline Poker",
    Gender: "Female",
    Address: "635 Johnson Street",
    Status: true
  }]
  

  
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
}

export default Hoc(Patientslist);
