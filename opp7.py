class Parent(): 
	def __init__(self): 
		self.value = "Inside Parent"
	def show(self): 
		print(self.value) 
        
class Child(Parent):  
	def __init__(self): 
		self.value = "Inside Child"
	def show(self): 
		print(self.value) 
obj1 = Parent() 
obj2 = Child() 

obj1.show() 
obj2.show() 

class Parent(): 
	def show(self): 
		print("Inside Parent") 		
class Child(Parent): 
	def show(self): 
		Parent.show(self)   
		print("Inside Child") 

obj = Child() 
obj.show() 






         
