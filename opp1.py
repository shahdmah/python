
class A(object): 
 	def __init__(self, x): 
 		self.x = x  	
 	def getX(self): 
 		return self.X  	
class B(object): 
 	def __init__(self, x, y): 
 		self.x = x 
 		self.y = y 
 	def getSum(self): 
 		return self.X + self.y 
class C_A(A): 
 	def isA(self): 
 		return True 	
 	def isB(self): 
 		return False
class C_B(B): 
 	def isA(self): 
 		return False 	
 	def isB(self): 
 		return True
def getC(cond): 
 	if cond: 
 		return C_A(1) 
 	else: 
 		return C_B(1,2) 
ca = getC(True) 
print(ca.isA()) 
print(ca.isB()) 
cb = getC(False) 
print(cb.isA()) 
print(cb.isB()) 


class A(object): 
	def __init__(self, x): 
		self.x = x 
	def getX(self): 
		return self.X 
cond = True
class C(A if cond else object): 
	def isA(self): 
		return True 
ca = C(1) 
print(ca.isA()) 






         
