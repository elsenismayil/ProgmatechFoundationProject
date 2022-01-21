from copy import copy
import py_compile


arr=['Samir','Mehemmed','Qurbani','Vesile','Qurbaneli','Memmedaga','Nurlan','Leman']
x = arr.copy()
arr.append(x)
print(arr)