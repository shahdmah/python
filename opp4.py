
class Person(object):
  	def __init__(self, name, idnumber):
          self.name = name
          self.idnumber = idnumber
  	def display(self):
          print(self.name)
          print(self.idnumber)
obj = Person("Khalid", 257853)
print("Name: ", obj.name)
print("Id: ", obj.idnumber)
obj.display()

class Student:
 	_name = None
 	_roll = None
 	_branch = None
 	def __init__(self, name, roll, branch): 
 		self._name = name
 		self._roll = roll
 		self._branch = branch 
 	def _displayRollAndBranch(self):
 		print("Roll: ", self._roll)
 		print("Branch: ", self._branch)

class Geek(Student): 
 	def __init__(self, name, roll, branch): 
          Student.__init__(self, name, roll, branch) 		
 	def displayDetails(self): 
          print("Name: ", self._name) 
          self._displayRollAndBranch()
	 
obj = Geek("Ali", 1706256, "Information Technology") 
obj.displayDetails() 


class Geek:
	__name = None
	__roll = None
	__branch = None
	def __init__(self, name, roll, branch): 
		self.__name = name
		self.__roll = roll
		self.__branch = branch
	def __displayDetails(self):
		print("Name: ", self.__name)
		print("Roll: ", self.__roll)
		print("Branch: ", self.__branch)
	def accessPrivateFunction(self):
		self.__displayDetails() 
	def get_name(self):
		self.__name 
	def set_name(self , name):
		self.__name = name 
	def get_roll(self):
		self.__roll
	def set_roll(self , roll):
		self.__roll = roll 
	def get_branch(self):
		self.__branch
	def set_branch(self , branch):
		self.__branch = branch 
obj = Geek("Osama", 1706256, "Information Technology")
obj.accessPrivateFunction()






         
