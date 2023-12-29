class Person(object):
 	def __init__(self, name):
 		self.name = name
 	def getName(self):
 		return self.name
 	def isEmployee(self):
 		return False
class Employee(Person):
	def isEmployee(self):
		return True
person = Person("Ahmed") 
print(person.getName(), person.isEmployee())
emp = Employee("Ali")
print(emp.getName(), emp.isEmployee())

class Person(object):
 	def __init__(self, name, idnumber):
 		self.name = name
 		self.idnumber = idnumber

 	def display(self):
 		print(self.name)
 		print(self.idnumber)


class Employee(Person):
 	def __init__(self, name, idnumber, salary, post):
 		self.salary = salary
 		self.post = post
 		Person.__init__(self, name, idnumber)
a = Employee('Rahul', 886012, 200000, "Intern")
a.display()

class Person():
    def __init__(self, name, age):
    	self.name = name
    	self.age = age
    
    def display(self):
    	print(self.name, self.age)

# child class
class Student(Person):
    def __init__(self, name, age):
    	self.sName = name
    	self.sAge = age
    	# inheriting the properties of parent class
    	super().__init__("Osama", age)
    
    def displayInfo(self):
    	print(self.sName, self.sAge)

obj = Student("Khalid", 23)
obj.display()
obj.displayInfo()





         
