a = input('daxil edin:')
boyuk = 0
kicik =0
for x in a :
    if x.islower():
        kicik=kicik+1
    elif x.isupper():
        boyuk=boyuk+1    

print("kicik sayi:",kicik)
print ("boyuk sayi:",boyuk) 
    