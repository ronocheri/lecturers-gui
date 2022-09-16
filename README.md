Client side: React
Server side: c# .net


I've decided to fillter the lecturers list on client side, since I've already made a call to the server.
I stored the result data from the service, and then I just filltered it by the input of the user
Maybe in big projects with big data, I wold prefer to create a new service that will fillter the data. Since it's not the case, I did it on client side.

Please first run the service and after that the client.
The only service that I called is : GetLectureres
url="https://localhost:7076/Lecturer/GetLectureres";