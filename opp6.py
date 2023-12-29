class CSStudent:
	stream = 'cse'				 
	def __init__(self,name,roll):
		self.name = name		 
		self.roll = roll		
a = CSStudent('Geek', 1)
b = CSStudent('Nerd', 2)

print(a.stream) 
print(b.stream) 
print(a.name) 
print(b.name) 
print(a.roll) 
print(b.roll) 
print(CSStudent.stream)
 
CSStudent.stream = 'mech'
print(a.stream) 
print(b.stream)






         
