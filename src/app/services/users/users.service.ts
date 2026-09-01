import { Injectable, signal } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {

  users = signal<User[]>(
    [
      {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  photo: "https://i.pravatar.cc/300?img=11",
  phone: "+123456000001",
  status: "online"
},
{
  id: 2,
  name: "Jane Smith",
  email: "jane.smith@example.com",
  photo: "https://i.pravatar.cc/300?img=47",
  phone: "+123456000002",
  status: "offline"
},
{
  id: 3,
  name: "Michael Brown",
  email: "michael.brown@example.com",
  photo: "https://i.pravatar.cc/300?img=12",
  phone: "+123456000003",
  status: "online"
},
{
  id: 4,
  name: "Emily Davis",
  email: "emily.davis@example.com",
  photo: "https://i.pravatar.cc/300?img=45",
  phone: "+123456000004",
  status: "offline"
},
{
  id: 5,
  name: "David Wilson",
  email: "david.wilson@example.com",
  photo: "https://i.pravatar.cc/300?img=13",
  phone: "+123456000005",

},
{
  id: 6,
  name: "Sarah Miller",
  email: "sarah.miller@example.com",
  photo: "https://i.pravatar.cc/300?img=44",
  phone: "+123456000006",
  status: "offline"
},
{
  id: 7,
  name: "Robert Taylor",
  email: "robert.taylor@example.com",
  photo: "https://i.pravatar.cc/300?img=14",
  phone: "+123456000007",
  status: "offline"
},
{
  id: 8,
  name: "Jessica Moore",
  email: "jessica.moore@example.com",
  photo: "https://i.pravatar.cc/300?img=43",
  phone: "+123456000008",

},
{
  id: 9,
  name: "William Thomas",
  email: "william.thomas@example.com",
  photo: "https://i.pravatar.cc/300?img=15",
  phone: "+123456000009",
  status: "online",

},
{
  id: 10,
  name: "Sophia Martin",
  email: "sophia.martin@example.com",
  photo: "https://i.pravatar.cc/300?img=42",
  phone: "+123456000010",
  status: "offline"
},
{
  id: 11,
  name: "James Anderson",
  email: "james.anderson@example.com",
  photo: "https://i.pravatar.cc/300?img=16",
  phone: "+123456000011",
  status: "online"
},
{
  id: 12,
  name: "Olivia Thompson",
  email: "olivia.thompson@example.com",
  photo: "https://i.pravatar.cc/300?img=41",
  phone: "+123456000012",
  status: "offline"
},
{
  id: 13,
  name: "George Martin",
  email: "george.martin@example.com",
  photo: "https://i.pravatar.cc/300?img=17",
  phone: "+123456000013",
  status: "online"
},
    ]
  );

}
