class Employee {
  // 1. Properties (with type annotations) 
  name: string;
  id: number;

  // 2. Constructor -- initialize objects
    constructor(name: string, id: number) { 
    this.name = name;
    this.id = id;
  }

  // 3. Method
  getDetails(): string {
    return `${this.name} (ID: ${this.id})`;
  }
}

// 4. Instantiate the class
const emp = new Employee("Alice", 101);
console.log(emp.getDetails());
console.log("")