#Creating variables of String type
str_length = input ("Please type the length :\n")
str_width = input ("Please type the width :\n")
str_meter = input ("How much for 1 meter \n")
#convert type
length = float(str_length)
width = float(str_width)
meter = float(str_meter)
#calculating area
area = length * width
price = area * meter
#Printing Results 
print(f"Your total area is : {area}" )
print(f"Give the guy {price}$" )