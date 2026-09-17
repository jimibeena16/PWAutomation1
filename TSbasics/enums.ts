//Numeric enums -- 
enum Direction {
    Up, //0
    Down, //1
    Left, //2
    Right, //3
}
let move: Direction = Direction.Up
console.log(move)


enum StatusCode{
    Success = 200,
    NotFound = 404,
    ServerError = 500
}
let code: StatusCode = StatusCode.NotFound
let code1: string = StatusCode[500] 
console.log(code)
console.log(code1)

//String enums -- 
enum Role {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST"
}
let currentRole:Role= Role.Admin
console.log(currentRole)
console.log(Role.User)

//Heterogenous enums -- 
enum Status{
    Active = 1,
    Inactive = "INACTIVE",
    Pending = 0
}
console.log(Status.Active);
console.log(Status.Inactive);
console.log(Status[1]); 